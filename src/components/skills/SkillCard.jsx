const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-lg border border-gray-100 shadow-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <p className="text-[15px] sm:text-[16px] font-semibold text-[#132238]">
          {skill.name}
        </p>

        <span className="text-sm text-gray-400">
          {skill.level}%
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-picto-primary rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;