"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Script from "next/script";
import "@/app/style/chatbot.css";

// Lazy-load LiveChatRoom so Ably is never bundled for visitors who don't need it
const LiveChatRoom = lazy(() => import("@/app/components/LiveChatRoom"));

// ─── Visitor ID helper ────────────────────────────────────────────────────────
function getOrCreateVisitorId() {
  try {
    const key = "zonic_visitor_id";
    let id = localStorage.getItem(key);
    if (!id) {
      id = "v" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      localStorage.setItem(key, id);
    }
    return id;
  } catch {
    return "v" + Math.random().toString(36).slice(2, 10);
  }
}

// ─── Conversation config ──────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  "Web Design / Website Redesign",
  "Local SEO",
  "Google Business Profile / GMB Help",
  "Google Ads / PPC",
  "Branding / Logo",
  "UI/UX Design",
  "Custom Software",
];

const SUB_SERVICE_OPTIONS = {
  "Web Design / Website Redesign": [
    "🌐 WordPress Site",
    "⚡ Custom Website",
    "🛒 E-commerce Store",
    "🎯 Landing Page",
  ],
  "Local SEO": [
    "📍 Google Maps Ranking",
    "📈 More Local Leads",
    "🔍 Website SEO",
    "📊 Full Local SEO Audit",
  ],
  "Google Business Profile / GMB Help": [
    "🔓 Profile Suspended",
    "✅ Verification Help",
    "📌 Improve Ranking",
    "🖊️ Profile Optimization",
  ],
  "Google Ads / PPC": [
    "🚀 Launch First Campaign",
    "🔧 Fix Existing Ads",
    "💰 Lower Cost Per Click",
    "📊 Ads + Landing Page",
  ],
  "Branding / Logo": [
    "🎨 Logo Design",
    "📦 Full Brand Package",
    "🔄 Rebrand Existing",
    "📋 Brand Guidelines",
  ],
  "UI/UX Design": [
    "🖥️ Website",
    "📱 Mobile App",
    "📊 Dashboard / Portal",
    "🔬 UX Audit",
  ],
  "Custom Software": [
    "⚙️ Business Automation",
    "🔗 API Integration",
    "📱 Mobile App",
    "🌐 Web Application",
  ],
};

const SUB_SERVICE_PROMPTS = {
  "Web Design / Website Redesign": "Great choice! **Which type of website are you looking for?**",
  "Local SEO":                     "Perfect! **What's your main SEO goal right now?**",
  "Google Business Profile / GMB Help": "Got it! **What's going on with your Google Business Profile?**",
  "Google Ads / PPC":              "Awesome! **What are you looking to achieve with Google Ads?**",
  "Branding / Logo":               "Love it! **What branding work do you need?**",
  "UI/UX Design":                  "Great! **What type of product are we designing for?**",
  "Custom Software":               "Interesting! **What kind of software solution do you need?**",
};

const CALENDAR_URL = "https://calendar.app.google/EGNcQQMvMU3DGP5R6";

const CONNECT_SNIPPET =
  `📅 [Book a Meeting](${CALENDAR_URL})\n` +
  `📞 **Urgent?** [+1 (302) 726-9736](tel:+13027269736)\n` +
  `📧 [contact@zonicllc.com](mailto:contact@zonicllc.com)`;

// ─── reCAPTCHA token ──────────────────────────────────────────────────────────

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();

async function getRecaptchaToken() {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return "";
  return new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "lead_form_submit" })
        .then(resolve)
        .catch(() => resolve(""));
    });
  });
}

// ─── Email submission ─────────────────────────────────────────────────────────

async function submitLeadToEmail(leadData) {
  const res = await fetch("/api/send-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadData),
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(json?.message || "Failed to submit lead.");
  }

  return json;
}

// ─── Minimal markdown renderer (bold + links only) ───────────────────────────

