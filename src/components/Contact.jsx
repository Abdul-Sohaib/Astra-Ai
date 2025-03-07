import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div 
      id="contact" 
      className="relative my-20 flex min-h-screen w-screen items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background Effects */}
      <div className="animate-gradient-slow absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black" />
      <div className="animate-pulse-slow absolute inset-0 bg-[url('/img/1.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0">
        <div className="animate-float absolute left-10 top-10 size-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="animate-float-slow absolute bottom-20 right-20 size-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="animate-float-fast absolute left-1/3 top-1/2 size-64 rounded-full bg-cyan-500/15 blur-2xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl rounded-3xl border border-white/5 bg-black/40 px-8 py-16 shadow-2xl shadow-blue-500/10 backdrop-blur-xl md:px-20">
        {/* Neon accent lines */}
        <div className="animate-glow absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        <div className="animate-glow absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        <div className="relative flex flex-col items-center text-center">
          <p className="animate-fade-in mb-8 text-sm font-medium uppercase tracking-widest text-blue-400 md:text-base">
            Join ASTRA
          </p>

          <AnimatedTitle
            title="Forge the <br /> Future of <br /> AI in India"
            className="animate-text-glow max-w-3xl bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl lg:text-8xl"
          />

          <p className="animate-fade-in-up mb-12 mt-8 max-w-2xl text-lg font-light text-gray-200 md:text-xl">
            Join Astra elite team to revolutionize artificial intelligence and shape India technological destiny.
          </p>

          <a
            href="https://forms.gle/your-google-form-id-here"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              title="Become a Trailblazer" 
              containerClass="mt-6 group relative"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 text-lg font-semibold text-white
                        shadow-lg transition-all duration-500 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/30
                        group-hover:scale-105 md:text-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              <span className="relative z-10">Become a Trailblazer</span>
            </Button>
          </a>
        </div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-particle absolute left-1/4 top-1/4 size-2 rounded-full bg-blue-400" />
          <div className="animate-particle-slow absolute right-1/3 top-3/4 size-1 rounded-full bg-purple-400" />
          <div className="animate-particle-fast absolute bottom-1/4 left-2/3 size-3 rounded-full bg-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Contact;