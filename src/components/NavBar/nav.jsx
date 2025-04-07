import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import BookMarkedImg from "../BookMarkedImg/bookMarkedImg";

export default function Nav({ setSearchText, bookmark }) {
  const [text, setText] = useState("");
  const [showBookMark, setShowBookMark] = useState(false);
  const [bookMarks, setBookMarks] = useState([]);

  const handleShowBookmark = () => {
    setShowBookMark(!showBookMark);
    let bookmarkaa = bookmark.map((img) => (
      <BookMarkedImg  img={img} key={img.id} />
    ));
    setBookMarks(bookmarkaa);
  };

  const handleSearch = () => {
    setSearchText(text);
  };

  return (
    <div>
      <div className=" flex-row lg:flex justify-between m-7 items-center">
        <div className="flex items-center gap-3">
          <img className="h-10 lg:h-12" src="picture.png" alt="" />
          <h1 className="font-semibold text-2xl lg:text-3xl">
            <span className="text-green-300">Image</span>
            <span className="text-blue-300">Gallery</span>
          </h1>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <button
            onClick={handleSearch}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-3"
          >
            <CiSearch />
          </button>
          <div className="flex items-center gap-4 lg:gap-8 relative">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              className=" h-10 lg:h-10 lg:w-[390px] border border-x-gray-100 px-3 rounded-md"
              type="text"
              placeholder="Search your Image"
            />
            <div className=" px-2 text-center rounded-xl relative">
              <button className="hover:bg-gray-100" onClick={handleShowBookmark}>
                <img className="  h-12 lg:mx-2 mt-4 lg:mt-2" src="favorite-image.png" alt="" />
              </button>
              {showBookMark && (
                <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg w-[300px] max-h-[400px] overflow-y-auto z-10">
                  {bookMarks}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
