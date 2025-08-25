import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    "/about/apple1.jpeg",
    "/about/hack-brown.jpeg",
    "/about/mountain.jpeg",
    "/about/apple2.jpeg",
    "/about/hack-princeton.jpeg",
    "/about/waterfall.jpeg",
    "/about/hack-harvardduke.jpeg",
    "/about/kayak.jpeg",
    "/about/hack-jpmc.jpeg",
    "/about/natural-bridge.jpeg",
    "/about/barge1.jpeg",
    "/about/barge2.jpeg",
  ];

  const loadMoreImages = () => {
    const currentLength = displayedImages.length;
    const nextBatch: string[] = [];

    for (let i = 0; i < 6; i++) {
      const imageIndex = (currentLength + i) % galleryImages.length;
      nextBatch.push(galleryImages[imageIndex]);
    }

    setDisplayedImages((prev) => [...prev, ...nextBatch]);
  };

  useEffect(() => {
    loadMoreImages();
  }, []);

  // scroll detection for infinite loading
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 500) {
        loadMoreImages();
      }
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener("scroll", handleScroll);

      return () => {
        galleryElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [displayedImages]);

  return (
    <div
      className="w-screen overflow-x-scroll overflow-y-hidden"
      style={{ scrollbarWidth: "auto" }}
    >
      <div
        className="flex space-x-1 px-2 py-2"
        style={{ width: "max-content" }}
      >
        {displayedImages.map((imageSrc, index) => (
          <div
            key={`${imageSrc}-${index}`}
            className="flex-shrink-0 w-56 h-40 overflow-hidden"
          >
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
