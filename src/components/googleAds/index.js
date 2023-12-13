import React, { useEffect } from 'react';
import classes from  "./style.module.css"
const GoogleAds = () => {
  useEffect(() => {
    // Load the Google AdSense script
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className={`${classes['adsbygoogle']}`}
      style={{ display: 'block' }}
      data-ad-client="your-ad-client-id"  // Replace with your AdSense client ID
      data-ad-slot="your-ad-slot-id"    // Replace with your AdSense ad slot ID
      data-ad-format="auto"
    />
  );
};

export default GoogleAds;
