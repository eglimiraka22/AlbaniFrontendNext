import { useEffect, useState } from "react";
import { client } from "./../client";

const useRecentNews = () => {
  const [recentNews, setRecentNews] = useState([]);
  const [isLoadingRecent, setIsLoadingRecent] = useState(false);
  const [isErrorRecent, setIsErrorRecent] = useState(null);

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        setIsLoadingRecent(true);

        const query = `*[_type == "post"] | order(publishedAt desc) [0...6] {
          _id,
          title,
          slug,
          mainImage {
            asset-> {
              url,
              _id
            },
          },
          categories[]-> {
            title
          },
          publishedAt,
          body
        }`;

        const result = await client.fetch(query);

        setRecentNews(result);
      } catch (error) {
        console.error("Error fetching recent news:", error);
        setIsErrorRecent(true);
      } finally {
        setIsLoadingRecent(false);
      }
    };

    fetchRecentNews();
  }, []);

  return { recentNews, isLoadingRecent, isErrorRecent };
};

export default useRecentNews;
