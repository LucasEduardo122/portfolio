'use client'
import Menu2 from "@/components/menu2";
import SetupGrid from "@/components/setup";
import { data } from "@/utils/data";
import { dataSyncSetup } from "@/utils/dataSyncSetup";
import { ChangeEvent, useEffect, useState } from "react";

export default function Setup() {
    let dataSetup = data.find(item => item.name == "Setup");
    const [search, setSearch] = useState<any>([]);

    useEffect(() => {
        setSearch(dataSetup?.data)
    }, [])

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {

        let value = event.target.value;

        if (value.length > 0) {
            let filter = dataSetup?.data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()))
            setSearch(filter)
        } else {
            setSearch(dataSetup?.data)
        }
    }

    return (
        <>
            <Menu2 />
            <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
                <div className="flex flex-col gap-5 w-full px-1">
                    <h1 className="flex font-bold items-start text-4xl">Setup</h1>
                    <p className="text-base text-[#888]">Sempre recebo muitas mensagens perguntando sobre itens do meu setup e quais equipamentos utilizo em meu dia a dia. Então, resolvi listar tudo aqui em um só lugar. Conforme for atualizando meu setup, atualizarei a lista abaixo.</p>
                    <input onChange={(item) => handleSearch(item)} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Pesquise o item desejado"/>
                </div>
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 md:grid-cols-4 items-center px-5">
                    {
                        search ? search.map((item: any) => (<SetupGrid key={item.name} image={dataSyncSetup[item.image]()} name={item.name} type={item.type} url={item.url}/>)) : ''
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