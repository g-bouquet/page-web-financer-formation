interface ImageBannerProps {
  src: string;
  alt: string;
}

export default function ImageBanner({ src, alt }: ImageBannerProps) {
  return (
    <figure className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 sm:h-64 object-cover"
        loading="lazy"
      />
    </figure>
  );
}
