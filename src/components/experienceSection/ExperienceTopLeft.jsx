import ExperienceInfo from "./ExperienceInfo";

/* ✅ Helper */
const getExperienceStats = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) {
    totalMonths -= 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};

const ExperienceTopLeft = () => {
  const START_DATE = "2024-01-01"; // 👈 adjust if needed
  const { years, months } = getExperienceStats(START_DATE);

  const experienceText =
    years > 0
      ? `${years}+ Year${years > 1 ? "s" : ""}`
      : `${months} Month${months > 1 ? "s" : ""}`;

  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since {new Date(START_DATE).getFullYear()}
      </p>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={years || months} text={years ? "Years" : "Months"} />
      </div>

      <p className="text-center">
        With {experienceText.toLowerCase()} of real-world experience building dynamic and
        user-friendly web and mobile applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
