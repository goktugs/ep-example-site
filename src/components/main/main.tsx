import { useState } from "react";

const MAIN_IMAGES = [
  {
    id: 1,
    src: "/riseonlinelogo.png",
    logo: "/background-main.png",
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
    <div className=" flex flex-col md:flex-row md:gap-7">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex-1">
          <img
            className="h-auto max-w-full rounded-2xl"
            src={selectedImage.logo ? selectedImage.logo : selectedImage.src}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between overflow-x-scroll">
          {MAIN_IMAGES.map((image) => (
            <div
              onClick={() => handleImageClick(image.src)}
              className={`cursor-pointer rounded-2xl bg-main-purple-dark px-4 py-2  ${
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
          className="flex-1 rounded-2xl"
          src="http://placekitten.com/g/326/234"
          alt=""
        />
        <img
          className="flex-1 rounded-2xl"
          src="http://placekitten.com/g/326/234"
          alt=""
        />
      </div>
    </div>
  );
}
