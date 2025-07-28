import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

type Thumbnail = (typeof PROJECT_THUMBNAILS)[keyof typeof PROJECT_THUMBNAILS];

const CategoryDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="bg-transparent">
          <MenuIcon className="text-foreground size-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full px-6">
        <DrawerHeader className="flex flex-row items-center justify-between px-0">
          <DrawerTitle className="inline">Menu</DrawerTitle>
          <DrawerClose asChild>
            <Button variant={"outline"} className="inline">
              <X size={20} />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <DrawerClose asChild>
          <Link
            href="/"
            className="font-bold text-xl underline hover:text-blue-600"
          >
            Home
          </Link>
        </DrawerClose>
        <Accordion
          type="single"
          collapsible
          defaultValue="projects"
          className="w-full"
        >
          <AccordionItem value="projects">
            <AccordionTrigger>
              <Link
                href={"/projects"}
                className="font-bold text-xl underline hover:text-blue-600"
              >
                Projects
              </Link>
            </AccordionTrigger>

            <AccordionContent className="ml-4 flex flex-col gap-2">
              {(
                Object.entries(PROJECT_THUMBNAILS) as [
                  keyof typeof PROJECT_THUMBNAILS,
                  Thumbnail,
                ][]
              ).map(([key]) => (
                <DrawerClose asChild key={key}>
                  <Link
                    href={`/projects/${key}`}
                    className="underline hover:text-blue-600"
                  >
                    {PROJECT_THUMBNAILS[key].title}
                  </Link>
                </DrawerClose>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
