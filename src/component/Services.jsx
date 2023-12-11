import Card from "./Card"
import ServiceData from "./service-data"
import skillBanner from '../assets/Skill-banner.jpg'

const Services = () => {
  const skillBg = {
    backgroundImage: `url(${skillBanner})`,
  }
  return (
    <div className=" bg-no-repeat bg-cover bg-center py-20 px-4" style={skillBg}>
      <h2>Skills</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {
            ServiceData.map((service, index) => {
              return (
                <div className="" key={index}>
                  <Card className="mb-4" icon={service.icon} title={service.title} desc={service.desc} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Services