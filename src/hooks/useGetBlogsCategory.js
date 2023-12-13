import { useEffect, useState } from 'react';
import { client } from './../client';

const useGetBlogCategory = (categorySlug) => {
  const [blogCategory, setBlogCategory] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [isErrorCategory, setIsErrorCategory] = useState(null);

  useEffect(() => {
    const fetchBlogCategory = async () => {
      try {
        setIsLoadingCategory(true);

        // Fetch blog posts by category slug within the categories array
        const query = `*[_type == "post" && '${categorySlug}' in categories[]->slug.current] {
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
            title,
            slug {
              current
            }
          },
          publishedAt,
          body
        }`;


        const result = await client.fetch(query);

        setBlogCategory(result);
        setIsLoadingCategory(false);
      } catch (error) {
        console.error('Error fetching blog posts by category:', error);
        setIsErrorCategory(error);
        setIsLoadingCategory(false);
      }
    };

    if (categorySlug) {
      fetchBlogCategory();
    }
  }, [categorySlug]);

  return { blogCategory, isLoadingCategory, isErrorCategory };
};

export default useGetBlogCategory;
