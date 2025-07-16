import ThemeDropdown from "@/components/bloagheader/ThemeDropdown";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center items-center font-bold">
        Hello world
      </h1>
      <ThemeDropdown />
    </>
  );
}
