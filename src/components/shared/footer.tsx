import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pointer-events-auto mb-[2%] mx-[8%] flex items-center justify-between border border-t-0 border-white/25 bg-[#080616] px-5 py-3">
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo.svg"
          alt="Takshino Logo"
          width={18}
          height={18}
          className="object-contain"
        />
        <span className="text-[12px] font-bold tracking-widest text-white uppercase open-sans-bold">
          Takshino
        </span>
      </div>

      <span className="text-[10px] tracking-[0.16em] text-white uppercase open-sans-bold">
        Where craft meets the machine
      </span>

      <div className="flex items-center gap-6">
        <a
          href="/home"
          className="text-[10px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/60 open-sans-bold"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-[10px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/60 open-sans-bold"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-[10px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/60 open-sans-bold"
        >
          Contact
        </a>
        <a
          href="/sitemap"
          className="text-[10px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/60 open-sans-bold"
        >
          Sitemap
        </a>
      </div>
    </footer>
  );
}
