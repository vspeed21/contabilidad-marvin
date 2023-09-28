import { IService } from "../shared/interfaces"
import { CustomImage } from '../shared/index';

interface Props {
  service: IService
}

function Service({ service }: Props) {
  return (
    <div key={service.title} className="sm:w-[30%] border rounded-md">
      <CustomImage imageName={service.imageName} type={service.imageType} className="w-full md:h-44 lg:h-48" />
      <div className="py-1 px-2">
        <h3 className="text-center text-xl font-bold pt-2 pb-4">{service.title}</h3>
        <p className="mb-4 text-center md:text-start">{service.caption}</p>
      </div>
    </div>
  )
}

export default Service;
