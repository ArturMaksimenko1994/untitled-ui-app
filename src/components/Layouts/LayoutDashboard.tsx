import BaseLayout from "@/components/Layouts/LayoutBase";

export default function LayoutDashboard({
                                          children
                                        }: {
  children: React.ReactNode
}) {
  return (
    <BaseLayout>
      <div className="dd">{children}</div>
    </BaseLayout>
  );
}
