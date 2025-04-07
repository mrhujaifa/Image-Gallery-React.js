import React from "react";
import ImageGellery from "../ImageGellery/ImageGellery";
export default function ImageGellerys({ data, handleBookmark, handleDelete }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((image) => (
        <ImageGellery
          key={image.id}
          image={image}
          handleBookmark={handleBookmark}
          handleDelete={handleDelete}
        ></ImageGellery>
      ))}
    </div>
  );
}
