import React from "react";
import classes from "./CardMore.module.css";
import Link from "next/link";

const truncateTitle = (title) => {
  // Split the title into words
  const words = title.split(" ");

  // Take the first 10 words and join them with spaces
  const truncatedTitle = words.slice(0, 10).join(" ");

  return truncatedTitle;
};

const truncateDescription = (description) => {
  // Split the description into words
  const words = description.split(" ");

  // Take the first 20 words and join them with spaces
  const truncatedDescription = words.slice(0, 20).join(" ");

  return truncatedDescription;
};

function CardMore({ title, id, description, image }) {
  const truncatedTitle = truncateTitle(title);
  const truncatedDescription = truncateDescription(description);

  return (
    <Link href={`/blogpage/${id}`} className={classes["card-more-container"]}>
      <div
        className={classes["card-more-image"]}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={classes["card-more-content"]}>
        <h1 className={classes["card-more-title"]}>{truncatedTitle}...</h1>
        <p className={classes["card-more-description"]}>{truncatedDescription}...</p>
      </div>
    </Link>
  );
}

export default CardMore;
