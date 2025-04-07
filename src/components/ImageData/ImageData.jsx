import React, { useEffect, useState } from "react";
import ImageGellerys from "../ImageGellerys/ImageGallerys";

export default function ImageData({ searchText, handleBookmark, handleDelete }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Gellary.json")
      .then((res) => res.json())
      .then((data) => setData(data.images))
      .catch((error) => console.log("Error404 :", error));
  }, []);

  // Filter based on search text
  const filteredData = data.filter((img) =>
    img.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      {filteredData.length > 0 ? (
        <ImageGellerys data={filteredData} handleBookmark={handleBookmark} handleDelete={handleDelete} />
      ) : (
        <div className="flex justify-center items-center gap-3 mt-[300px]">
          <div className="">
            <img className="text-green-400 h-12 " src="image not found.png" alt="" />
          </div>
          <div>
            <h1 className=" font-bold text-2xl">Image Not Found</h1>
          </div>
        </div>
      )}
    </>
  );
}
