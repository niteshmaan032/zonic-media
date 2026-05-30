"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaHashtag, FaRegFileAlt, FaTable } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuMessageSquareText } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { BsArrowUp } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";

type AdminShellProps = {
  children: ReactNode;
};

const primaryLinks = [
  { href: "/admindashboard", label: "Dashboard", icon: LuLayoutDashboard },
  { href: "/admindashboard/table", label: "Tables", icon: FaTable },
  { href: "/admindashboard/live-chat", label: "Live Chat", icon: IoChatbubblesOutline },
] as const;

const blogLinks = [
  { href: "/admindashboard/form", label: "Post Blogs" },
  { href: "/admindashboard/manage-blogs", label: "Manage Blogs" },
] as const;

function DropdownAction({ children }: { children: ReactNode }) {
  return (
    <button type="button" className="dropdown-item text-start" disabled>
      {children}
    </button>
  );
}

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [unreadConversations, setUnreadConversations] = useState(0);
  const [waitingConversations, setWaitingConversations] = useState(0);
  const prevUnreadRef = useRef<number | null>(null);
  const prevWaitingRef = useRef<number | null>(null);
  const notifyAudioRef = useRef<HTMLAudioElement | null>(null);

  const resetAdminUiState = useCallback(() => {
    setSidebarOpen(false);
    setShowBackToTop(false);
    setShowSpinner(false);
    setLoggingOut(false);
  }, []);

  const redirectToLogin = useCallback(() => {
    resetAdminUiState();
    router.replace("/admin-login");
    router.refresh();
  }, [resetAdminUiState, router]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSpinner(false);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const verifySession = async () => {
      try {
        const response = await fetch("/api/admin/auth/me", {
          cache: "no-store",
          credentials: "include",
          signal: controller.signal,
        });

        if (response.status === 401) {
          redirectToLogin();
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          redirectToLogin();
        }
      }
    };

    verifySession();

    return () => controller.abort();
  }, [pathname, redirectToLogin]);

  useEffect(() => {
    let consecutiveNetworkFailures = 0;
    let activeController: AbortController | null = null;

    const verifyHeartbeat = async () => {
      if (activeController) {
        return;
      }

      activeController = new AbortController();

      try {
        const response = await fetch("/api/admin/auth/me", {
          cache: "no-store",
          credentials: "include",
          signal: activeController.signal,
        });

        if (response.status === 401 || !response.ok) {
          redirectToLogin();
          return;
        }

        consecutiveNetworkFailures = 0;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        consecutiveNetworkFailures += 1;

        if (consecutiveNetworkFailures >= 2) {
          redirectToLogin();
        }
      } finally {
        activeController = null;
      }
    };

    const intervalId = window.setInterval(verifyHeartbeat, 60 * 1000);

    return () => {
      window.clearInterval(intervalId);
      activeController?.abort();
    };
  }, [redirectToLogin]);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const playAdminNotify = useCallback(() => {
    try {
      if (!notifyAudioRef.current) {
        notifyAudioRef.current = new Audio("/audio/admin-notify.mp3");
        notifyAudioRef.current.volume = 0.65;
      }

      notifyAudioRef.current.currentTime = 0;
      notifyAudioRef.current.play().catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  const refreshChatSummary = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/chat/conversations?status=all&page=1", {
        cache: "no-store",
        credentials: "include",
      });

      if (!response.ok) return;

      const data = await response.json();
      if (!data.success) return;

      const nextUnread = Number(data.unreadConversations ?? 0);
      const nextWaiting = Number(data.waitingConversations ?? 0);

      if (
        (prevUnreadRef.current !== null && nextUnread > prevUnreadRef.current) ||
        (prevWaitingRef.current !== null && nextWaiting > prevWaitingRef.current)
      ) {
        playAdminNotify();
      }

      prevUnreadRef.current = nextUnread;
      prevWaitingRef.current = nextWaiting;
      setUnreadConversations(nextUnread);
      setWaitingConversations(nextWaiting);
    } catch {
      // ignore
    }
  }, [playAdminNotify]);

  useEffect(() => {
    refreshChatSummary();
  }, [pathname, refreshChatSummary]);

  useEffect(() => {
    const intervalId = window.setInterval(refreshChatSummary, 15000);
    return () => window.clearInterval(intervalId);
  }, [refreshChatSummary]);

  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      await fetch("/api/admin/auth/logout", {
        method: "POST",
        cache: "no-store",
        credentials: "include",
      });
    } finally {
      redirectToLogin();
    }
  };

  const messageNotificationCount =
    unreadConversations > 0 ? unreadConversations : waitingConversations;

  return (
    <div className="admin-panel">
      {showSpinner ? (
        <div className="admin-spinner bg-white position-fixed top-50 start-50 translate-middle w-100 vh-100 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
            aria-label="Loading admin page"
          />
        </div>
      ) : null}

      <div className="container-xxl position-relative bg-white d-flex p-0 admin-shell">
        <aside
          className={`admin-sidebar pe-4 pb-3 ${sidebarOpen ? "open" : ""}`}
        >
          <nav className="navbar bg-light navbar-light">
            <Link
              href="/admindashboard"
              className="navbar-brand mx-4 my-3"
              onClick={closeSidebar}
            >
              <h3 className="text-primary">
                <FaHashtag className="me-2" />
                ADMIN
              </h3>
            </Link>

            {/* <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <Image
                  className="rounded-circle"
                  src={userImage}
                  alt="Admin profile"
                  width={40}
                  height={40}
                />
                <span className="admin-online-indicator bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Zonic Meida </h6>
                <span>Admin</span>
              </div>
            </div> */}

            <div className="navbar-nav w-100">
              {primaryLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  prefetch={false}
                  className={`nav-item nav-link ${pathname === href ? "active" : ""}`}
                  onClick={closeSidebar}
                >
                  <Icon className="me-2" />
                  {label}
                </Link>
              ))}

              <details
                className="nav-item admin-sidebar-group"
                open={blogLinks.some((link) => pathname === link.href)}
              >
                <summary className="nav-link dropdown-toggle">
                  <IoNewspaperOutline className="me-2" />
                  Blogs
                </summary>
                <div className="dropdown-menu bg-transparent border-0">
                  {blogLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={false}
                      className={`dropdown-item ${
                        pathname === link.href ? "active" : ""
                      }`}
                      onClick={closeSidebar}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>

              <details className="nav-item admin-sidebar-group">
                <summary className="nav-link dropdown-toggle">
                  <FaRegFileAlt className="me-2" />
                  Pages
                </summary>
                <div className="dropdown-menu bg-transparent border-0">
                  <DropdownAction>Sign In</DropdownAction>
                  <DropdownAction>Sign Up</DropdownAction>
                  <DropdownAction>404 Error</DropdownAction>
                  <DropdownAction>Blank Page</DropdownAction>
                </div>
              </details>

              <button
                type="button"
                className="nav-item nav-link text-start admin-top-action"
                disabled={loggingOut}
                onClick={handleLogout}
              >
                <FiLogOut className="me-2" />
                {loggingOut ? "Logging Out..." : "Log Out"}
              </button>
            </div>
          </nav>
        </aside>

        <div className={`admin-content ${sidebarOpen ? "open" : ""}`}>
          <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-2">
            <Link
              href="/admindashboard"
              className="navbar-brand d-flex d-lg-none me-4"
            >
              <h2 className="text-primary mb-0">
                <FaHashtag />
              </h2>
            </Link>

            <button
              type="button"
              className="admin-sidebar-toggler flex-shrink-0"
              aria-label="Toggle sidebar"
              onClick={() => setSidebarOpen((current) => !current)}
            >
              <FaBars />
            </button>

            <div className="navbar-nav align-items-center ms-auto">
              <Link
                href="/admindashboard/live-chat"
                prefetch={false}
                className="nav-item nav-link"
              >
                <span className="admin-message-icon-wrapper me-lg-2">
                  <LuMessageSquareText />
                  <span className="admin-message-dot" aria-hidden="true" />
                  {messageNotificationCount > 0 && (
                    <span className="admin-message-count admin-message-count--icon">
                      {messageNotificationCount}
                    </span>
                  )}
                </span>
                <span className="d-none d-lg-inline-flex align-items-center gap-2">
                  Messages
                  {messageNotificationCount > 0 && (
                    <span className="admin-message-count">
                      {messageNotificationCount}
                    </span>
                  )}
                </span>
              </Link>
            </div>
          </nav>

          {children}

          <footer className="container-fluid pt-4 px-4">
            <div className="bg-light rounded-top p-4">
              <div className="row">
                <div className="col-12 col-sm-6 text-center text-sm-start">
                  &copy; <span className="text-primary">Zonic Media</span>, All
                  Right Reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>

        <button
          type="button"
          className={`btn btn-lg btn-primary btn-lg-square admin-back-to-top ${
            showBackToTop ? "show" : ""
          }`}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BsArrowUp />
        </button>
      </div>
    </div>
  );
}
