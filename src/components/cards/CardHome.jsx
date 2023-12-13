import React from "react";
import  classes from  "./CardHome.module.css";
import  Link  from "next/link";

const truncateTitle = (title) => {
  // Split the title into words
  const words = title.split(' ');

  // Take the first 10 words and join them with spaces
  const truncatedTitle = words.slice(0, 10).join(' ');

  return truncatedTitle;
};
const CardHome = ({ image, title, id }) => {
  const truncatedTitle = truncateTitle(title);

  return (
    <Link href={`/blogpage/${id}`} className={classes["home-card"]}>
      <div
        className={classes["home-card-image"]}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={classes["home-card-content"]}>
        <h3 className={classes["home-card-title"]}>{truncatedTitle}...</h3>
      </div>
    </Link>
  );
};

export default CardHome;
