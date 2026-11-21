import { useState } from "react";
import {
  faArrowRight,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageLightbox from "./ImageLightbox";

const Projects = ({ data }) => {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <div className="group h-full max-w-106 overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-purple-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
      {/* Image: click to enlarge */}
      <button
        type="button"
        onClick={() => setEnlarged(true)}
        aria-label={`Enlarge ${data?.title} image`}
        className="relative block w-full overflow-hidden aspect-[16/10] bg-gray-50 cursor-zoom-in"
      >
        <img
          src={data?.image}
          alt={`${data?.title} image`}
          loading="lazy"
          className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-[#132238]/0 group-hover:bg-[#132238]/25 transition-colors duration-500">
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[13px] font-semibold text-[#132238] shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-picto-primary" />
            Enlarge
          </span>
        </span>
      </button>

      {enlarged && (
        <ImageLightbox
          image={data?.image}
          title={data?.title}
          onClose={() => setEnlarged(false)}
        />
      )}
      <div className="p-4 xs:p-8">
        <p className="text-picto-primary text-xs font-semibold tracking-wide">{data?.category}</p>
        <p className="font-display text-[#132238] text-md xxs:text-xl font-bold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <a
          href={data?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          View Project
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
