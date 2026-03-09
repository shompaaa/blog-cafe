import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //Bookmarked Function & State
  const [bookmarked, setBookmarked] = useState([]);
  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };

  //Marked As Read Function & State
  const [readTime, setReadTime] = useState(0);

  const handleMarkAsRead = (time, id) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
    handleRemoveFromBookMarked(id);
  };

  const handleRemoveFromBookMarked = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark);
  };

  return (
    <div className="my-0 md:mx-20">
      <Navbar></Navbar>
      <div className="container md:flex md:text-center p-5">
        <div className="blogs-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="bookmark-container w-[30%]">
          <h1 className="text-sky-400 font-bold mb-5 mt-10 bg-gray-100 p-4 rounded-xl">
            Spend time on read: {readTime} min
          </h1>
          <div className="bg-gray-100 rounded-xl p-4">
            <h2 className="mb-2">Bookmarked Blogs: {bookmarked.length}</h2>
            {bookmarked.map((marked) => (
              <p className="bg-sky-200 mb-2 p-4 rounded-xl">{marked.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
