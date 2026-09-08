import { useState } from "react";
import certificateImage from "../../assets/images/certificates/ki-als-future-skills.png";

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pdfPath = `${import.meta.env.BASE_URL}certificates/ki-als-future-skills.pdf`;

  return (
    <section
      id="certificates"
      className="content mt-16 md:mt-28 py-20 md:py-25 px-2 bg-gradient-to-b from-[#F6EBFE] via-[#F6EBFE]/40 to-white"    >
      {/* Section title */}
      <div className="text-center max-w-144.25 mx-auto mb-14">
        <p className="section-title">Certificates</p>
        <p className="font-normal text-[14px] sm:text-[18px] pt-6 text-gray-400">
          Certificates and qualifications I have obtained through my
          academic and professional development.
        </p>
      </div>

      {/* Certificate card */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Ribbon badge */}
          <div className="absolute -top-4 -right-4 z-10 bg-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg rotate-6 select-none">
            ✓ Verified
          </div>

          {/* Gradient frame */}
          <div className="p-[3px] rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-fuchsia-600 shadow-xl shadow-purple-300/40">
            <div
              onClick={() => setIsOpen(true)}
              className="group cursor-pointer w-90 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Certificate preview */}
              <div className="overflow-hidden relative">
                <img
                  src={certificateImage}
                  alt="KI als Future Skill Certificate"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Certificate information */}
              <div className="p-5 text-center border-t border-purple-100">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  KI als Future Skill
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Artificial Intelligence Certificate
                </p>
                <p className="text-xs text-purple-600 mt-4 font-semibold tracking-wide uppercase">
                  Click to view certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl overflow-hidden ring-4 ring-purple-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white text-xl hover:bg-black transition"
              aria-label="Close certificate"
            >
              ✕
            </button>
            {/* PDF */}
            <iframe
              src={pdfPath}
              title="KI als Future Skill Certificate"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;