import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface DestinationProps {
  backgroundImage: string;
  title: string;
}

const DestinationSite = ({ backgroundImage, title }: DestinationProps) => {
  return (
    <div className={`relative h-full w-full min-w-[200px] ${backgroundImage}  bg-cover bg-no-repeat rounded-lg lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:px-20 lg:py-10 ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
          <div className="">
              <h4 className="bold-18 text-white text-center">{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Destination = () => {
  return (
    <section className="2xl:max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[240px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[300px] xl:h-[400px]">
        <DestinationSite
          backgroundImage="bg-bg-img-1"
          title="Dubai"
        />
        <DestinationSite
          backgroundImage="bg-bg-img-2"
          title="Canada"
        />
        <DestinationSite
          backgroundImage="bg-bg-img-3"
          title="South Africa"
        />
        <DestinationSite
          backgroundImage="bg-bg-img-4"
          title="USA"
        />
      </div>
    </section>
  );
}

export default Destination;
