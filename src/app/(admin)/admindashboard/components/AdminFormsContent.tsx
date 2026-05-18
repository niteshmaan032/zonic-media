"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import type { Editor } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { SafeBlog } from "@/backend/lib/blogs";

type BlogFormState = {
  serviceTitle: string;
  blogTitle: string;
  publishDate: string;
  authorName: string;
  description: string;
};

type BlogStatus = "draft" | "published";

type EditorToolbarProps = {
  editor: Editor | null;
  onInsertImage: () => void;
};

const MAX_FEATURED_IMAGE_SIZE_BYTES = 500 * 1024;

function formatBlogDate(value: string) {
  if (!value) {
    return "";
  }

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function EditorToolbar({ editor, onInsertImage }: EditorToolbarProps) {
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkHref, setLinkHref] = useState("");
  const linkInputRef = useRef<HTMLInputElement | null>(null);

  if (!editor) {
    return null;
  }

  const isInLink = editor.isActive("link");

  const tools = [
    {
      label: "B",
      active: editor.isActive("bold"),
      action: () => editor.chain().focus().toggleBold().run(),
    },
    {
      label: "I",
      active: editor.isActive("italic"),
      action: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: "H2",
      active: editor.isActive("heading", { level: 2 }),
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "H3",
      active: editor.isActive("heading", { level: 3 }),
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      label: "List",
      active: editor.isActive("bulletList"),
      action: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Numbered",
      active: editor.isActive("orderedList"),
      action: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ];

  const handleLinkClick = () => {
    if (isInLink) {
      editor.chain().focus().unsetLink().run();
      setLinkOpen(false);
      setLinkHref("");
      return;
    }
    const currentHref = (editor.getAttributes("link").href as string) ?? "";
    setLinkHref(currentHref);
    setLinkOpen(true);
    setTimeout(() => linkInputRef.current?.focus(), 0);
  };

  const handleLinkSet = () => {
    const href = linkHref.trim();
    if (href) {
      editor.chain().focus().setLink({ href }).run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
    setLinkOpen(false);
    setLinkHref("");
  };

  const handleLinkCancel = () => {
    setLinkOpen(false);
    setLinkHref("");
    editor.chain().focus().run();
  };

  return (
    <>
      <div className="admin-blog-editor-toolbar" aria-label="Blog editor toolbar">
        {tools.map((tool) => (
          <button
            key={tool.label}
            type="button"
            className={tool.active ? "active" : ""}
            onClick={tool.action}
          >
            {tool.label}
          </button>
        ))}
        <button type="button" onClick={onInsertImage}>
          Upload Image
        </button>
        <button
          type="button"
          className={isInLink ? "active" : ""}
          onClick={handleLinkClick}
          title={isInLink ? "Remove link" : "Add link"}
        >
          {isInLink ? "Unlink" : "Link"}
        </button>
      </div>
      {linkOpen ? (
        <div className="admin-blog-editor-link-bar">
          <input
            ref={linkInputRef}
            type="url"
            value={linkHref}
            onChange={(e) => setLinkHref(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleLinkSet();
              }
              if (e.key === "Escape") {
                handleLinkCancel();
              }
            }}
            placeholder="https://example.com"
          />
          <button type="button" onClick={handleLinkSet}>
            Set Link
          </button>
          <button type="button" onClick={handleLinkCancel}>
            Cancel
          </button>
        </div>
      ) : null}
    </>
  );
}

type AdminFormsContentProps = {
  blogId?: string;
};

export function AdminFormsContent({ blogId }: AdminFormsContentProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const editorImageInputRef = useRef<HTMLInputElement | null>(null);
  const editorContentSet = useRef(false);
  const isEditMode = Boolean(blogId);

  const [form, setForm] = useState<BlogFormState>({
    serviceTitle: "",
    blogTitle: "",
    publishDate: "",
    authorName: "",
    description: "",
  });
  const [featuredImageName, setFeaturedImageName] = useState("");
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState("");
  const [existingFeaturedImageUrl, setExistingFeaturedImageUrl] = useState("");
  const [featuredImageError, setFeaturedImageError] = useState("");
  const [submitStatus, setSubmitStatus] = useState<BlogStatus | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const submitMessageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [editorImageError, setEditorImageError] = useState("");
  const [editBlogHtml, setEditBlogHtml] = useState<string | null>(null);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [editLoadError, setEditLoadError] = useState("");

  const formattedDate = formatBlogDate(form.publishDate);
  const isSubmitting = submitStatus !== null;

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageExtension.configure({
        allowBase64: true,
        resize: {
          enabled: true,
          directions: ["left", "right", "bottom-right", "bottom-left"],
          minWidth: 120,
          minHeight: 80,
          alwaysPreserveAspectRatio: true,
        },
        HTMLAttributes: {
          class: "admin-blog-editor-image",
        },
      }),
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
        autolink: true,
      }),
    ],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "admin-blog-editor-content",
        "aria-label": "Blog description",
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      setForm((current) => ({
        ...current,
        description: currentEditor.getHTML(),
      }));
    },
  });

  // Set editor content when in edit mode (handles the async race between editor ready + data ready)
  useEffect(() => {
    if (editor && editBlogHtml !== null && !editorContentSet.current) {
      editor.commands.setContent(editBlogHtml);
      setForm((current) => ({ ...current, description: editBlogHtml }));
      editorContentSet.current = true;
    }
  }, [editor, editBlogHtml]);

  // Fetch blog data when in edit mode
  useEffect(() => {
    if (!blogId) return;

    const controller = new AbortController();
    setLoadingEdit(true);
    setEditLoadError("");

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/admin/blogs/${blogId}`, {
          credentials: "include",
          signal: controller.signal,
        });
        const result = (await res.json()) as {
          success?: boolean;
          message?: string;
          blog?: SafeBlog;
        };

        if (!res.ok || !result.success || !result.blog) {
          setEditLoadError(result.message ?? "Failed to load blog.");
          return;
        }

        const blog = result.blog;
        setForm({
          serviceTitle: blog.serviceTitle,
          blogTitle: blog.blogTitle,
          publishDate: blog.publishDate,
          authorName: blog.authorName,
          description: blog.descriptionHtml,
        });
        setExistingFeaturedImageUrl(blog.featuredImageUrl);
        setFeaturedImagePreview(blog.featuredImageUrl);
        setFeaturedImageName("");
        setEditBlogHtml(blog.descriptionHtml);
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setEditLoadError("Failed to load blog.");
        }
      } finally {
        setLoadingEdit(false);
      }
    };

    fetchBlog();
    return () => controller.abort();
  }, [blogId]);

  useEffect(() => {
    return () => {
      if (featuredImagePreview && featuredImagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(featuredImagePreview);
      }
    };
  }, [featuredImagePreview]);

  useEffect(() => {
    if (!submitMessage) return;

    if (submitMessageTimer.current) {
      clearTimeout(submitMessageTimer.current);
    }

    submitMessageTimer.current = setTimeout(() => {
      setSubmitMessage("");
    }, 10_000);

    return () => {
      if (submitMessageTimer.current) {
        clearTimeout(submitMessageTimer.current);
      }
    };
  }, [submitMessage]);

  const updateField =
    (field: keyof BlogFormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const clearFeaturedImage = () => {
      if (featuredImagePreview && featuredImagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(featuredImagePreview);
      }

      setFeaturedImageName("");
      setFeaturedImageFile(null);
      setFeaturedImagePreview(existingFeaturedImageUrl);
    };

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      event.target.value = "";
      clearFeaturedImage();
      setFeaturedImageError("Only JPG and PNG image formats are supported.");
      return;
    }

    if (file.size > MAX_FEATURED_IMAGE_SIZE_BYTES) {
      event.target.value = "";
      clearFeaturedImage();
      setFeaturedImageError("Featured image must be 500 KB or smaller.");
      return;
    }

    if (featuredImagePreview && featuredImagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(featuredImagePreview);
    }

    setFeaturedImageName(file.name);
    setFeaturedImageFile(file);
    setFeaturedImagePreview(URL.createObjectURL(file));
    setFeaturedImageError("");
  };

  const handleEditorImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file || !editor) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      setEditorImageError("Only image files can be added to the blog content.");
      return;
    }

    if (file.size > MAX_FEATURED_IMAGE_SIZE_BYTES) {
      event.target.value = "";
      setEditorImageError("Image size is too big. Upload an image under 500 KB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const imageSource = reader.result;

      if (typeof imageSource !== "string") {
        return;
      }

      editor
        .chain()
        .focus()
        .setImage({ src: imageSource, alt: file.name })
        .run();
      setEditorImageError("");
      event.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const resetForm = () => {
    setForm({
      serviceTitle: "",
      blogTitle: "",
      publishDate: "",
      authorName: "",
      description: "",
    });
    setFeaturedImageName("");
    setFeaturedImageFile(null);
    setFeaturedImageError("");
    setExistingFeaturedImageUrl("");
    setEditBlogHtml(null);
    editorContentSet.current = false;

    if (featuredImagePreview && featuredImagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(featuredImagePreview);
    }

    setFeaturedImagePreview("");
    editor?.commands.clearContent();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const submitBlog = async (status: BlogStatus) => {
    setSubmitMessage("");
    setSubmitError("");

    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    if (!featuredImageFile && !existingFeaturedImageUrl) {
      setFeaturedImageError("Featured image is required.");
      return;
    }

    const formData = new FormData();
    formData.append("serviceTitle", form.serviceTitle);
    formData.append("blogTitle", form.blogTitle);
    formData.append("publishDate", form.publishDate);
    formData.append("authorName", form.authorName);
    formData.append("descriptionHtml", editor?.getHTML() ?? form.description);
    formData.append("status", status);

    if (featuredImageFile) {
      formData.append("featuredImage", featuredImageFile);
    }

    setSubmitStatus(status);

    const url = isEditMode
      ? `/api/admin/blogs/${blogId}`
      : "/api/admin/blogs";
    const method = isEditMode ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: formData,
        credentials: "include",
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setSubmitError(result.message ?? "Unable to save blog.");
        return;
      }

      if (isEditMode) {
        router.push("/admindashboard/manage-blogs");
      } else {
        setSubmitMessage(
          result.message ??
            (status === "published"
              ? "Blog published successfully."
              : "Blog saved as draft."),
        );
        resetForm();
      }
    } catch {
      setSubmitError("Unable to save blog. Please try again.");
    } finally {
      setSubmitStatus(null);
    }
  };

  if (loadingEdit) {
    return (
      <div className="admin-blog-submit-overlay" role="status">
        <div className="admin-blog-submit-overlay-box">
          <div className="spinner-border text-primary" aria-hidden="true" />
          <span>Loading blog editor...</span>
        </div>
      </div>
    );
  }

  if (editLoadError) {
    return (
      <div className="container-fluid pt-4 px-4">
        <p className="admin-blog-submit-error">{editLoadError}</p>
      </div>
    );
  }

  return (
    <div className="container-fluid pt-4 px-4">
      {isSubmitting ? (
        <div className="admin-blog-submit-overlay" role="status">
          <div className="admin-blog-submit-overlay-box">
            <div className="spinner-border text-primary" aria-hidden="true" />
            <span>
              {isEditMode
                ? "Updating blog..."
                : submitStatus === "published"
                  ? "Publishing blog..."
                  : "Saving draft..."}
            </span>
          </div>
        </div>
      ) : null}
      <div className="row g-4">
        <div className="col-12">
          <div className="bg-light rounded h-100 p-4 admin-blog-card">
            <form
              ref={formRef}
              className="admin-blog-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label" htmlFor="serviceTitle">
                    Service Title
                  </label>
                  <input
                    id="serviceTitle"
                    type="text"
                    className="form-control"
                    placeholder="Local SEO Services"
                    value={form.serviceTitle}
                    onChange={updateField("serviceTitle")}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="blogTitle">
                    Blog Title
                  </label>
                  <input
                    id="blogTitle"
                    type="text"
                    className="form-control"
                    placeholder="How local SEO grows service businesses"
                    value={form.blogTitle}
                    onChange={updateField("blogTitle")}
                    required
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <label className="form-label" htmlFor="publishDate">
                    Date
                  </label>
                  <input
                    id="publishDate"
                    type="date"
                    className="form-control"
                    value={form.publishDate}
                    onChange={updateField("publishDate")}
                    required
                  />
                  {formattedDate ? (
                    <p className="admin-blog-date-preview mb-0">
                      {formattedDate}
                    </p>
                  ) : null}
                </div>

                <div className="col-12 col-lg-6">
                  <label className="form-label" htmlFor="authorName">
                    Author Name
                  </label>
                  <input
                    id="authorName"
                    type="text"
                    className="form-control"
                    placeholder="Author name"
                    value={form.authorName}
                    onChange={updateField("authorName")}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="featuredImage">
                    Featured Image
                  </label>
                  <div className="admin-blog-upload">
                    <input
                      ref={fileInputRef}
                      id="featuredImage"
                      type="file"
                      accept="image/jpeg,image/png"
                      className="admin-blog-file-input"
                      onChange={handleImageUpload}
                    />
                    <button
                      type="button"
                      className="admin-blog-upload-button"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {isEditMode && existingFeaturedImageUrl && !featuredImageFile
                        ? "Change Image"
                        : "Upload Your Image"}
                    </button>
                    {featuredImageName ? (
                      <span className="admin-blog-upload-name">
                        {featuredImageName}
                      </span>
                    ) : null}
                  </div>
                  <p className="admin-blog-upload-note mb-0">
                    Only JPG and PNG image formats are supported. Max size: 500
                    KB.
                  </p>
                  {featuredImageError ? (
                    <p className="admin-blog-upload-error mb-0">
                      {featuredImageError}
                    </p>
                  ) : null}
                  {featuredImagePreview ? (
                    <div className="admin-blog-preview-wrap">
                      <p className="admin-blog-upload-success mb-2">
                        {featuredImageFile
                          ? "Image successfully uploaded"
                          : "Current featured image"}
                      </p>
                      <div
                        role="img"
                        aria-label="Featured image preview"
                        className="admin-blog-image-preview"
                        style={{
                          backgroundImage: `url(${featuredImagePreview})`,
                        }}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="col-12">
                  <label className="form-label">Blog Description</label>
                  <div className="admin-blog-editor">
                    <EditorToolbar
                      editor={editor}
                      onInsertImage={() => editorImageInputRef.current?.click()}
                    />
                    <input
                      ref={editorImageInputRef}
                      type="file"
                      accept="image/*"
                      className="admin-blog-editor-file-input"
                      onChange={handleEditorImageUpload}
                    />
                    <EditorContent editor={editor} />
                  </div>
                  {editorImageError ? (
                    <p className="admin-blog-upload-error mb-0">
                      {editorImageError}
                    </p>
                  ) : null}
                  <input
                    type="hidden"
                    name="description"
                    value={form.description}
                  />
                </div>

                <div className="col-12 d-flex flex-wrap justify-content-end gap-2">
                  {submitError ? (
                    <p className="admin-blog-submit-error mb-0 me-auto">
                      {submitError}
                    </p>
                  ) : null}
                  {submitMessage ? (
                    <p className="admin-blog-submit-success mb-0 me-auto">
                      {submitMessage}
                    </p>
                  ) : null}
                  <button
                    type="button"
                    className="btn admin-blog-draft-button px-4"
                    disabled={isSubmitting}
                    onClick={() => submitBlog("draft")}
                  >
                    {submitStatus === "draft"
                      ? isEditMode
                        ? "Updating..."
                        : "Saving..."
                      : "Save as Draft"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    disabled={isSubmitting}
                    onClick={() => submitBlog("published")}
                  >
                    {submitStatus === "published"
                      ? isEditMode
                        ? "Updating..."
                        : "Publishing..."
                      : isEditMode
                        ? "Update Blog"
                        : "Publish Blog"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
