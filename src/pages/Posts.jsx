import { useEffect, useState } from "react";
import Post from "../components/Post";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dataFetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    dataFetcher("https://jsonplaceholder.typicode.com/posts");
  }, []);
  return (
    <div className="container center_content">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        posts?.map((val, key) => (
          <Post key={key} title={val.title} body={val.body} />
        ))
      )}
    </div>
  );
};

export default Posts;
