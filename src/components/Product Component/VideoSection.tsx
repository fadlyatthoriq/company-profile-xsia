type IframeEmbedProps = {
  src: string;
  width?: string;
  height?: string;
};

export default function VideoSection({ src, width = "100%", height = "500" }: IframeEmbedProps) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      allowFullScreen
      loading="lazy"
      className="rounded-lg shadow-lg"
    />
  );
}
