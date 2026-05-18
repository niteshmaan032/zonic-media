import "./admin-style.css";
import { requireAdminSession } from "@/backend/lib/adminSession";
import { AdminShell } from "./components/AdminShell";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdminSession();

  return <AdminShell>{children}</AdminShell>;
}
