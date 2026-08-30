import SkillCard from "./SkillCard";

const skillsData = [
  {
    id: 1,
    name: "Java",
    level: 80,
  },
  {
    id: 2,
    name: "Python",
    level: 70,
  },
  {
    id: 3,
    name: "C",
    level: 70,
  },
  {
    id: 4,
    name: "SQL",
    level: 75,
  },
  {
    id: 5,
    name: "HTML & CSS",
    level: 80,
  },
  {
    id: 6,
    name: "JavaScript",
    level: 60,
  },
  {
    id: 7,
    name: "React",
    level: 55,
  },
  {
    id: 8,
    name: "PostgreSQL",
    level: 70,
  },
  {
    id: 9,
    name: "Git & GitHub",
    level: 75,
  },
  {
    id: 10,
    name: "UML",
    level: 70,
  },
  {
    id: 11,
    name: "JavaFX",
    level: 75,
  },
  {
    id: 12,
    name: "Algorithms",
    level: 70,
  },
];

const Skills = () => {
  return (
    <section
      className="content pt-24 md:pt-32 lg:pt-40 pb-10 md:pb-15 lg:pb-25 max-xxl:px-4 relative z-10"
      id="skills"
    >
      <div className="max-w-144.25 text-center mx-auto mb-10 md:mb-15">
        <p className="section-title">My Skills</p>

        <p className="font-normal text-[14px] sm:text-[18px] pt-6 text-gray-400">
          Here are some of the technologies and technical skills I have
          developed through my studies and projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-218 mx-auto">
        {skillsData.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;