"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FeaturedProjectModal from "./FeaturedProjectModal";

const projects = [
  {
    title: "Ai Prompt",
    type: "Full Stack",
    shortDescription:
      "An AI prompt management platform for creating, organizing, and sharing prompts efficiently.",

    fullDescription:
      "Ai Prompt is a full-stack web application that enables users to create, organize, and manage AI prompts in one place. It includes secure authentication, prompt categorization, search functionality, and a modern dashboard for an enhanced user experience.",

    image: "/images/ai-prompt.png",

    tech: ["Next.js", "JavaScript", "MongoDB", "JWT"],

    live: "https://ai-prompt-client-two.vercel.app",

    github:
      "https://github.com/itsasmaulhosna/PromptVault-Client",

    challenges: [
      "Implementing secure JWT authentication.",
      "Managing prompt CRUD operations efficiently.",
      "Building a responsive dashboard.",
      "Optimizing MongoDB queries.",
    ],

    futurePlans: [
      "AI-powered prompt suggestions.",
      "Public prompt sharing.",
      "Bookmark & favourites.",
      "Prompt analytics dashboard.",
    ],
  },


  {
    title: "Fitness AI",
    type: "Frontend / React",

    shortDescription:
      "An AI-powered fitness platform that helps users discover personalized workout programs.",

    fullDescription:
      "Fitness AI is a responsive React application that provides personalized workout plans, fitness programs, and exercise tracking with a clean and modern user interface.",

    image: "/images/fitness-ai.png",

    tech: ["React", "Tailwind CSS", "JavaScript"],

    live: "https://fitness-maya1234.vercel.app",

    github:
      "https://github.com/itsasmaulhosna/fitness-ai-project",

    challenges: [
      "Building reusable React components.",
      "Creating responsive layouts.",
      "Managing state efficiently.",
      "Designing an engaging UI.",
    ],

    futurePlans: [
      "AI workout recommendations.",
      "Authentication system.",
      "Workout progress tracking.",
      "Nutrition planner.",
    ],
  },


  {
    title: "Course Hub",
    type: "Full Stack",

    shortDescription:
      "A modern learning management platform with authentication and dashboard.",

    fullDescription:
      "Course Hub is a full-stack LMS where users can browse courses, enroll in programs, and manage their learning journey with Better Auth authentication.",

    image: "/images/course-hub.png",

    tech:[
      "Next.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS"
    ],

    live:"https://course-hub-pearl.vercel.app",

    github:
      "https://github.com/itsasmaulhosna/course-hub",

    challenges:[
      "Implementing Better Auth.",
      "Role-based dashboard.",
      "Course enrollment flow.",
      "Performance optimization."
    ],

    futurePlans:[
      "Video lessons.",
      "Quizzes & assignments.",
      "Certificates.",
      "Payment integration."
    ]
  }
];



export default function FeaturedProjects(){

return(

<section className="
py-28
bg-white
dark:bg-gray-950
text-gray-900
dark:text-white
transition
duration-500
">


{/* HEADER */}

<div className="text-center mb-16">

<div className="
inline-block
px-4
py-2
rounded-full
border
border-gray-300
dark:border-gray-700
text-sm
">
Featured Work
</div>


<h2 className="
text-4xl
md:text-5xl
font-black
mt-5
">

My <span className="text-blue-500">
Projects
</span>

</h2>


<p className="
text-gray-500
dark:text-gray-400
mt-4
max-w-2xl
mx-auto
">

A selection of projects that showcase my skills in full-stack development,
UI/UX design, and performance optimization.

</p>


</div>




{/* CARDS */}

<div className="
max-w-7xl
mx-auto
px-5
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
">


{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5,
delay:index*0.1
}}


className="
group
relative
rounded-3xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-gray-900
shadow-lg
dark:shadow-black/40
overflow-hidden
"

>


{/* IMAGE */}

<div className="
h-52
overflow-hidden
">

<img

src={project.image}

alt={project.title}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

/>

</div>




{/* CONTENT */}

<div className="p-6">


<h3 className="
text-xl
font-bold
group-hover:text-blue-500
transition
">

{project.title}

</h3>



<p className="
text-sm
text-gray-500
dark:text-gray-400
mt-2
">

{project.shortDescription}

</p>




<div className="
flex
flex-wrap
gap-2
mt-4
">


{
project.tech.map((tech)=>(

<span

key={tech}

className="
text-xs
px-3
py-1
rounded-full
border
border-gray-300
dark:border-gray-700
"

>

{tech}

</span>

))
}


</div>



{/* BUTTON */}

<div className="mt-7">

<FeaturedProjectModal project={project}/>

</div>


</div>





</motion.div>


))
}



</div>





<div className="text-center mt-14">


<Link

href="/projects"

className="
px-6
py-3
rounded-xl
border
border-gray-300
dark:border-gray-700
hover:bg-gray-100
dark:hover:bg-gray-800
transition
inline-block
"

>

View All Projects

</Link>


</div>



</section>

)

}