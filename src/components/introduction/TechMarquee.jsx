import Marquee from "react-fast-marquee";
import SkillIcon from "../skills/SkillIcon";

const technologies = [
  { name: "Java", icon: "java" },
  { name: "React", icon: "react" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Prisma", icon: "prisma" },
  { name: "Git", icon: "git" },
  { name: "PHP", icon: "php" },
  { name: "Appwrite", icon: "appwrite" },
  { name: "Postman", icon: "postman" },
  { name: "C", icon: "c" },
  { name: "Jira", icon: "jira" },
  { name: "Vite", icon: "vite" },
];

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TechMarquee = () => {
  return (
    <div className="pb-20 lg:pb-28">
      <p className="text-center text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-picto-primary mb-5">
        <span className="opacity-60">✦</span> Core technologies &amp; tools{" "}
        <span className="opacity-60">✦</span>
      </p>

      <Marquee
        speed={35}
        pauseOnHover
        play={!reduceMotion}
        gradient
        gradientColor="#faf7ff"
        gradientWidth={80}
        autoFill
      >
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="mx-2 flex items-center gap-2 rounded-xl border border-purple-100 bg-white px-4 py-2 text-[13px] sm:text-[14px] font-medium text-[#132238] shadow-sm"
          >
            <SkillIcon icon={tech.icon} />
            {tech.name}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
