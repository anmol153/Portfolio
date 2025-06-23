import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Programming,
  Skill_data,
} from "../Constants";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {/* Common Skill Data */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={`skill-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Frontend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={`frontend-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Backend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={`backend-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* programming skill */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[10]">
        {Programming.map((image, index) => (
          <SkillDataProvider
            key={`fullstack-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Full Stack Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[10]">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={`fullstack-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Other Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={`other-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute z-[-10] opacity-30">
        <div className="w-full h-full flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/assests/cards-video.webm" 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
