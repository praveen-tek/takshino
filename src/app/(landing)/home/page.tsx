"use client";

import GridDistortion from "@/components/background/GridDistortion";
import Footer from "@/components/shared/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden font-mono">
      <div className="absolute inset-0 h-full w-full">
        <GridDistortion
          imageSrc="/bg.png"
          grid={6}
          mouse={0.25}
          strength={0.15}
          relaxation={0.9}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full w-full flex-col">
        <div className="mx-[8%] mt-[5%] flex flex-1 border border-white/25 relative overflow-hidden">

          {/* headline */}
          <div className="flex flex-1 items-start justify-start overflow-hidden pt-8 pl-8">
            <h1 className="text-[clamp(3.8rem,9vw,9rem)] leading-[0.95] tracking-tighter text-white/90 instrument-serif-regular">
              <span className="block">Cooling the</span>
              <span className="block">New Era of</span>
              <span className="block">Robotics.</span>
            </h1>
          </div>

          {/* logo top right */}
          <div className="absolute top-6 right-6 z-10">
            <Image
              src="/logo.svg"
              alt="Takshino"
              width={48}
              height={48}
              className="object-contain opacity-80"
            />
          </div>

          {/* stacked images */}
          <div className="absolute" style={{ bottom: "52px", right: "5%", width: "480px", height: "400px" }}>

            <Image
              src="/arm.png"
              alt="Stack image 1"
              width={280}
              height={380}
              className="absolute object-cover shadow-2xl width-auto height-auto"
              style={{ transform: "rotate(-18deg)", bottom: "0px", right: "220px", zIndex: 1 }}
            />

            <Image
              src="/tweet.png"
              alt="Stack image 2"
              width={310}
              height={420}
              className="absolute object-cover shadow-2xl width-auto height-auto"
              style={{ transform: "rotate(-4deg)", bottom: "0px", right: "100px", zIndex: 3 }}
            />

            <Image
              src="/poster.png"
              alt="Stack image 3"
              width={260}
              height={352}
              className="absolute object-cover shadow-2xl width-auto height-auto"
              style={{ transform: "rotate(18deg)", bottom: "0px", right: "0px", zIndex: 2 }}
            />

          </div>

        </div>
        <Footer />
      </div>
    </main>
  );
}