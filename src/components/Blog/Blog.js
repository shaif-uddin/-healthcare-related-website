import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import PostItem from "../PostItem/PostItem";

const Blog = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  return (
    <section id="blog">
      <div className="container">
        <div className="section-title">
          <h2>Blog</h2>
          <div className="card-container mt-4">
            {/* Loading Only Blog Post */}
            <Row className="mx-auto">
              {posts.slice(0, 20).map((postItem) => (
                <PostItem postItem={postItem}></PostItem>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
