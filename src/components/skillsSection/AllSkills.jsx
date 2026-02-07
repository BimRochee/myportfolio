import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFirebase, SiSharp } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "PHP",
    icon: SiPhp,
  },
   {
    skill: "Laravel",
    icon: TbBrandLaravel,
  },
   {
    skill: "Flutter",
    icon: SiFlutter,
  },
  {
    skill: "Firebase",
    icon: SiFirebase,
  },
  {
    skill: "Supabase",
    icon: SiSupabase,
  },
  {
    skill: "C#",
    icon: SiSharp,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
