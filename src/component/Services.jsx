import Card from "./Card"
import ServiceData from "./service-data"

const Services = () => {
  return (
    <div>
    {
      ServiceData.map((service, index)=>{
        return(
          <Card className="mb-4" title={service.title} key={index} desc={service.desc}/>
          
        )
      })
    }
    </div>
  )
}

export default Services