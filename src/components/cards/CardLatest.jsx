import React from 'react';
import Link from "next/link";
import classes from  "./CardLatest.module.css";

const truncateTitle = (title) => {
  // Split the title into words
  const words = title.split(" ");

  // Take the first 10 words and join them with spaces
  const truncatedTitle = words.slice(0, 10).join(" ");

  return truncatedTitle;
};

const CardLatest = ({ image, title, id }) => {
  const truncatedTitle = truncateTitle(title);

  return (
    <Link href={`/blogpage/${id}`} className={classes["card-latest-container"]}>
      <div
        className={classes["card-latest-image"]}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={classes["card-latest-content"]}>
        <h1 className={classes["card-latest-title"]}>{truncatedTitle}...</h1>
      </div>
    </Link>
  );
};

export default CardLatest;
