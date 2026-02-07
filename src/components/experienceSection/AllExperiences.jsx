import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

/* ✅ Date helper */
const formatDateWithDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) {
    months -= 1;
  }

  const startFormatted = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return `${startFormatted} – Present · ${months} mos`;
};

const experiences = [
  {
    job: "Full-Stack Web Developer",
    company: "USeP x DOST-PCAARRD",
    date: "2024 – 2025",
    responsibilities: [
      "Collaborated with fellow interns to develop the admin panel.",
      "Conducted end-user training for both web and mobile applications.",
      "Contributed to project documentation and basic security features.",
    ],
  },
  {
    job: "Mobile App Developer",
    company: "IT Capstone Project",
    date: "2025",
    responsibilities: [
      "Developed a mobile application as part of the capstone project.",
      "Presented and demonstrated the system to the LGU of IGACOS.",
      "Assisted in drafting patent-related documentation for the system.",
    ],
  },
  {
    job: "Software Developer",
    company: "Hyper Access",
    date: formatDateWithDuration("2025-11-26"),
    responsibilities: [
      "Developing and maintaining accounting web applications.",
      "Collaborating with cross-functional teams on feature implementation.",
      "Implementing user-friendly and maintainable interfaces.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />

          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;