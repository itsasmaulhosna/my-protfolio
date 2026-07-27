import ProjectModal from "@/components/ProjectModal";

async function getProjects() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(`${baseUrl}/data.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

const ProjectPage = async () => {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-6 py-40">
      {/* Heading */}
      <div className="text-center space-y-5 mb-16">
        <p className="inline-block border border-cyan-500 text-cyan-400 rounded-full px-4 py-1 text-sm">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold">
          My <span className="text-cyan-400">Projects</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Here is a collection of my recent work including full-stack
          applications, frontend UI projects, and interactive web experiences
          built with modern technologies like React, Next.js, and Tailwind CSS.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#111827] border border-white/10 rounded-3xl overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                {project.title}
              </h2>

              <span className="inline-block mt-3 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-xs">
                {project.type}
              </span>

              <p className="text-gray-400 text-sm mt-4 mb-6">
                {project.shortDescription}
              </p>

              <ProjectModal project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;