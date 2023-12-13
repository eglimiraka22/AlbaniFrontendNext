import React, { useState } from "react";
import useScrollTop from "../../hooks/useScrollOnTop";
import useGetBlogCategory from "../../hooks/useGetBlogsCategory";
import useGetCategory from "../../hooks/useGetCategory";
import LoaderSpinner from "../../components/loader";
import CardMore from "../../components/cards/CardMore";
import NewsContainer from "../../components/newscontainer";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from 'next/head'

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;   useScrollTop(slug);
  const { categoryDetails, error, isLoading } = useGetCategory(slug);
  const { blogCategory, isErrorCategory, isLoadingCategory } =
    useGetBlogCategory(slug);

  const [blogsCards, setBlogsCards] = useState(7);

  if (error || !categoryDetails || !blogCategory || isErrorCategory) {
    return <div className='category-page-container'></div>;
  }



  const categoryBlogs = blogCategory
    .slice(0, blogsCards)
    .map((news) => (
      <CardMore
        key={news._id}
        id={news._id}
        image={news.mainImage.asset.url}
        title={news.title}
        description={news.body}
      />
    ));

  const handleCardNumber = () => {
    if (blogsCards >= blogCategory.length) {
      return null;
    }
    setBlogsCards((blogsCards) => (blogsCards += 2));
  };
  return (

   <Layout >
    
    <div className='category-page-container'>
     {/* <Helmet>
       <title>Categories | Albanian News</title>
       <meta property='og:title' content="Albanian News " />
       <meta name='description' content='Albanian Latest News.' />
     </Helmet> */}
     { (isLoading || isLoadingCategory)  && (<LoaderSpinner />)}
     {categoryDetails.categoryImage && (
       <div
         className='category-page-container-header'
         style={{
           backgroundImage: `url(${categoryDetails.categoryImage.asset.url})`,
         }}
       >
         {categoryDetails.description && (
           <div className='category-page-container-header-description'>
             <h1>{categoryDetails.description}</h1>
           </div>
         )}{" "}
       </div>
     )}
     <div className='category-page-container-main'>
       <div className='category-page-container-left'>
         {categoryBlogs}{" "}
{   (blogsCards < blogCategory.length)    &&   <p  onClick={handleCardNumber}className='category-content-section-two-btn'>Shiko më shumë</p>
}        </div>
       <div className='category-page-container-right'>
         <NewsContainer headerText={"Lajme të tjera"} />
       </div>
     </div>
   </div>
  </Layout>
  );
};

export default CategoryPage;
