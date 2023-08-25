import React from "react";
import { useState } from "react";

const MAIN_IMAGES = [
  {
    id: 1,
    src: "http://placekitten.com/g/1042/400",
  },
  {
    id: 2,
    src: "http://placekitten.com/g/1043/400",
  },
  {
    id: 3,
    src: "http://placekitten.com/g/1044/400",
  },
  {
    id: 4,
    src: "http://placekitten.com/g/1042/401",
  },
  {
    id: 5,
    src: "http://placekitten.com/g/1042/402",
  },
  {
    id: 6,
    src: "http://placekitten.com/g/1042/403",
  },
  {
    id: 7,
    src: "http://placekitten.com/g/1041/400",
  },
  {
    id: 8,
    src: "http://placekitten.com/g/1043/399",
  },
];

export default function Main() {
  const [selectedImage, setSelectedImage] = useState(MAIN_IMAGES[0]);

  const handleImageClick = (src: string) => {
    const image = MAIN_IMAGES.find((image) => image.src === src);
    if (image) {
      setSelectedImage(image);
    }
  };

  return (
    <div className="flex gap-7">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex-1">
          <img className="rounded-2xl" src={selectedImage.src} alt="" />
        </div>
        <div className="flex items-center justify-between">
          {MAIN_IMAGES.map((image) => (
            <div
              onClick={() => handleImageClick(image.src)}
              className={`cursor-pointer rounded-2xl bg-main-purple-dark px-2 py-4  ${
                selectedImage.id === image.id
                  ? "border-4 border-main-text-smoke opacity-100"
                  : "opacity-25"
              }`}
              key={image.id}
            >
              <div className="h-16 w-16 ">
                <img
                  key={image.id}
                  className="h-full w-full  "
                  src={image.src}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <img
          className="rounded-2xl"
          src="http://placekitten.com/g/326/234"
          alt=""
        />
        <img
          className="rounded-2xl"
          src="http://placekitten.com/g/326/234"
          alt=""
        />
      </div>
    </div>
  );
}
