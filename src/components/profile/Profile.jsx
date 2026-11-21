import Reveal from "../common/reveal/Reveal";
import person from "../../assets/images/person1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { Link } from "react-scroll";
import cv from "../../assets/documents/Deograce-Dongho-CV.pdf";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-10 lg:-bottom-16 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">

        {/* Profile image */}
        <Reveal className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="group max-w-106 h-117 object-fill overflow-hidden rounded-2xl bg-gradient-to-b from-[#f3e8ff] to-[#e9d5ff]">
            <img
              className="h-[120%] object-cover group-hover:scale-105 transition-transform duration-700"
              src={person}
              alt="Deograce Dongho"
            />
          </div>

          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </Reveal>

        {/* About Me */}
        <Reveal delay={150} className="max-sm:w-full w-[33rem]">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-picto-primary mb-3 max-md:text-center">
            Get to know me
          </p>
          <h2 className="font-display text-2xl xxs:text-3xl sm:text-4xl lg:text-[42px] max-md:text-center font-bold tracking-tight text-[#132238] mb-8">
            About Me
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              I am an Applied Computer Science student with a strong interest
              in software development, IT, and artificial intelligence. I
              enjoy combining technical knowledge with practical problem-solving
              to build useful and reliable solutions.
            </p>

            <p className="mt-3">
              Through university projects and hands-on learning, I have gained
              experience with Java, Python, C, SQL, web technologies, and
              databases. I am continuously developing my skills and looking
              forward to gaining practical experience in the IT industry.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex max-md:justify-center">

            {/* My Projects */}
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] cursor-pointer"
            >
              My Projects
            </Link>

            {/* Download CV */}
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
              href={cv}
              download="Deograce-Dongho-CV.pdf"
            >
              Download CV
              <FontAwesomeIcon
                icon={faDownload}
                className="ms-2"
              />
            </a>

          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Profile;