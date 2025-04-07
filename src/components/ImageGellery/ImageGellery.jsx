import React, { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { ImCross } from "react-icons/im";

const HandleModal = ({ url, id }) => {
  return (
    <dialog id={`my_modal_${id}`} className="modal">
      <div className="modal-box w-[400px] max-w-[90vw] h-[280px] p-5">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <ImCross />
          </button>
        </form>
        <h3 className="font-bold text-xl text-center">Share your Image</h3>
        <div className="flex gap-2 justify-center mt-2">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-gray-50">
              <img className="h-9" src="/facebook.png" alt="Facebook" />
            </button>
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-gray-50">
              <img className="h-9" src="/twitter.png" alt="Twitter" />
            </button>
          </a>
          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-gray-50">
              <img className="h-9" src="/instagram.png" alt="Instagram" />
            </button>
          </a>
          <a href={`https://t.me/share/url?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full hover:bg-gray-50">
              <img className="h-9" src="/telegram.png" alt="Telegram" />
            </button>
          </a>
        </div>
        <h1 className="text-center mt-3">- OR -</h1>
        <div>
          <h1 className="text-center mt-4 font-semibold">Copy your Image link</h1>
          <div className="shadow-md p-3 mt-3 overflow-x-auto">{url}</div>
        </div>
      </div>
    </dialog>
  );
};

export default function ImageGallery({ image, handleBookmark, handleDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = () => {
    if (isFavorite) {
      handleDelete(image.id);
    }
  };

  const handleDownload = async () => {
    try {
      const res = await fetch(image.url);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = image.title || "image.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="relative group">
      <img
        className="h-[250px] w-full rounded-xl object-cover"
        src={image.url}
        alt={image.title || "Image"}
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-xl">
        <h1 className="text-center text-white font-bold p-2">
          {image.title}
        </h1>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleDownload}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          title="Download"
        >
          <HiDownload />
        </button>
        <button
          onClick={() => {
            handleBookmark(image);
            setIsFavorite(!isFavorite);
            checkFavorite();
          }}
          className={`bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 ${
            isFavorite ? "  text-red-600 bg-red-500" : ""
          }`}
          title="Favorite"
        >
          <MdFavoriteBorder />
        </button>
        <button
          onClick={() => document.getElementById(`my_modal_${image.id}`).showModal()}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          title="Share"
        >
          <IoIosShareAlt />
        </button>
      </div>
      <HandleModal url={image.url} id={image.id} />
    </div>
  );
}