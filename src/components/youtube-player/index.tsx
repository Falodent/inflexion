import Wrapper from "@/layout/wrapper";
import { X } from "lucide-react";

const YouTubeEmbed = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) => {
  const videoId = new URLSearchParams(new URL(videoUrl).search).get("v");

  if (!videoId) return null;

  return (
    <Wrapper>
      <div className="fixed top-0 left-0 bg-black/70 aspect-video w-full h-dvh py-20 md:p-20 z-50">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white z-50 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Wrapper>
  );
};

export default YouTubeEmbed;
