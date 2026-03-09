import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container flex text-center p-4">
        <div className="blogs-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="bookmark-container w-[30%]">
          <h1 className="text-sky-400 font-bold mb-5 mt-10 bg-gray-100 p-4 rounded-xl">Spend time on read: 0</h1>
          <h2 className="bg-gray-200 rounded-xl p-4">Bookmarked Blogs: 0</h2>
        </div>
      </div>
    </>
  );
}

export default App;
