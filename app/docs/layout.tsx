import { Footer } from "@/components/footer";
import { Leftbar } from "@/components/leftbar";
import { Navbar } from "@/components/navbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex sm:container mx-auto w-[90vw] items-start gap-8'>
        <Leftbar key='leftbar' />
        <div className='flex-[5.25]'>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
