// pages/Posts.jsx
import React from "react";
import useFetchPosts from "../hooks/useFetchPosts";
//react-query - 2 imports
//import useFetchCartItems from "../hooks/useFetchCartItems";
//import { fetchCartItems } from "../features/cart/cartSlice";

const Posts = () => {
  const { data, error, isLoading, isFetching } = useFetchPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts Page</h1>
      {isFetching && <div>Updating...</div>}
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
