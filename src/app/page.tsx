'use client'
import Menu2 from "@/components/menu2";
import Image from "next/image";

import { data } from '../utils/data'
import { dataSync } from "@/utils/dataSync";

export default function Home() {
    
  return (
    <>
      <Menu2 />
      <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
      <main className="mx-auto max-w-5xl flex-col items-center justify-center px-5 py-8 xl:px-0 dark:bg-background">
        <section className="mx-auto flex max-w-5xl flex-col justify-start gap-4 overflow py-8 xl:px-0">
          <div className="flex flex-col gap-6 md:max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:leading-relaxed">Hey, I'm lucas -- Back-end Developer</h1>
            <div className="flex flex-col gap-6 md:max-w-2xl">
              <h2 className="text-lg font-medium text-[#888] "><span>Unindo design e código, sigo criando projetos únicos.</span></h2>
              <h3 className="relative flex items-center pl-5 text-sm">
                <span>
                  Coding and currently listening to
                  <a className="underline" target="_blank" title="Youtube Sounds" href="https://youtube-background-sound.vercel.app/">
                    &nbsp; lo-fi
                  </a>
                </span>
                <span className="absolute left-0 top-1/2 flex h-2 w-2 -translate-y-1/2 pl-1"><span className="absolute inline-flex h-full w-full animate-ping rounded-full pl-1 opacity-75 
                  bg-gray-500"></span><span className="relative inline-flex h-2 w-2 rounded-full pl-2 bg-gray-500"></span></span>
              </h3>
              <div className="flex flex-col w-full gap-4 md:flex-row lg:flex-row mt-2">
                <button className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 items-center gap-1 rounded-full p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                  <a title="Redes sociais" href="/mediakit"><span>Me acompanhe nas redes sociais</span></a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-up-right">
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </button>
                <a href="https://linkedin.com/in/lucas-eduardo133" target="_blank" title="Linkedin">
                  <button className="justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 flex w-full items-center gap-1 rounded-full p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                    <span>Linkedin</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-10 flex flex-col gap-5 p-1">
          <div><span className="font-bold uppercase">Últimos Drops</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
              data.map(dados => (
                <a title={dados.name} key={dados.name} href={dados.link_href}>
                  <div className="rounded-xl border bg-card text-card-foreground shadow hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-[#121212] relative">
                    <Image alt={dados.name} title={dados.name} loading="lazy" width="250" height="300" decoding="async" data-nimg="1" className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50 hover:filter hover:backdrop-blur-sm opacity-30" style={{ color: "transparent" }} sizes="100vw" src={dataSync[dados.name]()} />
                    <div className="absolute bottom-0 m-2 text-lg">
                      <p>{dados.name}</p>
                    </div>
                    <div className="absolute top-0 left-0 m-2 text-lg">
                      <button dangerouslySetInnerHTML={{ __html: dados.svg }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 w-8 h-8 p-0" title="Setup">
                        
                      </button>
                    </div>
                    <div className="absolute top-0 right-0 m-2 text-lg">{dados.data.length} {dados.count_name}</div>
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}
