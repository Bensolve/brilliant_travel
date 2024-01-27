import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-32 lg:py-10 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Brilliant Travel And Tour</h1>
        <p className="regular-16 mt-6 text-gray-800 xl:max-w-[520px]">
          Travel With Ease!!
        </p>

        <div className="my-9 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            108k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Call  053-122-4981"
            variant="btn_violet"
            link="whatsapp://send?phone=0531224981"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative h-full w-full min-h-[340px] min-w-[300px] bg-cover bg-no-repeat0 px-7 py-8">
          <div className="rounded-full p-4">
            <Image
              src="/hero.jpg"
              alt="background image"
              fill={true}
              className='rounded-lg lg:rounded-5xl 2xl:rounded-5xl'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
