export default function DashboardLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <div>{children}</div>
    </body>
    </html>
  );
}