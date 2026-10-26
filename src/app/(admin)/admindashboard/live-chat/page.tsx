import AdminLiveChat from "@/components/rd/admin-chat/AdminLiveChat";

export const metadata = {
  title: "Live Chat | Zonic Admin",
};

/* Live chat panels: redesign + accept flow (26 Oct 2026), in
   src/components/rd/admin-chat. Fills the dashboard area under the top bar. */
export default function AdminLiveChatPage() {
  return (
    <div style={{ height: "calc(100vh - 64px)", overflow: "hidden" }}>
      <AdminLiveChat />
    </div>
  );
}
