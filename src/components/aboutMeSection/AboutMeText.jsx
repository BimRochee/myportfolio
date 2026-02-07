import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p>
        I’m Bim Rochee P. Agliam, a mobile and web developer with a Bachelor’s
        degree in Information Technology. I have experience building responsive
        applications using technologies such as Flutter, Laravel, Firebase, and
        Supabase, and have contributed to academic and institutional projects
        including the Cacao Traceability System and the TraKs Mobile & Web
        System.
        <br />
        <br />
        Currently, I work with{" "}
        <span className="text-white font-medium">
          C#, ASP.NET Core, JavaScript, and DevExtreme
        </span>{" "}
        in developing business and accounting systems, following clean
        architectural patterns such as{" "}
        <span className="text-white font-medium">Onion Architecture</span>.
        I value clean code, maintainability, and continuous learning while
        collaborating on practical, real-world solutions.
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy
          smooth
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;