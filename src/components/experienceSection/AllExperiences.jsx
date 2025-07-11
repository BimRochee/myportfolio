import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Web Developer",
    company: "USeP x DOST-PCAARRD",
    date: "2024 - 2025",
    responsibilities: [
      "Collaborated with other interns to developed the admin panel.",
      "Trained end-users on how to use the (web & mobile) app.",
      "Contributed to the documentation and security feature of the project.",
    ],
  },
  {
    job: "Mobile App Developer",
    company: "IT Capstone Project",
    date: "2025",
    responsibilities: [
      "Developed a mobile application for the capstone project.",
      "Presented and demonstrated the system to the LGU of IGACOS.",
      "Collaborated in drafting the patent documentation for the system.",
    ],
  },
  {
    job: "System Prototyper & App Idea Creator",
    company: "Academic Projects & Freelance",
    date: "2022–Present",
    responsibilities: [
      "Created prototypes and conceptualized app/system ideas for various academic and freelance projects.",
      "Focused on solving real-world problems in areas like tourism, governance, agriculture, and community services.",
      "Transformed abstract ideas into functional wireframes, workflows, and early-stage system designs.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
