"use client";

import { useEffect, useRef } from "react";
import { runOnFirstInteractionOrAfter } from "@/shared/deferUntilInteraction";

const FORM_ORIGIN = "https://forms.zonicllc.com";
const EMBED_SCRIPT_ID = "ghl-form-embed";

/**
 * A GoHighLevel form embedded inline, in place of our own lead form (first:
 * the roofing website design page, owner, 20 Nov 2026). Attributes follow
 * GHL's inline embed code.
 *
 * React renders an empty host and the iframe is created inside it here:
 * form_embed.js resizes the iframe and, for its other layouts, moves it into
 * containers of its own, which React can't own. The script runs once per
 * load and only sets up iframes already in the page, so it's added again on
 * every mount (it keeps its state on window and skips iframes it has already
 * set up). Both wait for the first interaction, like the GHL tracking
 * script, to stay out of page startup.
 */
export default function GhlFormEmbed({
  formId,
  formName,
  height,
}: {
  formId: string;
  /** "Form name" from the embed code (iframe title and data-form-name). */
  formName: string;
  /** data-height from the embed code; the space kept until the form loads. */
  height: number;
}) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const iframeId = `inline-${formId}`;

    const cancel = runOnFirstInteractionOrAfter(() => {
      const iframe = document.createElement("iframe");
      iframe.src = `${FORM_ORIGIN}/widget/form/${formId}`;
      iframe.id = iframeId;
      iframe.title = formName;
      iframe.style.cssText =
        "width:100%;height:100%;border:none;border-radius:3px";
      const attrs: Record<string, string> = {
        "data-layout": "{'id':'INLINE'}",
        "data-trigger-type": "alwaysShow",
        "data-trigger-value": "",
        "data-activation-type": "alwaysActivated",
        "data-activation-value": "",
        "data-deactivation-type": "neverDeactivate",
        "data-deactivation-value": "",
        "data-form-name": formName,
        "data-height": String(height),
        "data-layout-iframe-id": iframeId,
        "data-form-id": formId,
      };
      for (const [k, v] of Object.entries(attrs)) iframe.setAttribute(k, v);
      el.appendChild(iframe);

      document.getElementById(EMBED_SCRIPT_ID)?.remove();
      const script = document.createElement("script");
      script.id = EMBED_SCRIPT_ID;
      script.src = `${FORM_ORIGIN}/js/form_embed.js`;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      cancel();
      el.replaceChildren();
    };
  }, [formId, formName, height]);

  return <div ref={host} style={{ minHeight: height }} />;
}
