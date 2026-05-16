import GridDistortion from "@/components/background/GridDistortion";
import Footer from "@/components/shared/footer";


export default function Contact() {
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
        <div className="mx-[8%] mt-[5%] flex flex-1 border border-white/25">
          <div className="flex flex-1 flex-col justify-start overflow-hidden border-r border-white/25 pt-8 pr-8 pb-8 pl-8">
            <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tighter text-white/90 instrument-serif-regular">
              <span className="block">Let&apos;s</span>
              <span className="block">build</span>
              <span className="block">together.</span>
            </h1>
          </div>

          <div className="flex w-[38%] flex-col justify-start gap-8 px-10 pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">General</span>
              <a href="mailto:hello@takshino.com" className="pointer-events-auto text-[clamp(0.75rem,1.1vw,0.95rem)] tracking-wide text-white/70 transition-colors hover:text-white">
                hello@takshino.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">Partnerships & OEM</span>
              <a href="mailto:partners@takshino.com" className="pointer-events-auto text-[clamp(0.75rem,1.1vw,0.95rem)] tracking-wide text-white/70 transition-colors hover:text-white">
                partners@takshino.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">Location</span>
              <span className="text-[clamp(0.75rem,1.1vw,0.95rem)] tracking-wide text-white/70">
                Meerut, Uttar Pradesh<br />India
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">Follow</span>
              <div className="flex gap-5">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="pointer-events-auto text-[clamp(0.75rem,1.1vw,0.95rem)] tracking-wide text-white/70 transition-colors hover:text-white">
                  X / Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="pointer-events-auto text-[clamp(0.75rem,1.1vw,0.95rem)] tracking-wide text-white/70 transition-colors hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="border-t border-white/15 pt-5">
              <p className="text-[clamp(0.7rem,1vw,0.85rem)] leading-relaxed tracking-wide text-white/35">
                We are early stage. If you are building something that needs precision motion, thermal control, or hardware infrastructure — write to us.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  )
}