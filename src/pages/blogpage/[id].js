import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head"; // Import Head from next

import useGetBlogDetails from "../../hooks/useGetBlogDetails";
import { format } from "date-fns";
import { FaFacebook } from "react-icons/fa";
import NewsContainer from "../../components/newscontainer";
import useScrollTop from "../../hooks/useScrollOnTop";
import Layout from "../../components/Layout";

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;  
  useScrollTop(id);
  const { blogDetails, error, isLoading } = useGetBlogDetails(id);

  if (error || !blogDetails) {
    return <div className='blog-page-container'></div>;
  }

  const { title, mainImage, body, author, publishedAt } = blogDetails;
  const date = new Date(publishedAt);
  const formattedDate = format(date, "yyyy/MM/dd");

  // Function to split text into paragraphs with a maximum of 5 sentences each
  const createParagraphs = (text) => {
    const sentences = text.split('.');
    const paragraphs = [];
    let currentParagraph = '';

    sentences.forEach((sentence, index) => {
      if (index > 0 && index % 5 === 0) {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = '';
      }
      currentParagraph += sentence + '.';
    });

    if (currentParagraph) {
      paragraphs.push(currentParagraph.trim());
    }

    return paragraphs;
  };
  const textParagraphs = createParagraphs(body);

  // Function to handle manual Facebook sharing
  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(title)}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Set the title in the document head */}
     

      <Layout title={title} >
      <div className='blog-page-container'>
        <div className='blog-page-container-left'>
          <h1 className='blog-page-container-left-header-title'>{title}</h1>
          <hr style={{ color: "black", border: "2px solid black" }} />
          <p className="share-button" onClick={shareOnFacebook}>
            Share on <FaFacebook />
          </p>
          {mainImage && mainImage.asset && (
            <img src={mainImage.asset.url} alt='' />
          )}
          {textParagraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className='blog-page-container-left-header-description'>
                {paragraph}
              </p>
            </React.Fragment>
          ))}
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Author: <span>{author.name}</span>
          </h1>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBlock: "15px",
            }}
          >
            Published Date: {formattedDate}
          </h3>
        </div>
        <div className='blog-page-container-right'>
          <NewsContainer headerText={"Most Read"} />
        </div>
      </div>
      </Layout>
    </>
  );
};

export default BlogPage;
