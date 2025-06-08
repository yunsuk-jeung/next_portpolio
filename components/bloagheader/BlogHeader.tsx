import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeDropdown from "./ThemeDropdown";

const BlogHeader = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between mx-10">
        <div>
          {/* <Image src={""} alt={""} /> */}
          <span>DevJeung</span>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <ThemeDropdown />
          <nav className="flex gap-4">
            <Button asChild variant="ghost">
              <Link href="/blog">Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/blog">Web</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/blog">DS</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
