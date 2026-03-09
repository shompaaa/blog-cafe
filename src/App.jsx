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
          <h1>Reading Time: 0</h1>
          <h2>Bookmarked Blogs: 0</h2>
        </div>
      </div>
    </>
  );
}

export default App;
