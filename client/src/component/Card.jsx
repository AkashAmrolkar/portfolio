const Card = ({icon, title, desc}) => {
  return (
    <div className="card">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center gap-4">
          <img src={icon} width='48' height='48' alt={title} />  
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">{desc}</p>   
        </div>
    </div>
  ) 
}

export default Card