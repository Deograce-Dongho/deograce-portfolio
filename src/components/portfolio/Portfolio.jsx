import Projects from "./Projects";
import mediavault from "../../assets/images/portfolio-images/mediavault.png";
import qlocktwo from "../../assets/images/portfolio-images/qlocktwo.png";
import Starrbattle from "../../assets/images/portfolio-images/Starrbattle.png";
import thesismenthor from "../../assets/images/portfolio-images/thesismenthor.png";
import portfolio1 from "../../assets/images/portfolio-images/portfolio1.png";
import cpu from "../../assets/images/portfolio-images/cpu.jpg";

const projectData = [
  {
    id: 1,
    image: mediavault,
    category: "JAVA · JAVAFX · POSTGRESQL",
    title: "MediaVault",
    description:
      "A desktop application developed with JavaFX and PostgreSQL to manage films, series, and books, with search, filtering, ratings, and watched-status management.",
    link: "https://github.com/Deograce-Dongho/MediaVault",
  },
  {
    id: 2,
    image: qlocktwo,
    category: "JAVA · JAVAFX",
    title: "QLOCKTWO Word Clock",
    description:
    "A JavaFX application inspired by the QLOCKTWO concept, displaying the current time through illuminated words and combining graphical interface design with time-based programming.",
    link: "https://github.com/Deograce-Dongho/QLOCKTWO",
  },
  {
    id: 3,
    image: Starrbattle,
    category: "JAVA · ALGORITHMS",
    title: "Star Battle",
    description:
      "A logic puzzle game developed in Java, focusing on algorithmic problem-solving, game logic, and an interactive user interface.",
    link: "https://github.com/Deograce-Dongho/StarBattle-Go",
  },
  {
    id: 4,
    image: thesismenthor,
    category: "PYTHON · AI",
    title: "ThesisMentor",
    description:
      "A project designed to support students during academic work by helping them structure, organize, and develop their ideas.",
    link: "https://github.com/Archange-Mbah/ThesisMentor",
  },
  {
    id: 5,
    image: portfolio1,
    category: "HTML · CSS",
    title: "Personal Portfolio Website",
    description:
      "A responsive website showcasing my skills, experience, and projects, built with modern web technologies.",
    link: "https://github.com/Deograce-Dongho/My-First-Portfolio",
  },
  {
    id: 6,
    image: cpu,
    category: "C · COMPUTER SCIENCE",
    title: "MIPS CPU Emulator",
    description:
      "A low-level programming project implementing the main components of a MIPS CPU emulator, including memory operations and instruction processing.",
    link: "https://github.com/Deograce-Dongho/MIPS-CPU",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">My Projects</p>

          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here are some of the projects I have developed through my studies
            and hands-on learning, covering software development, databases,
            and problem-solving.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://github.com/Deograce-Dongho"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;