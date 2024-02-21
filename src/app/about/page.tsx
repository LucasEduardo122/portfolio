'use client'
import Menu2 from "@/components/menu2";

export default function about() {
    return (
        <>
            <Menu2 />
            <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
                <h1 className="flex font-bold items-start text-4xl">Sobre mim</h1>
                <div className="flex flex-col md:flex-row align-center justify-between w-full gap-5">
                    <img alt="lucaseduardo" loading={"lazy"} width={400} height={400} decoding="async" data-nimg="1" className="rounded-md" style={{color: "transparent"}}  src="https://avatars.githubusercontent.com/u/49444699?v=4" />
                        <div className="flex flex-col gap-5 max-w-lg text-[#A1A1AA] text-base leading-relaxed">
                            <p>
                                Meu nome é Lucas, mais conhecido como <i className="text-white">Lector133</i> e tenho <span className="text-white font-bold">24</span> anos.
                            </p>
                            <p>
                                Sou um programador Full-stack com em média <span className="italic font-bold">1</span> ano de experiência com essas tecnologias: <span className="italic">HTML, CSS, JavaScript, TypeScript, Tailwind CSS, ReactJS, Next.js, Tailwind CSS, Bootstrap, Node, NestJS, Docker, PHP(Laravel), DevOps, Git e GitHub e muito mais.</span>.
                            </p>
                            <p>Ao longo da minha trajetória como instrutor técnico e programador front-end, adquiri experiência em metodologias ágeis como Scrum e Kanban. Estou disponível para contribuir com minha expertise em JS, TS, React, Next.js e Node.js para a sua equipe.</p>
                            <p>
                                Além disso, gosto de construir projetos pessoais.
                            </p>
                        </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Carreira</h2>
                    <div className="flex flex-col gap-3 max-w-md text-[#A1A1AA] text-base">
                        <h3 className="font-bold text-white mt-5">Full-stack Developer</h3>
                        <p style={{margin: "0"}}>
                            <a className="underline" href="https://actiosoftware.com/" target="_blank" title="Actio Software">Hoogli</a>
                            <span>
                                • Brasília, DF
                            </span>
                        </p>
                        <p style={{margin: "0"}}><span>nov 2021</span><span> – </span><span>out 2021</span><span> • </span><span>1 mês</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}