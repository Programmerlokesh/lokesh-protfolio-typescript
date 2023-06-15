import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const SocialIcons = () => {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      link: "https://www.facebook.com/lokesh.9733/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/koolkishan/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/koolkishansheth",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/koolkishansheth",
    },
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
