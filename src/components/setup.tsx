import Image from "next/image"

interface SetupGridProps {
    name: string,
    url: string,
    type: string,
    image: any
}

export default function SetupGrid({name, url, image, type} : SetupGridProps) {
    return (
        <a title={name} target="_blank" className="h-full" href={url}>
            <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col hover:bg-[#121212] hover:scale-105 transform transition-all duration-500 ease-in-out items-center justify-center h-full">
                <div className="flex flex-col space-y-1.5 p-6">
                    <Image alt={name} title={name} fetchPriority="high" width={150} height={150} decoding="async" data-nimg="1" className="rounded-lg max-w-80 max-h-80 overflow-hidden bg-cover bg-center hover:scale-110 transform transition-all duration-500 ease-in-out" src={image} style={{ color: "transparent" }} /></div>
                <div className="p-6 pt-0 flex flex-col gap-2">
                    <h3 className="tracking-tight font-bold text-base text-center"><span>{name}</span></h3>
                </div>
                <div className="items-center p-6 pt-0 flex gap-2">
                    <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground p-2 rounded-lg"><span>{type}</span></div>
                </div>
            </div>
        </a>
    )
}