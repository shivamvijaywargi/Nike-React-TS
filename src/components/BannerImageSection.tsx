import React from "react";

const BannerImageSection = ({
  para,
  heading,
  btnOne,
  btnTwo,
  textColor,
  bgColor,
  btnTextColor,
  imgUrl,
}: {
  para?: string;
  heading?: string;
  btnOne?: string;
  btnTwo?: string;
  textColor?: string;
  bgColor?: string;
  btnTextColor?: string;
  imgUrl?: string;
}) => {
  return (
    <section className="md:relative container mx-auto">
      <img src={imgUrl} alt="Nike Just Do It" />
      <div
        className={`md:absolute bottom-8 left-12 md:text-${textColor} flex flex-col justify-center items-center md:justify-start md:items-start`}
      >
        {para && <p className="text-xl">{para}</p>}
        {heading && (
          <h2 className="text-5xl font-extrabold max-w-md">{heading}</h2>
        )}
        <div className="space-x-3 mt-4">
          {btnOne && (
            <a
              href="#"
              className={`px-4 py-2 bg-black text-white md:bg-${bgColor} md:hover:bg-gray-300 md:text-${btnTextColor} rounded-full`}
            >
              {btnOne}
            </a>
          )}

          {btnTwo && (
            <a
              href="#"
              className={`px-4 py-2 bg-black text-white md:bg-${bgColor} md:hover:bg-gray-300 md:text-${btnTextColor} rounded-full`}
            >
              {btnTwo}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerImageSection;
