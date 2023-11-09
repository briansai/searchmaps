import { Login } from '@/components';

const Hero = () => {
  return (
    <div className="hero w-full h-screen">
      <div className="flex pt-52 px-56 justify-between">
        <div className="hero-text w-2/5 mt-14">
          <div className="font-bold text-5xl">SearchMaps</div>
          <div className="text-xl pt-5">
            Take control of your locations and search through them seamlessly.
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Hero;
