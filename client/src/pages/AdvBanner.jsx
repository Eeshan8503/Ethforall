import React from "react";

const AdvBanner = () => {
  const imageUrl = "https://content.hostgator.com/img/ads_logo.png";
  return (
    <div className="items-center bg-gray-200 py-4">
      <img
        className="w-60% h-20% max-w-full h-auto"
        src={imageUrl}
        alt="Advertisement Banner"
      />
    </div>
  );
};

export default AdvBanner;
