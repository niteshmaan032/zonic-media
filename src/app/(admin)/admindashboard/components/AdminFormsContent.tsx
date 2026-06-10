"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "@tiptap/extension-table";
import type { Editor } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  TbColumnInsertLeft,
  TbColumnInsertRight,
  TbColumnRemove,
  TbRowInsertBottom,
  TbRowInsertTop,
  TbRowRemove,
  TbTableMinus,
  TbTablePlus,
} from "react-icons/tb";
import type { FaqItem, SafeBlog } from "@/backend/lib/blogs";
import { FaqMarkerExtension } from "./FaqMarkerExtension";

type BlogFormState = {
  serviceTitle: string;
  blogTitle: string;
  blogSlug: string;
  publishDate: string;
  authorName: string;
  description: string;
};

const MAX_FAQS = 30;
const MAX_FAQ_QUESTION = 300;
const MAX_FAQ_ANSWER = 2000;

type BlogStatus = "draft" | "published";

type EditorToolbarProps = {
  editor: Editor | null;
  onInsertImage: () => void;
  onInsertFaqMarker: () => void;
  hasFaqMarker: boolean;
};

const MAX_FEATURED_IMAGE_SIZE_BYTES = 500 * 1024;
const FEATURED_IMAGE_REQUIRED_WIDTH = 1200;
const FEATURED_IMAGE_REQUIRED_HEIGHT = 675;
const FEATURED_IMAGE_RECOMMENDED_SIZE = `${FEATURED_IMAGE_REQUIRED_WIDTH} x ${FEATURED_IMAGE_REQUIRED_HEIGHT} px`;

function getImageFileDimensions(file: File) {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unable to read image dimensions."));
    };

    image.src = url;
  });
}

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

