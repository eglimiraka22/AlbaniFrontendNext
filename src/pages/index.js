import React from "react";
import HeaderSlider from "../components/header-slider";
import useRecentNews from "../hooks/useRecentNews";
import CardHome from "../components/cards/CardHome";
import useGetBlogCategory from "../hooks/useGetBlogsCategory";
import CardMore from "../components/cards/CardMore";
import   Link from "next/link";
import GoogleAds from "../components/googleAds";
import NewsContainer from "../components/newscontainer";
import Layout from "../components/Layout";
// import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { isErrorRecent, isLoadingRecent, recentNews } = useRecentNews();
  const { blogCategory, isErrorCategory, isLoadingCategory } =
    useGetBlogCategory("showbiz");

  const homeCards = recentNews.map((news) => (
    <CardHome
      key={news._id}
      id={news._id}
      image={news.mainImage.asset.url}
      title={news.title}
    />
  ));
  const showbizNews = blogCategory
    .slice(0, 4)
    .map((news) => (
      <CardMore
        key={news._id}
        id={news._id}
        image={news.mainImage.asset.url}
        title={news.title}
        description={news.body}
      />
    ));
  return (
    <Layout>
      <div className='home-main-container'>
      {/* <Helmet>
        <title>Homepage | Albanian News</title>
        <meta property='og:title' content="Albanian News " />
        <meta name='description' content='Albanian Latest News.' />
      </Helmet> */}
      <HeaderSlider />
      <div className='home-content-section-one'>
        <h1 className='title-header'>Lajmet e Fundit </h1>

        <div className='home-content-section-news'>
          <div className='home-news-left'>{homeCards}</div>
          <div className='home-news-right'>
            <NewsContainer />
          </div>
        </div>
      </div>

      <div className='home-content-section-two'>
        <h1 className='title-header'>Lajme nga Showbizi</h1>

        {showbizNews}

        <Link
          href={`/categories/showbiz`}
          className='home-content-section-two-btn'
        >
          Shiko më shumë
        </Link>
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;
