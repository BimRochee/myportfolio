import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="bemzagliam14@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+63 910 367 9602" Image={FiPhone} />
      <SingleInfo text="Davao City, Philippines" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
