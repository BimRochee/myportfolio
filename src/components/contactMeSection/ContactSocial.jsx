import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/bim-rochee-agliam-606840167/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/BimRochee" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/rotchxx/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
