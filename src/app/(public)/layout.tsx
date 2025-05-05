import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import Footer from "@/component/PublicComponents/Footer";
import Header from "@/component/PublicComponents/Header";
import { Providers } from "@/lib/Providers";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen gap-8">
      <Providers>
        <Header />
        <MaxWidthWrapper className="flex-1 flex flex-col gap-8">
          {children}
        </MaxWidthWrapper>
        <Footer />
      </Providers>
    </div>
  );
}
