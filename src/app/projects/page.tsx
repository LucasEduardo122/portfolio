'use client'
import Menu2 from "@/components/menu2";
import ProjectsGrid from "@/components/projects";
import { data } from "@/utils/data";
import { ChangeEvent, useEffect, useState } from "react";

export default function Projects() {
    let dataProjects = data.find(item => item.name == "Projetos");
    const [search, setSearch] = useState<any>([]);

    useEffect(() => {
        setSearch(dataProjects?.data)
    }, [])

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {

        let value = event.target.value;

        if (value.length > 0) {
            let filter = dataProjects?.data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()))
            setSearch(filter)
        } else {
            setSearch(dataProjects?.data)
        }
    }

    return (
        <>
            <Menu2 />
            <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
                <div className="flex flex-col gap-5 w-full px-1">
                    <h1 className="flex font-bold items-start text-4xl">Projetos</h1>
                    <p className="text-base text-[#888]">
                        Essa página lista os <span className="text-white">{dataProjects?.data.length}</span> principais projetos que venho desenvolvendo durante a minha jornada como programador. Confira outros projetos <a href="https://github.com/LucasEduardo122" target="_blank" className="underline">em meu Github</a>
                    </p>
                    <input onChange={(item) => handleSearch(item)} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Pesquise o projeto desejado" />
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5 ">
                    {
                        search.length != 0 ? search.map((item: any) => {
                            return (
                                <ProjectsGrid key={item.name} name={item.name} url={item.url} image={item.image} />
                            )
                        }) : ''
                    }
                </div>
                {
                    search.length == 0 ? <div className="text-center ">
                    <span className="uppercase font-bold text-lg">Opps! Nada Aqui!</span>
                </div> : ''
                }
            </div>
        </>
    )
}