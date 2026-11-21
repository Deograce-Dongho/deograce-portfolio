import Reveal from "../common/reveal/Reveal";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Mainz, Germany",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "deogracedongho@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-picto-primary mb-3">
            Get in touch
          </p>
          <p className="font-display text-3xl md:text-[42px] font-bold tracking-tight text-[#132238]">
            Let's Connect
          </p>

          <p className="mt-4 text-sm md:text-lg font-normal text-soft-dark">
            I'm open to internship, Werkstudent, and entry-level opportunities
            in software development and IT.
          </p>

          <div className="my-8 flex flex-col sm:flex-row justify-center gap-4">
            {addressData.map((item, index) => (
              <Address item={item} key={index} />
            ))}
          </div>

          <div className="w-full">
            <SocialMedia />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;