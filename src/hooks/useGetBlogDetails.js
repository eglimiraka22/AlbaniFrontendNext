import { useEffect, useState } from 'react';
import { client } from '../client'; // Make sure to import your Sanity client

const useGetBlogDetails = (postId) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        setIsLoading(true);

        // Construct the Sanity query to get blog details by ID
        const query = `*[_type == "post" && _id == "${postId}"][0] {
          _id,
          title,
          slug,
          author->{name},
          mainImage { asset->{url, _id} },
          categories[]->{title},
          publishedAt,
          body
        }`;


        const result = await client.fetch(query);

        setBlogDetails(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    if (postId) {
      getBlogDetails();
    }

  }, [postId]); // Re-run the effect when postId changes

  return { blogDetails, isLoading, error };
};

export default useGetBlogDetails;
