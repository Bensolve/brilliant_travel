import Button from "./Button";
import Header from './Header'

interface DestinationProps {
  backgroundImage: string;
  title: string;
  description: string;
  buttonLink: string;
  
}

const DestinationSite = ({ backgroundImage, title, description, buttonLink }: DestinationProps) => {
  return (
    <div className={`relative h-full w-full min-w-[200px] group ${backgroundImage} bg-cover bg-no-repeat rounded-lg lg:rounded-5xl 2xl:rounded-5xl overflow-hidden`}>
       <div className="p-6 lg:px-20 lg:py-16 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h4 className=" regular-24 font-bold text-white mb-4">{title}</h4>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
            <Button title="View Tours" type="button" variant="btn_violet" link={buttonLink} />
          </div>
        </div>
    </div>
  
 
  );
}


const Destination = () => {
  return (
    <section className="2xl:max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      
    <Header 
        prefixText="Explore Exciting" 
        headerText="Amazing Places" 
        descriptionText="Discover the most amazing places around the world." 
        />

      <div className="hide-scrollbar flex h-[240px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[300px] xl:h-[400px]">
        <DestinationSite
          backgroundImage="bg-bg-img-0"
          title="Ghana"
          description=""
          buttonLink="/destination/ghana"
         
        />

        <DestinationSite
          backgroundImage="bg-bg-img-1"
          title="Dubai"
          description="" 
          buttonLink="/destination/dubai"
        />
        <DestinationSite
          backgroundImage="bg-bg-img-2"
          title="Canada"
          description=""
          buttonLink="/destination/canada"
        />
        <DestinationSite
          backgroundImage="bg-bg-img-3"
          title="South Africa"
          description=""
          buttonLink="/destination/south_africa"
        />
        <DestinationSite
          backgroundImage="bg-bg-img-4"
          title="USA"
          description=""
          buttonLink="/destination/usa"
        />
      </div>
    </section>
  );
}

export default Destination;
