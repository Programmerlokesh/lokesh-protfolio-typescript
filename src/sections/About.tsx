import Image from "next/image";

const technologies = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT.JS",
  "NEXT.JS",
  "REDUX TOOLKIT",
  "TAILWINDCSS",
  "TYPESCRIPT",
  "GIT",
  "GITHUB",
  "BOOTSTRAP",
  "FIGMA",
];

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is Lokesh, and I am passionate about creating digital
            content for the web. My interest in web development was sparked in
            2022.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations.
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through different website by writing blogs, where I write new
            achievements and write about new technologies.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            {technologies.map((text, index) => (
              <li className="about-grid-info-list-item" key={index}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/lokesh.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
