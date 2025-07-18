"use client";
// import Image from "next/image";
import ThemeDropdown from "./ThemeDropdown";
import { useEffect, useState } from "react";

const BlogHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-75 ${
        isScrolled ? "shadow-md bg-primary" : "bg-background"
      }`}
    >
      {/* <header className="w-full border-b border-primary static"> */}
      <div className="wrapper">
        <div className="flex justify-between items-center">
          <span className="font-bold text-3xl ">Yunsuk Jeung</span>
          {/* <div className="flex gap-4 items-center justify-center"> */}
          <ThemeDropdown />
          {/* <nav className="flex gap-4"> */}
          {/* <Button asChild variant="ghost"> */}
          {/*   <Link href="/blog">Home</Link> */}
          {/* </Button> */}
          {/* <Button asChild variant="ghost"> */}
          {/*   <Link href="/blog">Web</Link> */}
          {/* </Button> */}
          {/* <Button asChild variant="ghost"> */}
          {/*   <Link href="/blog">DS</Link> */}
          {/* </Button> */}
          {/* </nav> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
