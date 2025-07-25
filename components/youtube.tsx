type YoutubeProps = {
  url: string;
  width?: string;
  height?: string;
};

/**
 * YouTube URL에서 video ID 추출 함수
 */
function extractYoutubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
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
    <div className="aspect-w-16 aspect-h-9 w-full">
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
