
const ProjectCard = ({ src, title, description,link}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-3">
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-100 object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      {link && <a href={link} className="font-bold relative btn btn-primary hover:opacity-90 z-[50]">Visit WebSite</a> }
    </div>
  );
};

export default ProjectCard;
