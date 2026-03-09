import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="container flex text-center p-5">
        <div className="blogs-container w-[70%]">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="bookmark-container w-[30%]">
          <h1 className="text-sky-400 font-bold mb-5 mt-10 bg-gray-100 p-4 rounded-xl">
            Spend time on read: {} min
          </h1>
          <div className="bg-gray-100 rounded-xl p-4">
            <h2 className="mb-2">Bookmarked Blogs: 0</h2>
            {bookmarked.map((marked) => (
              <p className="bg-sky-200 mb-2 p-4 rounded-xl">{marked.title}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
