const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center relative flex items-center justify-center text-white py-20" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Santosh&apos;s Landing Page</h1>
        <p className="text-lg md:text-xl font-light">It&apos;s great to have you here!</p>
        <button className="mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
