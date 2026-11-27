import type { IconType } from "react-icons";
import { FaMicrosoft } from "react-icons/fa";
import { SiGoogle, SiGooglegemini, SiOpenai, SiPerplexity } from "react-icons/si";

/* The five AI engines the GEO page shows, each in its own brand colour so
   a glance tells them apart (owner, 18 Nov 2026: UI colours should match
   what they show). Order matches HERO_UI.runs[].engine. */
export const ENGINE_LIST: { name: string; icon: IconType; color: string; soft: string }[] = [
  { name: "ChatGPT", icon: SiOpenai, color: "#10a37f", soft: "#e6f6f1" },
  { name: "AI Overviews", icon: SiGoogle, color: "#1a73e8", soft: "#e8f0fe" },
  { name: "Perplexity", icon: SiPerplexity, color: "#20808d", soft: "#e3f3f4" },
  { name: "Copilot", icon: FaMicrosoft, color: "#0078d4", soft: "#e5f1fb" },
  { name: "Gemini", icon: SiGooglegemini, color: "#8e75f0", soft: "#f1edfe" },
];
