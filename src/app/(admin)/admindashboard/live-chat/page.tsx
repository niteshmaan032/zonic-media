import "./live-chat.css";
import AdminLiveChatContent from "../components/AdminLiveChatContent";

export const metadata = {
  title: "Live Chat | Zonic Admin",
};

export default function AdminLiveChatPage() {
  return (
    <div className="alc-page">
      <div className="alc-page-header">
        <div>
          <h1 className="alc-page-title">Live Chat</h1>
          <p className="alc-page-subtitle">
            Real-time conversations with website visitors
          </p>
        </div>
      </div>

      <AdminLiveChatContent />
    </div>
  );
}
