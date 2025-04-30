import React, { useState, useEffect } from "react";
import ivPackageData from "../../mocks/ivPackageData.json";
import HeroSection from "../../components/HeroSection";
import ivPackageHero from "../../assets/img/ivPackage/hero.webp";
import IvPackageCard from "../../components/IvPackageCard";

const IvPackages = () => {
  const [ivPackages, setIvPackages] = useState([]);
  const images = import.meta.glob("../../assets/img/ivPackage/*.webp", {
    eager: true,
  });
  /* for image */

  useEffect(() => {
    const updatedIvPackages = ivPackageData.ivPackageData.map((ivPackage) => ({
      ...ivPackage,
      img: images[`../../assets/img/ivPackage/${ivPackage.img}`]?.default || "",
    }));
    setIvPackages(updatedIvPackages);
  }, [ivPackageData]);

  return (
    <>
      <div className="ivPackage-hero">
        <HeroSection img={ivPackageHero} text={"OFFER FOR PACKAGES"} />
      </div>
      <div className="ivPackage-card-wrapper">
        <div className="container">
          <div className="ivPackage-card-wrap">
            {ivPackages.map((x, index) => (
              <div className="card" key={index}>
                <IvPackageCard
                  img={x.img}
                  title={x.title}
                  descBrif={x.desc.brif}
                  descUl={x.desc.ul}
                  newBadge={x.newBadge}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IvPackages;
