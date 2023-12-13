import React from "react";
import GoogleAds from "../googleAds";
import styles from "./style.module.css"; // Import the CSS module
import GoogleAdsTwo from "../googleAdsTwo";
import useRandomNews from "../../hooks/useGetRandomNews";
import CardLatest from "../cards/CardLatest";

const NewsContainer = ({ headerText }) => {
  const { randomNews, isLoadingRandom, isErrorRandom } = useRandomNews();

  const newsContainerCard = randomNews.slice(0, 6).map((news) => (
    <CardLatest
      key={news._id}
      id={news._id}
      image={news.mainImage.asset.url}
      title={news.title}
    />
  ));

  return (
    <div className={styles['newscontainerone-card']}>
      <GoogleAds />
      <GoogleAdsTwo />
      <div className={styles['newscontainerone-card-content']}>
        {headerText && <h2>{headerText}</h2>}
        {newsContainerCard}
      </div>
    </div>
  );
};

export default NewsContainer;
