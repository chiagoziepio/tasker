import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import Header from "@/component/PublicComponents/Header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <MaxWidthWrapper className="flex-1 flex flex-col gap-8">
        <Header />
        {children}
      </MaxWidthWrapper>
    </div>
  );
}
