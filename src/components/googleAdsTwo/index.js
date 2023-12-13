import React, { useEffect } from 'react';
import classes from './style.module.css';

const GoogleAdsTwo = () => {
  useEffect(() => {
    // Load the Google AdSense script
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className={classes['ads-container']}>
      <ins
        className={`${classes['adsbygoogle2']}`}
        style={{ display: 'block' }}
        data-ad-client="your-ad-client-id" // Replace with your AdSense client ID
        data-ad-slot="your-ad-slot-id" // Replace with your AdSense ad slot ID
        data-ad-format="auto"
      />
    </div>
  );
};

export default GoogleAdsTwo;
