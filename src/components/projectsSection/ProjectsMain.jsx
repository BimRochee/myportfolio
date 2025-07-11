import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "TRACO",
    year: "July 2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://drive.google.com/file/d/1yfkAcxMFBXaXA50rj5AQlHkrmXD0lrWT/view?fbclid=IwY2xjawLdx6BleHRuA2FlbQIxMABicmlkETFLaTBUdmlHZXlTMkdDU0lsAR4mGNYKRxkpKjYuDDEy0YgC656KhZczBP-KaIYz4v391ZzJsz__Cg2dcAq7eQ_aem_mKxicc3co5B-Ojy-06q-Lg",
  },
  {
    name: "TRAKS",
    year: "January 2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://drive.google.com/drive/u/0/folders/1ZKQQNe7yk_EQnFMBiuqjVKWRkr4fwyGp?fbclid=IwY2xjawKJLetleHRuA2FlbQIxMABicmlkETFXRUhHZ01kbVNRRDJKRkI2AR45IWSAklKZxh4AYyBMoy3UZAGKBu0nakxquSFGpS8wkX9Fwr6FT7sQohwtvw_aem_Am2PyZHQu6eeo0isMtmuUA",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
