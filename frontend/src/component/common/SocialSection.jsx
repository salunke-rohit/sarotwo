import SocialCard from "./SocialCard";

import github from "../../assets/github.jpg";
import linkedin from "../../assets/linkdin.png";
import gmail from "../../assets/gmail.webp";

function SocialSection() {

  const socialData = [
    {
      image: github,
      name: "GitHub",
      description: "Check out my coding projects and repositories.",
      link: "https://github.com/salunke-rohit"
    },
    {
      image: linkedin,
      name: "LinkedIn",
      description: "Connect with me professionally.",
      link: "https://www.linkedin.com/in/rohit-salunke-318087346/"
    },
    {
      image: gmail,
      name: "Email",
      description: "Send me an email for collaboration.",
      link: "mailto:rohitsalunke107@gmail.com"
    }
  ];

  return (
    <div className="socialContainer">
      {socialData.map((item, index) => (
        <SocialCard
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default SocialSection;