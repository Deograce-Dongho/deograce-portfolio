import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCode,
  faFolderOpen,
  faGraduationCap,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import person from "../../assets/images/person1.png";
import TypingText from "./TypingText";
import TechMarquee from "./TechMarquee";
import "./introduction.css";

const typingPhrases = [
  "software development.",
  "web applications.",
  "databases & backends.",
  "IT & artificial intelligence.",
];

const facts = [
  { icon: faGraduationCap, text: "Applied CS · Hochschule Mainz" },
  { icon: faFolderOpen, text: "5+ projects" },
  { icon: faLayerGroup, text: "15+ technologies" },
];

const Introduction = () => {
  return (
    <div id="introduction" className="max-xxl:px-4">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center pt-10 sm:pt-16 lg:pt-24 pb-14 lg:pb-20">
        {/* Text */}
        <div className="max-lg:text-center">
          <p
            className="hero-in inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-purple-100 bg-white/80 backdrop-blur px-4 py-2 text-[12px] sm:text-[13px] font-medium text-[#132238] shadow-sm"
            style={{ "--hero-delay": "0ms" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            Open to Werkstudent &amp; internship roles
            <span className="hidden sm:inline h-4 w-px bg-purple-200"></span>
            <span className="text-picto-primary">Mainz, Germany</span>
          </p>

          <h1 className="font-display mt-7 text-[40px] xxs:text-[46px] sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#132238]">
            <span className="hero-in block" style={{ "--hero-delay": "120ms" }}>
              Hello, I’m
            </span>
            <span
              className="hero-in block text-gradient pb-1"
              style={{ "--hero-delay": "240ms" }}
            >
              Deograce Dongho
            </span>
          </h1>

          <p
            className="hero-in mt-5 text-lg sm:text-2xl font-semibold text-[#132238] min-h-[2lh] sm:min-h-[1lh]"
            style={{ "--hero-delay": "380ms" }}
          >
            I love building in <TypingText phrases={typingPhrases} />
          </p>

          <p
            className="hero-in mt-4 text-[15px] sm:text-[18px] leading-relaxed text-gray-500 max-w-xl max-lg:mx-auto"
            style={{ "--hero-delay": "500ms" }}
          >
            An <strong className="text-[#132238]">Applied Computer Science</strong>{" "}
            student based in Mainz, Germany, with a strong interest in software
            development, IT and AI. I enjoy building practical solutions and
            learning new technologies through hands-on projects.
          </p>

          <div
            className="hero-in mt-8 flex flex-wrap gap-3 max-lg:justify-center"
            style={{ "--hero-delay": "620ms" }}
          >
            <a
              href="mailto:deogracedongho@gmail.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-picto-primary px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-purple-300/50 hover:bg-picto-primary-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <Link
              to="portfolio"
              smooth={true}
              duration={900}
              offset={-90}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#132238] cursor-pointer hover:border-picto-primary hover:text-picto-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFolderOpen} />
              Explore Projects
            </Link>
          </div>

          <div
            className="hero-in mt-10 pt-6 border-t border-purple-100 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] sm:text-[14px] text-gray-600 max-lg:justify-center"
            style={{ "--hero-delay": "740ms" }}
          >
            {facts.map((fact) => (
              <span key={fact.text} className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={fact.icon} className="text-picto-primary" />
                {fact.text}
              </span>
            ))}
            <a
              href="https://github.com/Deograce-Dongho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-picto-primary transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
          </div>
        </div>

        {/* Photo card */}
        <div
          className="hero-in relative mx-auto w-full max-w-[400px] lg:max-w-[440px]"
          style={{ "--hero-delay": "300ms" }}
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-purple-300/40 via-fuchsia-200/30 to-indigo-200/40 blur-2xl"></div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white bg-gradient-to-b from-[#f3e8ff] to-[#e9d5ff] shadow-2xl shadow-purple-200/60">
            <div className="hero-grid absolute inset-0 opacity-60"></div>
            <img
              src={person}
              alt="Deograce Dongho"
              className="absolute inset-0 h-full w-full object-cover object-[50%_68%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#132238]/80 via-[#132238]/30 to-transparent p-5 pt-16 flex items-end justify-between">
              <div className="text-white">
                <p className="font-display font-bold text-lg leading-tight">
                  Deograce Dongho
                </p>
                <p className="text-[13px] text-white/80">
                  Applied Computer Science · Mainz
                </p>
              </div>
              <span className="rounded-lg bg-white/15 border border-white/25 backdrop-blur px-2.5 py-1 text-[12px] font-medium text-white">
                Dev / AI
              </span>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-slow absolute -top-5 right-2 sm:-right-8 flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 backdrop-blur px-4 py-3 shadow-xl shadow-purple-200/50">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-purple-100 text-picto-primary">
              <FontAwesomeIcon icon={faBolt} />
            </span>
            <span className="text-left">
              <span className="block text-[13px] font-semibold text-[#132238]">
                IT &amp; AI
              </span>
              <span className="block text-[11px] text-gray-500">
                Always learning
              </span>
            </span>
          </div>

          <div className="float-slow-delayed absolute bottom-20 left-2 sm:-left-10 flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 backdrop-blur px-4 py-3 shadow-xl shadow-purple-200/50">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
              <FontAwesomeIcon icon={faCode} />
            </span>
            <span className="text-left">
              <span className="block text-[13px] font-semibold text-[#132238]">
                Clean code
              </span>
              <span className="block text-[11px] text-gray-500">
                Software development
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-in" style={{ "--hero-delay": "900ms" }}>
        <TechMarquee />
      </div>
    </div>
  );
};

export default Introduction;
