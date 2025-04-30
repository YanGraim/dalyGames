import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

interface GameCardProps {
  data: GameProps;
}

export function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            src={data.image_url}
            alt={data.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <p className="text-sm font-bold px-2 text-black text-ellipsis truncate">
            {data.title}
          </p>
          <BiRightArrowCircle size={20} color="#000" />
        </div>
      </section>
    </Link>
  );
}
