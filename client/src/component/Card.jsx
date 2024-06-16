const Card = ({data}) => {
  return (
    <div className="card bg-[#161922] p-5 mb-5 hover:bg-secondary hover:shadow-xl">
        <p className="text-white mb-4">{data?.date}</p>
        <div className="flex gap-4 items-center mb-4">
          {
            data?.img && (
              <img src={`${data?.img}`} height='40' width='40' alt="logo" />
            )
          }
          <h4 className="text-primary font-bold text-xl">{data?.title}</h4>
        </div>
        {
          data?.content && (
            <div className="mb-4 text-white">{data.content}</div>
          )
        }
        <div className=" font-semibold text-white">{data.position}</div>
    </div>
  ) 
}

export default Card