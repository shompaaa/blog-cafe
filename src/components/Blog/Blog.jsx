import React from "react";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog , handleBookMark,handleMarkAsRead}) => {
  const { cover, title,author,author_img,hashtags,reading_time,id } = blog;
  return (
    <div>
      <div className="card bg-base-100 w-full md:w-96 shadow-sm m-5">
        <figure>
          <img src={cover} alt="" />
        </figure>
        <div className="author-info flex justify-around items-center">
            <h2 className="text-xl font-semibold">{author}</h2>
            <img className="w-15" src={author_img} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex text-gray-500">
            {
                hashtags.map(hash => <p key={hash}>#{hash}</p>)
            }
          </div>
          <div className="md:flex justify-between items-center">
            <div className="card-actions justify-start">
            <button className="btn btn-primary" onClick={()=>handleMarkAsRead(reading_time,id)}>Mark As Read</button>
          </div>
          <div className="bookmark-icon flex gap-2 items-center text-gray-600">
            <p>{reading_time} min read</p>
            <button onClick={()=>handleBookMark(blog)}>
                <FaBookmark size={15} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
