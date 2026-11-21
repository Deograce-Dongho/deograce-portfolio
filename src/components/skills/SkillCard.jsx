import SkillIcon from "./SkillIcon";

const cardStyle =
  "bg-white rounded-3xl border border-purple-100/70 p-6 sm:p-7 shadow-[0_8px_30px_rgba(153,41,251,0.06)] hover:shadow-[0_12px_40px_rgba(153,41,251,0.12)] transition-shadow duration-300";

// Header shared by every card: number, title and a small label on the right
const CardHeader = ({ number, eyebrow, title, label }) => (
  <div className="flex items-start justify-between gap-3">
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm font-bold text-picto-primary bg-purple-50 rounded-md px-2 py-1">
        {number}
      </span>
      <div>
        {eyebrow && (
          <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
            {eyebrow}
          </p>
        )}
        <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#132238] leading-tight">
          {title}
        </h3>
      </div>
    </div>
    {label && (
      <span className="shrink-0 text-xs font-medium text-picto-primary bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
        {label}
      </span>
    )}
  </div>
);

// Small rounded tag with a logo
const Chip = ({ skill }) => (
  <li className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-[14px] font-medium text-[#132238] hover:border-picto-primary transition-colors duration-300">
    <SkillIcon icon={skill.icon} badge={skill.badge} />
    {skill.name}
  </li>
);

// Card with a description and a list of chips (optionally a code snippet)
export const ChipCard = ({ category }) => (
  <div className={cardStyle}>
    <CardHeader {...category} />
    <p className="text-[14px] text-gray-500 leading-relaxed mt-4">
      {category.description}
    </p>
    <ul className="flex flex-wrap gap-2.5 mt-5">
      {category.skills.map((skill) => (
        <Chip skill={skill} key={skill.name} />
      ))}
    </ul>

    {category.code && (
      <div className="mt-6 rounded-2xl bg-[#111827] px-5 py-4 font-mono text-[12.5px] sm:text-[13px]">
        <div className="flex justify-between text-gray-400 mb-3">
          <span>{category.code.file}</span>
          <span className="text-amber-300">{category.code.note}</span>
        </div>
        <p className="text-gray-200 break-words">
          <span className="text-purple-400">const</span> stack = [
          {category.code.items.map((item, i) => (
            <span key={item}>
              <span className="text-amber-300">'{item}'</span>
              {i < category.code.items.length - 1 && ", "}
            </span>
          ))}
          ];
        </p>
      </div>
    )}
  </div>
);

// Card with a grid of tiles: logo, name and a short detail
export const TileCard = ({ category }) => (
  <div className={cardStyle}>
    <CardHeader {...category} />
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
      {category.skills.map((skill) => (
        <li
          key={skill.name}
          className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/60 p-3 hover:border-purple-200 transition-colors duration-300"
        >
          <span className="w-9 h-9 shrink-0 grid place-items-center rounded-xl bg-white border border-gray-100">
            <SkillIcon
              icon={skill.icon}
              badge={skill.badge}
              className="w-5 h-5"
            />
          </span>
          <span className="min-w-0">
            <span className="block text-[14px] font-semibold text-[#132238]">
              {skill.name}
            </span>
            <span className="block text-[12px] text-gray-400 leading-snug">
              {skill.detail}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);
