import { Suspense, useState } from "react";
import "./App.css";
import ImageData from "./components/ImageData/ImageData";
import Nav from "./components/NavBar/nav";

function App() {
  const [searchText, setSearchText] = useState("");
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (image) => {
    setBookmark([...bookmark, image]);
  };

  const handleDelete = (id) => {
    console.log(id);
    console.log("deleted clicked");
    let remainingImg = bookmark.filter((img) => img.id !== id);
    setBookmark(remainingImg);
  };

  return (
    <>
      <div className="container m-auto">
        <Nav setSearchText={setSearchText} bookmark={bookmark} />
        <Suspense fallback={<h1>Loading......</h1>}>
          <ImageData
            searchText={searchText}
            handleBookmark={handleBookmark}
            handleDelete={handleDelete}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;
