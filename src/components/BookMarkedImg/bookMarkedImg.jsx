import React from "react";

const BookMarkedImg = ({ img }) => {
  
  return (
    <div>
      <div className="w-[240px] h-auto p-4 border">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-28" src={img.url} alt="" />
          </div>
          <div>
            <button >
              <img className="h-7" src="/public/delete.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkedImg;