function renderBotText(text) {
  const parts = [];
  let lastIdx = 0;
  const regex = /\*\*([^*\n]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) parts.push(text.slice(lastIdx, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={match.index}>{match[1]}</strong>);
    } else {
      parts.push(
        <a key={match.index} href={match[3]} target="_blank" rel="noopener noreferrer">
          {match[2]}
        </a>
      );
    }
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts.length ? parts : text;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className="zoni-message zoni-message--bot">
      <div className="zoni-avatar" aria-hidden="true">Z</div>
      <div className="zoni-bubble zoni-bubble--bot zoni-typing">
        <span /><span /><span />
      </div>
    </div>
  );
}

function ChatMessage({ msg }) {
  const isBot = msg.sender === "bot";
  return (
    <div className={`zoni-message zoni-message--${isBot ? "bot" : "user"}`}>
      {isBot && <div className="zoni-avatar" aria-hidden="true">Z</div>}
      <div className={`zoni-bubble zoni-bubble--${isBot ? "bot" : "user"}`}>
        {isBot ? renderBotText(msg.text) : msg.text}
      </div>
    </div>
  );
}

function QuickReplies({ options, onSelect, disabled }) {
  if (!options?.length) return null;
  return (
    <div className="zoni-quick-replies">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className="zoni-quick-reply"
          onClick={() => onSelect(opt)}
          disabled={disabled}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// ─── Bubble messages ─────────────────────────────────────────────────────────

const BUBBLE_TEXTS = {
  greeting: "Hi! there 👋",
  help:     "Need help? Let's chat 💬",
  resume:   "Finish your enquiry →",
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function ChatBot() {
  const [isOpen, setIsOpen]       = useState(false);
  const [messages, setMessages]   = useState([]);
  const [quickOpts, setQuickOpts] = useState([]);
  const [inputVal, setInputVal]   = useState("");
  const [isTyping, setIsTyping]   = useState(false);
  const [locked, setLocked]       = useState(false);
  const [step, setStep]           = useState(0);
  const [mounted, setMounted]     = useState(false);

  // Live chat state (step 10 post-lead)
  const [leadId, setLeadId]                 = useState(null);
  const [liveChatMode, setLiveChatMode]     = useState(false); // "connecting" | "active" | false
  const [liveConvId, setLiveConvId]         = useState(null);
  const [liveRoomName, setLiveRoomName]     = useState(null);
  const [visitorId, setVisitorId]           = useState(null);
  const [liveChatError, setLiveChatError]   = useState("");

  const [bubbleMsg, setBubbleMsg]         = useState("greeting");
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const timersRef = useRef([]);

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subService: "",
    projectDescription: "",
    urgency: "",
  });

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);
  const greeted   = useRef(false);
  const audioRef  = useRef(null);

  const playSound = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/audio/chatbot.mp3");
        audioRef.current.volume = 0.5;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    setMounted(true);

    // Restore live chat session if it was active before a page refresh
    try {
      const savedConvId   = sessionStorage.getItem("zonic_live_conv_id");
      const savedRoomName = sessionStorage.getItem("zonic_live_room_name");
      const savedMode     = sessionStorage.getItem("zonic_live_chat_mode");
      const savedName     = sessionStorage.getItem("zonic_live_visitor_name");
      if (savedConvId && savedRoomName && savedMode === "active") {
        const vid = getOrCreateVisitorId();
        setVisitorId(vid);
        setLiveConvId(savedConvId);
        setLiveRoomName(savedRoomName);
        setLiveChatMode("active");
        if (savedName) setLead((p) => ({ ...p, name: savedName }));
      }
    } catch {
      // sessionStorage unavailable — proceed normally
    }
  }, []);

  // ── Bubble timer helpers ──────────────────────────────────────
  const cancelTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };
  const addTimer = (fn, delay) => {
    const t = setTimeout(fn, delay);
    timersRef.current.push(t);
  };

  // Greeting → "Need help?" cycle, runs once after mount
  // Greeting → "Need help?" cycle, runs once after mount
  useEffect(() => {
    if (!mounted) return;
    addTimer(() => {
      setBubbleVisible(true);
      addTimer(() => {
        setBubbleVisible(false);
        addTimer(() => {
          setBubbleMsg("help");
          setBubbleVisible(true);
        }, 25000);
      }, 5000);
    }, 1000);
    return cancelTimers;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // Cancel timers and hide bubble when chat opens
  useEffect(() => {
    if (!isOpen) return;
    cancelTimers();
    setBubbleVisible(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Nudge to finish if user closes mid-conversation
  useEffect(() => {
    if (isOpen || step < 2 || step >= 10) return;
    cancelTimers();
    addTimer(() => {
      setBubbleMsg("resume");
      setBubbleVisible(true);
    }, 800);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, quickOpts]);

  // Focus input after it unlocks
  useEffect(() => {
    if (isOpen && !locked) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen, locked]);

  // Trigger greeting once on first open
  useEffect(() => {
    if (!isOpen || greeted.current) return;
    greeted.current = true;
    botSay(
      "Hey there! 👋 I'm **Zoni**, your digital assistant at Zonic Media. I'm excited to help you grow your business online!\n\n**What's your name?**",
      [],
      350
    );
    setStep(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Lock background scroll on mobile when chat is open
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 576px)").matches;
    if (!isMobile) return;
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow            = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow            = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow            = "";
    };
  }, [isOpen]);

  // Queue a bot message with typing simulation
  const botSay = (text, options = [], extraDelay = 0) => {
    setIsTyping(true);
    setLocked(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setQuickOpts(options);
      if (!options.length) setLocked(false);
      playSound();
    }, 980 + extraDelay);
  };

  const addUserMsg = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setQuickOpts([]);
  };

  const handleSend = (override) => {
    const msg = (override ?? inputVal).trim();
    if (!msg || isTyping) return;
    setInputVal("");
    addUserMsg(msg);
    processStep(msg);
  };

  const handleQuickReply = (option) => {
    addUserMsg(option);
    setLocked(true);
    processStep(option);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ─── Conversation state machine ──────────────────────────────────────────────
  const processStep = (userInput) => {

    // Step 1 — name
    if (step === 1) {
      const name = userInput.trim();
      setLead((p) => ({ ...p, name }));
      setStep(2);
      botSay(
        `Nice to meet you, **${name}!** 😊\n\nI'm here to help you get the best digital results for your business. **How can I help you today?**`,
        SERVICE_OPTIONS
      );

    // Step 2 — service selection → show sub-service chips
    } else if (step === 2) {
      setLead((p) => ({ ...p, service: userInput }));
      setStep(3);
      const prompt  = SUB_SERVICE_PROMPTS[userInput] ?? "Tell me more — **which option fits best?**";
      const subOpts = SUB_SERVICE_OPTIONS[userInput] ?? [];
      botSay(prompt, subOpts);

    // Step 3 — sub-service selection → ask project description
    } else if (step === 3) {
      setLead((p) => ({ ...p, subService: userInput }));
      setStep(4);
      botSay("Nice! 🙌 **Can you briefly describe your project or what you're trying to achieve?**");

    // Step 4 — project description → ask for email
    } else if (step === 4) {
      setLead((p) => ({ ...p, projectDescription: userInput }));
      setStep(5);
      botSay(
        `Thanks, **${lead.name}**. We'll send a quick confirmation of your enquiry and stay connected with you there. **What's the best email address to reach you?**`
      );

    // Step 5 — email → ask if phone optional
    } else if (step === 5) {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput.trim());
      if (!valid) {
        botSay("Hmm, that doesn't look like a valid email. Could you double-check and try again? 😊");
        return;
      }
      setLead((p) => ({ ...p, email: userInput.trim() }));
      setStep(6);
      botSay(
        "Thanks! Would you also like to share your phone number so our team can connect with you more easily? This is completely optional.",
        ["Yes, I'll Share My Number", "No, Email Is Fine"]
      );

    // Step 6 — phone optional? (quick reply)
    } else if (step === 6) {
      if (userInput === "Yes, I'll Share My Number") {
        setStep(7);
        botSay("Sure, please enter your best phone number.");
      } else {
        sendLead({ ...lead });
      }

    // Step 10 — post-lead: live chat choice
    } else if (step === 10) {
      if (userInput === "Chat with Live Agent") {
        startLiveChat();
      } else {
        // Wait for callback
        setQuickOpts([]);
        setLocked(true);
        setMessages((p) => [
          ...p,
          {
            sender: "bot",
            text: `Got it, **${lead.name}!** 🙌 We'll reach out to you directly. In the meantime:\n\n${CONNECT_SNIPPET}`,
          },
        ]);
      }

    // Step 7 — phone number (optional)
    } else if (step === 7) {
      const digits = userInput.replace(/\D/g, "");
      if (digits.length < 7) {
        botSay("Please enter a valid phone number. 📱");
        return;
      }
      const fullLead = { ...lead, phone: digits };
      setLead(fullLead);
      sendLead(fullLead);
    }
  };

  // ─── Submit to API ────────────────────────────────────────────────────────────
  const sendLead = async (data) => {
    setLocked(true);
    setIsTyping(true);

    const recaptchaToken = await getRecaptchaToken();

    const payload = {
      ...data,
      source:         "Zoni Chatbot",
      pageUrl:        typeof window !== "undefined" ? window.location.href : "",
      createdAt:      new Date().toISOString(),
      recaptchaToken,
    };

    try {
      const json = await submitLeadToEmail(payload);
      // Store the MongoDB leadId returned by the updated send-lead route
      if (json?.leadId) setLeadId(json.leadId);

      setIsTyping(false);
      setStep(10);
      setMessages((p) => [
        ...p,
        {
          sender: "bot",
          text: `You're all set, **${data.name}!** 🎉 We've received your enquiry and sent a confirmation to **${data.email}**. Our team will review your details and get back to you.\n\nWould you like to speak with a live agent right now?`,
        },
      ]);
      // Show live-chat options as quick replies
      setQuickOpts(["Chat with Live Agent", "Wait for Callback"]);
      // Unlock quick replies only (no text input at step 10)
      setLocked(false);
    } catch {
      setIsTyping(false);
      setMessages((p) => [
        ...p,
        {
          sender: "bot",
          text: `Sorry about that — something went wrong on our end. 😓 Please reach out to us directly and we'll take great care of you:\n\n${CONNECT_SNIPPET}`,
        },
      ]);
    }
  };

  // ─── Start live chat ──────────────────────────────────────────────────────────
  const startLiveChat = async () => {
    setLocked(true);
    setQuickOpts([]);
    setLiveChatError("");

    const vid = getOrCreateVisitorId();
    setVisitorId(vid);

    setMessages((p) => [
      ...p,
      {
        sender: "bot",
        text: "Connecting you to a live agent… Please hold on a moment.",
      },
    ]);
    setLiveChatMode("connecting");

    try {
      const res = await fetch("/api/chat/start-live", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorId: vid,
          name:       lead.name,
          email:      lead.email,
          phone:      lead.phone,
          service:    lead.service,
          subService: lead.subService,
          leadId:     leadId || undefined,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setLiveConvId(data.conversationId);
        setLiveRoomName(data.roomName);
        setLiveChatMode("active");

        // Persist so live chat survives page refresh
        try {
          sessionStorage.setItem("zonic_live_conv_id",      data.conversationId);
          sessionStorage.setItem("zonic_live_room_name",    data.roomName);
          sessionStorage.setItem("zonic_live_chat_mode",    "active");
          sessionStorage.setItem("zonic_live_visitor_name", lead.name || "");
        } catch {}
      } else {
        throw new Error(data.message || "Failed to start live chat.");
      }
    } catch (err) {
      setLiveChatMode(false);
      setLiveChatError(
        "Live chat is temporarily unavailable. Your enquiry is saved and our team will contact you shortly."
      );
      setMessages((p) => [
        ...p,
        {
          sender: "bot",
          text: `Sorry, we couldn't connect you right now. Our team has your details and will reach out soon.\n\n${CONNECT_SNIPPET}`,
        },
      ]);
      setLocked(false);
    }
  };

  if (!mounted) return null;

  const inputActive = !locked && step > 0 && step < 10;

  let inputPlaceholder = "Type your message...";
  if (!inputActive) {
    inputPlaceholder = "Choose an option above...";
  } else if (step === 7) {
    inputPlaceholder = "Enter your phone number...";
  } else if (step === 5) {
    inputPlaceholder = "Enter your email address...";
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {/* ── Greeting / resume bubble ───────────────────────────────────── */}
      <div
        className={`zoni-greeting-bubble${bubbleVisible && !isOpen ? " zoni-greeting-bubble--visible" : ""}`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={bubbleVisible && !isOpen ? 0 : -1}
        aria-hidden={!(bubbleVisible && !isOpen)}
        aria-label="Open chat"
      >
        {BUBBLE_TEXTS[bubbleMsg]}
      </div>

      {/* ── Floating trigger button ─────────────────────────────────────── */}
      <button
        type="button"
        className={`zoni-trigger${isOpen ? " zoni-trigger--open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close Zoni chat" : "Chat with Zoni"}
      >
        {isOpen ? (
          <svg className="zoni-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg className="zoni-trigger-icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3 L13.6 9.4 L20 10 L13.6 10.6 L12 17 L10.4 10.6 L4 10 L10.4 9.4 Z" />
            <path d="M18.5 15 L19.3 17.2 L21.5 17.8 L19.3 18.4 L18.5 20.5 L17.7 18.4 L15.5 17.8 L17.7 17.2 Z" />
            <path d="M5.5 3 L6.1 4.9 L8 5.4 L6.1 5.9 L5.5 7.5 L4.9 5.9 L3 5.4 L4.9 4.9 Z" />
          </svg>
        )}
      </button>

      {/* ── Chat window ─────────────────────────────────────────────────── */}
      <div
        className={`zoni-window${isOpen ? " zoni-window--open" : ""}`}
        role="dialog"
        aria-label="Chat with Zoni"
        aria-modal="true"
      >
        {/* Header */}
        <div className="zoni-header">
          <div className="zoni-header-left">
            <div className="zoni-header-avatar" aria-hidden="true">Z</div>
            <div className="zoni-header-info">
              <span className="zoni-header-name">Zoni</span>
              <span className="zoni-header-status">
                <span className="zoni-status-dot" aria-hidden="true" />
                Online · Usually replies instantly
              </span>
            </div>
          </div>
          <button
            type="button"
            className="zoni-header-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Live chat mode ───────────────────────────────────── */}
        {liveChatMode === "active" && liveConvId && liveRoomName && visitorId ? (
          <Suspense fallback={
            <div className="zlc-connecting">
              <div className="zlc-connecting-dots"><span /><span /><span /></div>
              <p>Loading live chat…</p>
            </div>
          }>
            <LiveChatRoom
              conversationId={liveConvId}
              roomName={liveRoomName}
              visitorId={visitorId}
              visitorName={lead.name || "Visitor"}
              onClose={() => {
                setLiveChatMode(false);
                // Clear persisted session so refresh doesn't re-open the ended chat
                try {
                  sessionStorage.removeItem("zonic_live_conv_id");
                  sessionStorage.removeItem("zonic_live_room_name");
                  sessionStorage.removeItem("zonic_live_chat_mode");
                  sessionStorage.removeItem("zonic_live_visitor_name");
                } catch {}
                setMessages((p) => [
                  ...p,
                  {
                    sender: "bot",
                    text: `Chat ended. Thanks for chatting with us, **${lead.name}**! Feel free to reach out anytime.\n\n${CONNECT_SNIPPET}`,
                  },
                ]);
              }}
            />
          </Suspense>
        ) : (
          <>
            {/* Messages */}
            <div className="zoni-messages" role="log" aria-live="polite" aria-atomic="false" data-lenis-prevent>
              {messages.map((msg, i) => (
                <ChatMessage key={i} msg={msg} />
              ))}
              {isTyping && <TypingDots />}
              <QuickReplies options={quickOpts} onSelect={handleQuickReply} disabled={isTyping || liveChatMode === "connecting"} />
              {liveChatError && (
                <div className="zlc-offline-notice">{liveChatError}</div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input area */}
            <div className="zoni-input-area">
              <input
                ref={inputRef}
                type={step === 7 ? "tel" : "text"}
                className="zoni-input"
                placeholder={inputPlaceholder}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={!inputActive}
                aria-label="Chat message"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
              <button
                type="button"
                className="zoni-send-btn"
                onClick={() => handleSend()}
                disabled={!inputVal.trim() || !inputActive}
                aria-label="Send message"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
