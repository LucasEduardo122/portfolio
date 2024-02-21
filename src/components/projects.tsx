import Image from "next/image";

interface ProjectsGridProps {
    name: string,
    url: string,
    image: any
}

export default function ProjectsGrid({name, url, image} : ProjectsGridProps) {
    return (
        <button className="text-center">
            <a className="h-full" target="_blank" title={name} href={url}>
                <Image src={image} alt={name} loading="lazy" width={300} height={300} decoding="async" className="w-[472px] h-[238px] rounded-md m-0 hover:scale-105 transform transition-all duration-500 ease-in-out" style={{ color: "transparent" }} />
                <h2 className="font-bold text-base md:text-lg mt-1">{name}</h2>
            </a>
        </button>
    )
}