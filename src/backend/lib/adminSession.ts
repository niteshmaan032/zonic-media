import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_AUTH_COOKIE,
  getAdminFromAuthToken,
  toSafeAdmin,
} from "./adminAuth";

export async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_AUTH_COOKIE)?.value;

  if (!token) {
    redirect("/admin-login");
  }

  const admin = await getAdminFromAuthToken(token);

  if (!admin) {
    redirect("/admin-login");
  }

  return toSafeAdmin(admin);
}
