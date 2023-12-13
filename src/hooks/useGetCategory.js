import { useEffect, useState } from 'react';
import { client } from '../client'; // Make sure to import your Sanity client

const useGetCategory = (slug) => {
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategoryDetails = async () => {
      try {
        setIsLoading(true);

        // Construct the Sanity query to get blog details by ID
        const query = `*[_type == "category" &&  slug.current == "${slug}"] [0] {
          _id,
          title,
          categoryImage { asset->{url, _id} },
          description,
        }`;


        const result = await client.fetch(query);

        setCategoryDetails(result);
      } catch (error) {
        setError(error);
      }
      setTimeout(() => {
        setIsLoading(false);

      }, 1500);
    };

    if (slug) {
        getCategoryDetails();
    }

  }, [slug]); // Re-run the effect when postId changes

  return { categoryDetails, isLoading, error };
};

export default useGetCategory;
