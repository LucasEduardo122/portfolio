'use client'
import Menu2 from "@/components/menu2";

export default function NotFound() {
    return (
        <>
            <Menu2 />
            <div className="mx-auto text-center flex flex-col max-w-5xl gap-10 overflow-hidden px-5 py-8 xl:px-0 h-full justify-center items-center w-full">
                <h2 className="text-3xl font-bold">Página não encontrada</h2>
                
                <div className="relative">
                    <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                        <span>4</span><span>0</span><span>4</span></h1>
                    <span className="absolute top-0 -ml-12 text-gray-300 font-semibold">Oops!</span>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                    <a className="flex gap-1 font-bold" href="/">Voltar para a home</a>
                </button>
            </div>
        </>
    )
}