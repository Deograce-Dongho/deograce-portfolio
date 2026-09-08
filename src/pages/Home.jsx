import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Certificates from "../components/certificates/Certificates";
import Skills from "../components/skills/Skills";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>    
      <Certificates />
      <Skills />
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
