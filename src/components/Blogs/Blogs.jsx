import React, { useEffect, useState } from "react";

const Blogs = () => {

    //useState for store data
    const [blogs, setBlogs] = useState([]);


  //useEffect for showing fake data
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  return <div>
    <h1 className="text-3xl font-bold">Available Blogs: {blogs.length}</h1>
  </div>;
};

export default Blogs;
