import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#0000c8] text-white antialiased">
      <div className="text-center font-sans">
        
       <h1 className="mb-8 text-[32px] font-normal tracking-wide sm:text-[40px]">
          404 — File not found.
        </h1>

    <Link 
          href="/home" 
          className="text-[18px] font-normal underline decoration-1 underline-offset-4 transition-opacity hover:opacity-80"
        >
          Homepage
        </Link>

      </div>
    </main>
  )
}