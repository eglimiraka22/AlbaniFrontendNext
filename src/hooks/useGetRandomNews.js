import { useEffect, useState } from 'react';
import { client } from './../client';

const useRandomNews = () => {
  const [randomNews, setRandomNews] = useState([]);
  const [isLoadingRandom, setIsLoadingRandom] = useState(false);
  const [isErrorRandom, setIsErrorRandom] = useState(null);

  useEffect(() => {
    const fetchRandomNews = async () => {
      try {
        setIsLoadingRandom(true);

        // Fetch 6 random news posts
        const query = `*[_type == "post"] | order(publishedAt desc) [2...8]   {
          _id,
          title,
          slug,
          mainImage {
            asset-> {
              url,
              _id
            }
          },
          categories[]-> {
            title
          },
          publishedAt,
          body
        }  `;

        const result = await client.fetch(query);

        setRandomNews(result);
        setIsLoadingRandom(false);
      } catch (error) {
        console.error('Error fetching random news:', error);
        setIsErrorRandom(error);
        setIsLoadingRandom(false);
      }
    };

    fetchRandomNews();
  }, []);

  return { randomNews, isLoadingRandom, isErrorRandom };
};

export default useRandomNews;
