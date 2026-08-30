import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faGithub,
    link: "https://github.com/Deograce-Dongho",
    label: "GitHub",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-3">
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-picto-primary hover:bg-picto-primary hover:text-white p-3 rounded-md transition-all duration-300"
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;