function EditorToolbar({
  editor,
  onInsertImage,
  onInsertFaqMarker,
  hasFaqMarker,
}: EditorToolbarProps) {
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

        <span className="admin-blog-toolbar-divider" aria-hidden="true" />

        <button
          type="button"
          title="Insert table (3×3 with header)"
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          <TbTablePlus size={16} />
        </button>

        <span className="admin-blog-toolbar-divider" aria-hidden="true" />

        <button
          type="button"
          className={hasFaqMarker ? "active" : ""}
          title={
            hasFaqMarker
              ? "FAQ marker already placed in this post"
              : "Insert FAQs at this position"
          }
          onClick={onInsertFaqMarker}
          disabled={hasFaqMarker}
        >
          Insert FAQs Here
        </button>

        {editor.isActive("table") && (
          <>
            <span className="admin-blog-toolbar-divider" aria-hidden="true" />

            <button
              type="button"
              title="Add column before"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
            >
              <TbColumnInsertLeft size={16} />
            </button>
            <button
              type="button"
              title="Add column after"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
            >
              <TbColumnInsertRight size={16} />
            </button>
            <button
              type="button"
              title="Remove column"
              className="admin-blog-toolbar-danger"
              onClick={() => editor.chain().focus().deleteColumn().run()}
            >
              <TbColumnRemove size={16} />
            </button>

            <span className="admin-blog-toolbar-divider" aria-hidden="true" />

            <button
              type="button"
              title="Add row above"
              onClick={() => editor.chain().focus().addRowBefore().run()}
            >
              <TbRowInsertTop size={16} />
            </button>
            <button
              type="button"
              title="Add row below"
              onClick={() => editor.chain().focus().addRowAfter().run()}
            >
              <TbRowInsertBottom size={16} />
            </button>
            <button
              type="button"
              title="Remove row"
              className="admin-blog-toolbar-danger"
              onClick={() => editor.chain().focus().deleteRow().run()}
            >
              <TbRowRemove size={16} />
            </button>

            <span className="admin-blog-toolbar-divider" aria-hidden="true" />

            <button
              type="button"
              title="Delete entire table"
              className="admin-blog-toolbar-danger"
              onClick={() => editor.chain().focus().deleteTable().run()}
            >
              <TbTableMinus size={16} />
            </button>
          </>
        )}
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
    blogSlug: "",
    publishDate: "",
    authorName: "",
    description: "",
  });
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [faqError, setFaqError] = useState("");
  const [hasFaqMarker, setHasFaqMarker] = useState(false);
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
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
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
      FaqMarkerExtension,
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
      setHasFaqMarker(currentEditor.isActive("faqMarker") || /data-faqs-marker/i.test(currentEditor.getHTML()));
    },
  });

  const insertFaqMarker = () => {
    if (!editor) return;
    if (/data-faqs-marker/i.test(editor.getHTML())) return;
    editor.chain().focus().insertContent({ type: "faqMarker" }).run();
    setHasFaqMarker(true);
  };

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
          blogSlug: blog.slug ?? "",
          publishDate: blog.publishDate,
          authorName: blog.authorName,
          description: blog.descriptionHtml,
        });
        setFaqs(blog.faqs ?? []);
        setHasFaqMarker(/data-faqs-marker/i.test(blog.descriptionHtml));
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

  const addFaq = () => {
    setFaqError("");
    setFaqs((current) => {
      if (current.length >= MAX_FAQS) {
        setFaqError(`You can add at most ${MAX_FAQS} FAQs.`);
        return current;
      }
      return [...current, { question: "", answer: "" }];
    });
  };

  const removeFaq = (index: number) => {
    setFaqError("");
    setFaqs((current) => current.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: keyof FaqItem, value: string) => {
    setFaqError("");
    setFaqs((current) =>
      current.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.currentTarget;
    const file = input.files?.[0];

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
      input.value = "";
      clearFeaturedImage();
      setFeaturedImageError("Only JPG and PNG image formats are supported.");
      return;
    }

    if (file.size > MAX_FEATURED_IMAGE_SIZE_BYTES) {
      input.value = "";
      clearFeaturedImage();
      setFeaturedImageError("Featured image must be 500 KB or smaller.");
      return;
    }

    let dimensions: { width: number; height: number };

    try {
      dimensions = await getImageFileDimensions(file);
    } catch {
      input.value = "";
      clearFeaturedImage();
      setFeaturedImageError(
        `Unable to read image dimensions. Upload a ${FEATURED_IMAGE_RECOMMENDED_SIZE} JPG or PNG image.`,
      );
      return;
    }

    if (
      dimensions.width !== FEATURED_IMAGE_REQUIRED_WIDTH ||
      dimensions.height !== FEATURED_IMAGE_REQUIRED_HEIGHT
    ) {
      input.value = "";
      clearFeaturedImage();
      setFeaturedImageError(
        `Featured image must be exactly ${FEATURED_IMAGE_RECOMMENDED_SIZE}. Uploaded image is ${dimensions.width} x ${dimensions.height} px.`,
      );
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
      blogSlug: "",
      publishDate: "",
      authorName: "",
      description: "",
    });
    setFaqs([]);
    setFaqError("");
    setHasFaqMarker(false);
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
    setFaqError("");

    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    if (!featuredImageFile && !existingFeaturedImageUrl) {
      setFeaturedImageError("Featured image is required.");
      return;
    }

    const trimmedFaqs = faqs.map((item) => ({
      question: item.question.trim(),
      answer: item.answer.trim(),
    }));
    const hasIncompleteFaq = trimmedFaqs.some(
      (item) => (item.question === "") !== (item.answer === ""),
    );

    if (hasIncompleteFaq) {
      setFaqError("Each FAQ needs both a question and an answer.");
      return;
    }

    const cleanFaqs = trimmedFaqs.filter(
      (item) => item.question !== "" && item.answer !== "",
    );

    const formData = new FormData();
    formData.append("serviceTitle", form.serviceTitle);
    formData.append("blogTitle", form.blogTitle);
    formData.append("slug", form.blogSlug);
    formData.append("publishDate", form.publishDate);
    formData.append("authorName", form.authorName);
    formData.append("descriptionHtml", editor?.getHTML() ?? form.description);
    formData.append("faqs", JSON.stringify(cleanFaqs));
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

                <div className="col-12">
                  <label className="form-label" htmlFor="blogSlug">
                    Blog URL
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" style={{ fontSize: 13 }}>
                      /blog/
                    </span>
                    <input
                      id="blogSlug"
                      type="text"
                      className="form-control"
                      placeholder="how-local-seo-grows-service-businesses"
                      value={form.blogSlug}
                      onChange={(e) => {
                        const raw = e.target.value
                          .toLowerCase()
                          .replace(/[^a-z0-9-]/g, "")
                          .replace(/-{2,}/g, "-");
                        setForm((current) => ({
                          ...current,
                          blogSlug: raw,
                        }));
                      }}
                      required
                      pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
                      title="Only lowercase letters, numbers, and hyphens allowed (e.g. my-blog-post)"
                    />
                  </div>
                  <p className="admin-blog-upload-note mb-0">
                    URL-friendly slug — only lowercase letters, numbers, and
                    hyphens. This becomes the blog&apos;s permanent web address.
                  </p>
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
                    KB. Recommended size: {FEATURED_IMAGE_RECOMMENDED_SIZE}
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
                      onInsertFaqMarker={insertFaqMarker}
                      hasFaqMarker={hasFaqMarker}
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

                <div className="col-12">
                  <div className="admin-blog-faqs-header">
                    <label className="form-label mb-0">FAQs (optional)</label>
                    <button
                      type="button"
                      className="admin-blog-faq-add-btn"
                      onClick={addFaq}
                      disabled={faqs.length >= MAX_FAQS}
                    >
                      + Add FAQ
                    </button>
                  </div>
                  <p className="admin-blog-upload-note mb-2">
                    Each FAQ becomes an accordion item on the published post and
                    is included in FAQPage structured data for Google. Use
                    &quot;Insert FAQs Here&quot; in the editor toolbar to control
                    where the accordion appears inside the article; otherwise it
                    renders at the bottom.
                  </p>

                  {faqs.length === 0 ? (
                    <p className="admin-blog-faqs-empty mb-0">
                      No FAQs added yet. Click &quot;Add FAQ&quot; to create one.
                    </p>
                  ) : (
                    <div className="admin-blog-faq-list">
                      {faqs.map((item, index) => (
                        <div className="admin-blog-faq-item" key={index}>
                          <div className="admin-blog-faq-item-head">
                            <span className="admin-blog-faq-item-label">
                              FAQ {index + 1}
                            </span>
                            <button
                              type="button"
                              className="admin-blog-faq-remove-btn"
                              onClick={() => removeFaq(index)}
                            >
                              Remove
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control admin-blog-faq-question"
                            placeholder="Question"
                            value={item.question}
                            maxLength={MAX_FAQ_QUESTION}
                            onChange={(e) =>
                              updateFaq(index, "question", e.target.value)
                            }
                          />
                          <textarea
                            className="form-control admin-blog-faq-answer"
                            placeholder="Answer"
                            rows={3}
                            value={item.answer}
                            maxLength={MAX_FAQ_ANSWER}
                            onChange={(e) =>
                              updateFaq(index, "answer", e.target.value)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {faqError ? (
                    <p className="admin-blog-upload-error mb-0 mt-2">
                      {faqError}
                    </p>
                  ) : null}
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
