import { useEffect, useState } from "react";
import { getHeaderSlide } from "../../utils/headerSlide";
import useRandomNews from "../../hooks/useGetRandomNews";
import useGetBlogCategory from "../../hooks/useGetBlogsCategory";
import LoaderSpinner from "../loader";

const HeaderSlider = () => {
  const [header, setHeader] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);




  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getHeaderSlide();
        setHeader(res);
        setTimeout(() => {
          setIsLoading(false);

        }, 1500);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect will run once when the component mounts

 

  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="containerSlider">
      {isLoading && <LoaderSpinner />}
      <div className="slide-container">
        {header.mainImage && (
          <img src={header.mainImage.asset.url} alt={"Header"} />
        )}
        <div className="slide-content-header">
          <h2>{header.title}</h2>
        </div>
      </div>
      
    </div>
  );
};

export default HeaderSlider;
