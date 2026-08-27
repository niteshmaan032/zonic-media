import Marquee from "react-fast-marquee";
import Image from "next/image";
import "@/app/style/localSeoHome.css";

function HomeSeoMarquee({ items }: { items?: string[] }) {
  const services = items ?? [
    "Bathroom Remodelers",
    "Kitchen Remodelers",
    "General Contractors",
    "Flooring Companies",
    "Window & Door Companies",
    "Painting Contractors",
    "Electricians",
    "Plumbers",
    "HVAC Companies",
    "Garage Door Companies",
    "Roofing Contractors",
    "Appliance Repair Services",
    "Landscaping Companies",
    "Pest Control Services",
    "Pool Services",
    "Gutter Companies",
    "Tree Services",
    "Solar Companies",
  ];

  return (
    <Marquee>
      {services.map((service, index) => (
        <div className="marquee-seo-home-wrapper" key={`${service}-${index}`}>
          <span>{service}</span>
          <Image
            src="/images/star.svg"
            width={20}
            height={20}
            alt=""
            aria-hidden="true"
          />
        </div>
      ))}
    </Marquee>
  );
}

export default HomeSeoMarquee;
