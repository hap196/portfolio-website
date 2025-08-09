// src/components/Hero.tsx
const Hero = () => {
  return (
    <div className="text-center flex-1 flex items-center relative">
      {/* Background Names - Light White */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Top Background Name */}
        <h1 className="font-playfair text-8xl lg:text-9xl font-normal text-white/20 tracking-wide transform -translate-y-16">
          HAILEY PAN
        </h1>

        {/* Bottom Background Name */}
        <h1 className="font-playfair text-8xl lg:text-9xl font-normal text-white/20 tracking-wide transform translate-y-16">
          HAILEY PAN
        </h1>
      </div>

      {/* Main Name */}
      <h1 className="font-playfair text-8xl lg:text-9xl font-normal text-text-dark tracking-wide relative z-10">
        HAILEY PAN
      </h1>
    </div>
  );
};

export default Hero;
