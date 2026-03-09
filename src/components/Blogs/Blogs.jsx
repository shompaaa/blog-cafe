import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  //useState for store data
  const [blogs, setBlogs] = useState([]);

  //useEffect for showing fake data
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Available Blogs: {blogs.length}</h1>
      <div className="all-blogs">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
