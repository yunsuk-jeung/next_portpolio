type YoutubeProps = {
  url: string;
  width?: string;
  height?: string;
};

/**
 * YouTube URL에서 video ID 추출 함수
 */
export function extractYoutubeVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") {
        return u.searchParams.get("v");
      } else if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.split("/")[2]; // /shorts/VIDEO_ID
      }
    } else if (u.hostname === "youtu.be") {
      return u.pathname.slice(1);
    }
    return null;
  } catch {
    return null;
  }
}
/**
 * YouTube 영상 렌더 컴포넌트
 */
const YoutubePlayer: React.FC<YoutubeProps> = ({
  url,
  width = "100%",
  height = "315",
}) => {
  const videoId = extractYoutubeVideoId(url);

  if (!videoId) return null;

  return (
    <div className="aspect-w-16 aspect-h-9 w-full border dark:border-white">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
