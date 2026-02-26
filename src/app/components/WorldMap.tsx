import Image from "next/image";
import "@/app/style/worldMap.css";

function WorldMap() {
  return (
    <div className="world-map-wrapper">
      <div className="world-map-cont">
        <h2 className="world-map-heading">Serving Clients Across the globe</h2>

        <p className="world-map-descrp">
          Zonic Media works with businesses across the US, providing web design,
          SEO, and PPC services that generate real results. Our remote-first
          model allows us to deliver high-quality digital solutions regardless
          of location.
        </p>
      </div>

      <div className="world-img-cont">
        <Image
          src="/images/world-map.svg"
          fill
          alt="world map"
          className="world-map-img"
          priority
        />

        <div className="map-marker is-canada">
          <div className="g-tooltip">
            <Image
              src="/images/canada.png"
              fill
              alt="Canada"
              className="flag-img"
              sizes="30px"
            />
          </div>
          <div className="tooltip-box">
            <h6>Canada</h6>
            <p>
              Web design and SEO services helping Canadian businesses grow
              online.
            </p>
          </div>
        </div>

        <div className="map-marker is-dubai">
          <div className="g-tooltip">
            <Image
              src="/images/dubai-flag.png"
              fill
              alt="Dubai / UAE"
              className="flag-img"
              sizes="30px"
            />
          </div>
          <div className="tooltip-box">
            <h6>UAE</h6>
            <p> Strategic SEO and paid ads services for growing UAE brands.</p>
          </div>
        </div>

        <div className="map-marker is-us">
          <div className="g-tooltip">
            <Image
              src="/images/united-states.png"
              fill
              alt="United States"
              className="flag-img"
              sizes="30px"
            />
          </div>
          <div className="tooltip-box">
            <h6>USA</h6>
            <p>
              {" "}
              Performance-driven digital marketing solutions across the United
              States.
            </p>
          </div>
        </div>

        <div className="map-marker is-aus">
          <div className="g-tooltip">
            <Image
              src="/images/australia.png"
              fill
              alt="Australia"
              className="flag-img"
              sizes="30px"
            />
          </div>
          <div className="tooltip-box">
            <h6>Australia</h6>
            <p>
              Conversion-focused websites and marketing for Australian companies
            </p>
          </div>
        </div>

        <div className="map-marker is-ind">
          <div className="g-tooltip">
            <Image
              src="/images/india.png"
              fill
              alt="India"
              className="flag-img"
              sizes="30px"
            />
          </div>
          <div className="tooltip-box">
            <h6>India</h6>
            <p>
              {" "}
              SEO, PPC, and web design services for businesses across India.
            </p>
          </div>
        </div>

        <div className="map-marker is-uk">
          <div className="g-tooltip">
            <Image
              src="/images/united-kingdom.png"
              fill
              alt="India"
              className="flag-img"
              sizes="30px"
            />
          </div>
          <div className="tooltip-box">
            <h6>United Kingdom</h6>
            <p> Modern web development and SEO services for UK businesses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
