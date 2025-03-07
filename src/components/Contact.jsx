import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div 
      id="contact" 
      className="my-20 w-screen px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black animate-gradient-slow" />
      <div className="absolute inset-0 opacity-10 bg-[url('/img/1.jpg')] bg-cover bg-center animate-pulse-slow" />
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-float top-10 left-10" />
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-float-slow bottom-20 right-20" />
        <div className="absolute w-64 h-64 bg-cyan-500/15 rounded-full filter blur-2xl animate-float-fast top-1/2 left-1/3" />
      </div>

      <div className="relative w-full max-w-6xl bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 py-16 px-8 md:px-20 border border-white/5 z-10">
        {/* Neon accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-glow" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-glow" />

        <div className="relative flex flex-col items-center text-center">
          <p className="mb-8 text-sm md:text-base uppercase tracking-widest text-blue-400 font-medium animate-fade-in">
            Join ASTRA
          </p>

          <AnimatedTitle
            title="Forge the <br /> Future of <br /> AI in India"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 max-w-3xl animate-text-glow"
          />

          <p className="mt-8 mb-12 text-gray-200 text-lg md:text-xl max-w-2xl font-light animate-fade-in-up">
            Join Astra's elite team to revolutionize artificial intelligence and shape India's technological destiny.
          </p>

          <a
            href="https://forms.gle/your-google-form-id-here"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              title="Become a Trailblazer" 
              containerClass="mt-6 group relative"
              className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg md:text-xl
                        hover:from-blue-700 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/30
                        overflow-hidden group-hover:scale-105 transform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10">Become a Trailblazer</span>
            </Button>
          </a>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-2 h-2 bg-blue-400 rounded-full absolute animate-particle top-1/4 left-1/4" />
          <div className="w-1 h-1 bg-purple-400 rounded-full absolute animate-particle-slow top-3/4 right-1/3" />
          <div className="w-3 h-3 bg-cyan-400 rounded-full absolute animate-particle-fast bottom-1/4 left-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Contact;