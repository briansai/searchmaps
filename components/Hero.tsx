import { Login } from '@/components';

const Hero = () => {
  return (
    <div className="hero w-full h-screen">
      <div className="flex hero_md hero_lg">
        <div className="hero-text w-[50%] mt-14 min-w-[400px]">
          <div className="font-bold text-5xl">SearchMaps</div>
          <div className="text-xl pt-5 lg:mb-6">
            Take control of your locations and search through them seamlessly.
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Hero;
