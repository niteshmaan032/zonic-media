import { AdminFormsContent } from "../components/AdminFormsContent";

type AdminFormPageProps = {
  searchParams: Promise<{ id?: string }>;
};

export default async function AdminFormPage({ searchParams }: AdminFormPageProps) {
  const { id } = await searchParams;
  return <AdminFormsContent blogId={id} />;
}
