import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
   <section
     id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
   >

      <div className="absolute inset-0">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        <div className="absolute right-[-180px] top-[-180px] h-[700px] w-[700px] rounded-full bg-[#C8A24A]/10 blur-[160px]" />

        <div className="absolute left-[-220px] bottom-[-220px] h-[600px] w-[600px] rounded-full bg-[#C8A24A]/5 blur-[180px]" />

      </div>

      <div className="container relative z-10 grid min-h-screen items-center gap-20 py-24 lg:grid-cols-2">

        <HeroContent />

        <HeroVisual />

      </div>

    </section>
  );
}