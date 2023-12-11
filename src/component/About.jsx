const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h2 className="text-5xl mb-5">What I Do</h2>
          <div className="">
            <ul className=" list-none">
              <p className="font-medium text-xl mb-5">As a Fullstack Developer, I specialize in:</p>
              <li className="text-2xl leading-7 mb-5">
                <strong>Full-Stack Development:</strong> Proficient in both front-end and back-end technologies, ensuring end-to-end functionality.
              </li>
              <li className="text-2xl leading-7 mb-5">
                <strong>Web Application Development:</strong> Building responsive and intuitive web applications using the latest frameworks like React.
              </li>
              <li className="text-2xl leading-7 mb-5">
                <strong>Database Design and Optimization:</strong> Designing efficient databases and ensuring optimal performance through normalization and indexing.
              </li>
              <li className="text-2xl leading-7 mb-5">
                <strong>API Development:</strong> Creating RESTful APIs to facilitate seamless communication between different components of a software system.
              </li>
              <li className="text-2xl leading-7 mb-5">
                <strong>Version Control:</strong>  Git, GitHub.
              </li>
            </ul>
          </div>
        </div>
        <div>
        <iframe src="https://lottie.host/embed/08211c31-2607-4e5c-84a0-61b4d7d6fe94/F9FRWRjcyF.json" className='h-[500px] w-full'></iframe>
        </div>
      </div>
    
    </div>
  )
}

export default About