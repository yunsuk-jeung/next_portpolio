import YoutubePlayer from "@/components/youtube";
import { PROJECT_THUMBNAILS } from "@/lib/projects";

const ATWPage = () => {
  const atw = PROJECT_THUMBNAILS.atw;
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-3xl text-primary font-bold mb-4  ">{atw.title}</h1>
      <p>{atw.description}</p>
      <YoutubePlayer url={atw.url} />
    </div>
  );
};

export default ATWPage;
