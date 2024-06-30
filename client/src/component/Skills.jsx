import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiNodedotjs, SiNpm, SiExpress, SiMongodb, SiPhp, SiRedux, SiFirebase, SiSass, SiGithub, SiVercel, SiNetlify, SiJquery, SiShopify, SiVite, SiReactrouter, SiWordpress } from "react-icons/si";

const Skills = () => {
    const skillSets = [
        {
            name: 'HTML',
            icon: <SiHtml5 className="w-8 h-8 text-primary" />
        },
        {
            name: 'CSS',
            icon: <SiCss3 className="w-8 h-8 text-primary" />
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript className="w-8 h-8 text-primary" />
        },
        {
            name: 'jQuery',
            icon: <SiJquery className="w-8 h-8 text-primary" />
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap className="w-8 h-8 text-primary" />
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss className="w-8 h-8 text-primary" />
        },
        {
            name: 'React',
            icon: <SiReact className="w-8 h-8 text-primary" />
        },
        {
            name: 'Redux',
            icon: <SiRedux className="w-8 h-8 text-primary" />
        },
        {
            name: 'Node.Js',
            icon: <SiNodedotjs className="w-8 h-8 text-primary" />
        },
        {
            name: 'NPM',
            icon: <SiNpm className="w-8 h-8 text-primary" />
        },
        {
            name: 'Express Js',
            icon: <SiExpress className="w-8 h-8 text-primary" />
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb className="w-8 h-8 text-primary" />
        },
        {
            name: 'Firebase',
            icon: <SiFirebase className="w-8 h-8 text-primary" />
        },
        {
            name: 'Sass',
            icon: <SiSass className="w-8 h-8 text-primary" />
        },
        {
            name: 'PHP',
            icon: <SiPhp className="w-8 h-8 text-primary" />
        },
        {
            name: 'Wordpress',
            icon: <SiWordpress className="w-8 h-8 text-primary" />
        },
        {
            name: 'Shopify',
            icon: <SiShopify className="w-8 h-8 text-primary" />
        },
        {
            name: 'GitHub',
            icon: <SiGithub className="w-8 h-8 text-primary" />
        },
        {
            name: 'React Router',
            icon: <SiReactrouter className="w-8 h-8 text-primary" />
        },
        {
            name: 'Vite',
            icon: <SiVite className="w-8 h-8 text-primary" />
        },
        {
            name: 'Vercel',
            icon: <SiVercel className="w-8 h-8 text-primary" />
        },
        {
            name: 'Netlify',
            icon: <SiNetlify className="w-8 h-8 text-primary" />
        },
    ]

    //const skillSets= ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Tailwind CSS','ES6+', 'DOM Manipulation', 'Ajax', 'Node Js', 'Express Js', 'MongoDB', 'Redux', 'React Hooks', 'Git', 'Github', 'NPM',  'JWT', 'OAuth', 'PHP', 'Wordpress', 'Shopify', 'Responsive Design', 'API Development', 'RESTful APIs', 'Web Performance Optimization', 'Unit Testing' ]
  return (
    <div className='py-16 px-4 bg-secondary' id='skills'>
        <div className="w-full  md:w-3/4 mx-auto">
            <div className='flex justify-center'>
                <h2 className=" text-4xl text-center w-fit font-bold mb-8 text-primary title_bfr_efc relative pl-14">My Skills</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-8 gap-4'>
                {
                    skillSets.map((skill)=>(
                        <div className=' col-span-1 px-8 py-4 rounded-md bg-[#161922]  transition duration-300 ease-in-out transform hover:scale-105 flex justify-center flex-col items-center'> 
                            {skill.icon}
                            <p className='text-white font-medium mt-3 text-center'>{skill.name}</p>
                        </div>
                    ))
                }
            </div>       
        </div>
    </div>
  )
}

export default Skills