import Image from "next/image"
import Link from "next/link"

interface Icasa {
    casa: {
        link: any,
        endereco: String,
        valor: String,
        descricao: String,
        capa: any,
        mapa: any
    }
}

export default function Card({ casa }: Icasa) {
    return(
        <div className="bg-gray-400/10 rounded p-2">
            <Link href={casa.link} target="_blank">
                <div className="relative">
                    <Image src={casa.capa} alt={''} className="w-full h-60"/>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-500/80">
                        <h3 className="font-bold">{casa.valor}</h3>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold mb-3">{casa.endereco}</h1>
                    <p className="text-gray-400 font-semibold text-sm">{casa.descricao}</p>
                </div>
            </Link>
            <div className="mt-5 mb-2 text-center">
                <Link href={casa.mapa} target="_blank" className="bg-blue-500 px-5 py-2 rounded">VER MAPA</Link>
            </div>
        </div>
    )
}