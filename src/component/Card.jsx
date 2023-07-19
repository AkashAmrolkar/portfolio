const Card = ({title, desc}) => {
  return (
    <div className="card">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</p>   
        </div>
    </div>
  )
}

export default Card