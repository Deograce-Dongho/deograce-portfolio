import skillIcons from "./skillIcons";

// Brand logo of a technology, or a short text badge when no logo exists
const SkillIcon = ({ icon, badge, className = "w-4 h-4" }) => {
  const logo = skillIcons[icon];

  if (!logo) {
    return (
      <span
        className={`${className} shrink-0 grid place-items-center rounded-[5px] bg-purple-100 text-picto-primary font-mono font-bold text-[8px]`}
      >
        {badge}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} shrink-0`}
      fill={logo.hex}
      aria-hidden="true"
    >
      <path d={logo.path} />
    </svg>
  );
};

export default SkillIcon;
