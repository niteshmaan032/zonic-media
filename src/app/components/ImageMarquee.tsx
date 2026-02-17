import Marquee from "react-fast-marquee";
import "../style/imagemarquee.css";
import Image from "next/image";

function ImageMarquee() {
  const images = [
    { src: "/images/m-1.webp", alt: "moile-design" },
    { src: "/images/m-2.webp", alt: "tab-design" },
    { src: "/images/m-3.webp", alt: "gmb-suspension" },
    { src: "/images/m-4.webp", alt: "responsive-design" },
    { src: "/images/m-5.webp", alt: "web-design" },
  ];

  return (
    <Marquee>
      {images.map((img, index) => (
        <div className="marquee-img-wrapper" key={index}>
          <Image
            src={img.src}
            fill
            alt={img.alt}
            sizes="(max-width: 575.98px) 100vw, (max-width: 991.98px) 280px, 380px"
          />
        </div>
      ))}
    </Marquee>
  );
}

export default ImageMarquee;
