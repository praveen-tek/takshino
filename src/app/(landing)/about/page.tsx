"use client";
import GridDistortion from "@/components/background/GridDistortion";
import Footer from "@/components/shared/footer";

export default function About() {
  return (
    <main className="relative h-screen w-full overflow-hidden font-mono bg-black">

      <div className="absolute inset-0 h-full w-full z-0">
        <GridDistortion
          imageSrc="/bg.png"
          grid={6}
          mouse={0.25}
          strength={0.15}
          relaxation={0.9}
          className="h-full w-full object-cover"
        />
      </div>


      <div className="relative z-10 flex h-full w-full flex-col justify-between">
        <div className="mx-[8%] mt-[5%] flex flex-1 border border-white/25">


          <div className="flex flex-1 flex-col justify-between overflow-hidden border-r border-white/25 p-8">
            <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tighter text-white/90 instrument-serif-regular">
              <span className="block">Built from</span>
              <span className="block">first</span>
              <span className="block">principles.</span>
            </h1>
          </div>


          <div className="flex w-[38%] flex-col justify-between gap-6 px-10 py-8">
            <div className="flex flex-col gap-6">
              <p className="text-[clamp(0.75rem,1.1vw,0.95rem)] leading-relaxed tracking-wide text-white/80">
                Takshino is a precision hardware infrastructure company building
                the foundational stack for the next generation of robotics —
                actuators, thermal management systems, and motion control
                primitives.
              </p>
              <p className="text-[clamp(0.75rem,1.1vw,0.95rem)] leading-relaxed tracking-wide text-white/80">
                The name comes from Taksha, the divine craftsman of Vedic
                tradition, architect of celestial instruments. We carry that
                lineage forward. Not in mythology, but in tolerances, materials,
                and motion.
              </p>
              <p className="text-[clamp(0.75rem,1.1vw,0.95rem)] leading-relaxed tracking-wide text-white/80">
                We are a team of engineers, designers, and makers who believe in
                the power of precision. We are building the tools that will enable
                the next wave of robotic innovation, from agile humanoids to
                dexterous manipulators.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}