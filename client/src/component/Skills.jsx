import React from 'react'

const Skills = () => {
    const skillSets= ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Tailwind CSS','ES6+', 'DOM Manipulation', 'Ajax', 'Node Js', 'Express Js', 'MongoDB', 'Redux', 'React Hooks', 'Git', 'Github', 'NPM',  'JWT', 'OAuth', 'PHP', 'Wordpress', 'Shopify', 'Responsive Design', 'API Development', 'RESTful APIs', 'Web Performance Optimization', 'Unit Testing' ]
  return (
    <div className='py-16 px-4 bg-secondary'>
        <div className="w-full  md:w-3/4 mx-auto flex justify-center">
            <div className='text-center'>
                <h2 className=" text-4xl text-center w-fit font-bold mb-8 text-primary title_bfr_efc relative pl-14">Skills</h2>
                <div className='flex gap-4 flex-wrap justify-center w-full lg:w-4/5 mx-auto'>
                    {
                        skillSets.map((skill)=>(
                            <p className=' border-2 px-5 py-3 border-primary rounded-md bg-slate-200 transition duration-300 ease-in-out transform hover:scale-105 font-medium'>{skill}</p>
                        ))
                    }
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Skills