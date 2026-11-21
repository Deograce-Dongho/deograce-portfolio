import Reveal from "../common/reveal/Reveal";
import { useState } from "react";
import { ChipCard, TileCard } from "./SkillCard";

// "icon" refers to a key in skillIcons.js; "badge" is shown when there is no logo
const skillCategories = [
  {
    id: "frontend",
    layout: "chips",
    number: "01",
    eyebrow: "Main focus",
    title: "Web & Frameworks",
    label: "Frontend",
    description:
      "Building responsive, component-based user interfaces for the web and the desktop.",
    skills: [
      { name: "React", icon: "react" },
      { name: "HTML & CSS", icon: "html" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vite", icon: "vite" },
      { name: "JavaFX", badge: "FX" },
    ],
    code: {
      file: "stack.js",
      note: "// ChurchReport",
      items: ["React", "Tailwind", "Vite", "Appwrite"],
    },
  },
  {
    id: "languages",
    layout: "tiles",
    number: "02",
    title: "Programming Languages",
    label: "6 languages",
    skills: [
      { name: "Java", icon: "java", detail: "OOP & JavaFX" },
      { name: "Python", icon: "python", detail: "Scripting" },
      { name: "JavaScript", icon: "javascript", detail: "Web & React" },
      { name: "C", icon: "c", detail: "Low-level" },
      { name: "PHP", icon: "php", detail: "Server-side" },
      { name: "SQL", badge: "SQL", detail: "Queries" },
    ],
  },
  {
    id: "backend",
    layout: "chips",
    number: "03",
    title: "Databases & Backend",
    label: "Data",
    description:
      "Relational schema design, data access with an ORM, and backend services for authentication and storage.",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "Appwrite", icon: "appwrite" },
    ],
  },
  {
    id: "tools",
    layout: "tiles",
    number: "04",
    title: "DevOps & Workflow",
    label: "Tools",
    skills: [
      { name: "Git & GitHub", icon: "git", detail: "Version control" },
      { name: "Docker", icon: "docker", detail: "Containers" },
      { name: "Postman", icon: "postman", detail: "API testing" },
      { name: "Jira", icon: "jira", detail: "Project tracking" },
      { name: "Vercel", icon: "vercel", detail: "Deployment" },
    ],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "languages", label: "Languages" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "DevOps" },
];

const Skills = () => {
  const [active, setActive] = useState("all");

  const visible = skillCategories.filter(
    (category) => active === "all" || category.id === active
  );

  return (
    <section
      className="content pt-24 md:pt-32 lg:pt-40 pb-10 md:pb-15 lg:pb-25 max-xxl:px-4 relative z-10"
      id="skills"
    >
      <Reveal className="max-w-160 text-center mx-auto mb-8 md:mb-10">
        <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-wider text-picto-primary bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-picto-primary"></span>
          Tech Stack
        </span>

        <p className="section-title mt-5">
          My Skills &amp; <span className="text-picto-primary">Tools</span>
        </p>

        <p className="font-normal text-[14px] sm:text-[18px] pt-5 text-gray-400">
          Languages, frameworks and developer tools I have worked with during
          my studies and projects.
        </p>
      </Reveal>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActive(filter.id)}
            className={`px-4 sm:px-5 py-1.5 rounded-full text-[14px] font-medium border transition-colors duration-300 cursor-pointer ${
              active === filter.id
                ? "bg-picto-primary border-picto-primary text-white"
                : "bg-white border-gray-200 text-[#132238] hover:border-picto-primary"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto items-start">
        {visible.map((category, index) => (
          <Reveal key={category.id} delay={(index % 2) * 120}>
            {category.layout === "tiles" ? (
              <TileCard category={category} />
            ) : (
              <ChipCard category={category} />
            )}
          </Reveal>
        ))}

        {/* Foundations banner */}
        {active === "all" && (
          <Reveal className="lg:col-span-2">
          <div className=" rounded-3xl bg-linear-to-br from-picto-primary to-picto-primary-dark text-white p-7 sm:p-9 flex max-md:flex-col md:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-purple-200">
                Software engineering foundations
              </p>
              <p className="text-[22px] sm:text-[26px] font-semibold mt-2 leading-tight">
                Modelling, algorithms &amp; object-oriented design
              </p>
              <p className="text-[14px] text-purple-100 mt-2">
                Always learning, one project at a time.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {["UML", "Algorithms", "OOP"].map((item) => (
                <li
                  key={item}
                  className="font-mono text-[14px] font-semibold bg-white/15 border border-white/25 rounded-xl px-4 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Skills;
