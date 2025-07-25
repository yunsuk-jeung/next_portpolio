import BlogHeader from "@/components/bloagheader/BlogHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <BlogHeader />
      <main className="flex-1 wrapper">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
