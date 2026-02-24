import Image from "next/image";
import "../style/worldMap.css";

function WorldMap() {
  return (
    <div className="world-map-wrapper">
      <div className="world-map-cont">
        <h2 className="world-map-heading">world wide expertise</h2>

        <p className="world-map-descrp">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          pariatur quisquam velit odit facilis atque corrupti nam, porro
          perspiciatis.
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
            <p>This is your content. You can put anything here.</p>
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
            <p>This is your content. You can put anything here.</p>
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
            <p>This is your content. You can put anything here.</p>
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
            <p>This is your content. You can put anything here.</p>
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
            <p>This is your content. You can put anything here.</p>
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
            <p>This is your content. You can put anything here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
