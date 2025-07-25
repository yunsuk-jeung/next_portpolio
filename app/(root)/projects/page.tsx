import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

function extractYouTubeId(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

function renderProjectItem(
  key: string,
  title: string,
  url: string,
  description: string,
  code: string,
) {
  const youtubeId = extractYouTubeId(url);
  const thumbnailUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : url;
  return (
    <div
      key={key}
      className="flex flex-col md:flex-row items-center gap-4 border-b border-primary pb-6"
    >
      <div className="w-2/5 flex-shrink-0">
        <Image
          src={thumbnailUrl}
          alt={key}
          className="w-full h-auto rounded-lg object-cover"
          width={240}
          height={240}
        />
      </div>
      <div className="w-full md:w-1/2 px-20 md:px-5">
        <Link
          href={`projects/${key}`}
          className="underline text-blue-800 hover:text-blue-800 visited:text-purple-600"
        >
          <div className="text-2xl font-bold  items-center gap-2">
            {title} <LinkIcon className="inline" />
          </div>
        </Link>
        <p className="text-gray-700">{description}</p>
        {code.length > 0 && (
          <a
            href="https://github.com/yunsuk-jeung/toy_slam.git"
            className="hyperlink"
          >
            [code]
          </a>
        )}
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <>
      <div className="font-bold text-3xl text-primary mb-4 pb-2 border-b border-primary">
        Projects
      </div>
      <div className="flex flex-col gap-8  ">
        {Object.entries(PROJECT_THUMBNAILS).map(
          ([key, { title, url, description, code }]) =>
            renderProjectItem(key, title, url, description, code),
        )}
      </div>
    </>
  );
};

export default Projects;
