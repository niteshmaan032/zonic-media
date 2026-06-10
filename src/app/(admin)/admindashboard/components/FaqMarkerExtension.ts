import { Node, mergeAttributes } from "@tiptap/core";

export const FAQ_MARKER_HTML = '<div data-faqs-marker="true"></div>';

export const FaqMarkerExtension = Node.create({
  name: "faqMarker",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,

  parseHTML() {
    return [{ tag: "div[data-faqs-marker]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-faqs-marker": "true" }),
    ];
  },

  addNodeView() {
    return () => {
      const dom = document.createElement("div");
      dom.setAttribute("data-faqs-marker", "true");
      dom.className = "admin-blog-faq-marker";
      dom.contentEditable = "false";

      const label = document.createElement("span");
      label.className = "admin-blog-faq-marker-label";
      label.textContent = "FAQs will render here on the published page";
      dom.appendChild(label);

      return { dom };
    };
  },
});
