const ProjectCard = ({ src, title, description, link, stack = {} }) => {
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

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold relative btn btn-primary hover:opacity-90 z-[50]"
        >
          Visit Website
        </a>
      )}

      <div className="flex flex-row flex-wrap gap-2 p-4 items-center relative bottom-2">
        {stack.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="tech"
            className="w-8 h-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
