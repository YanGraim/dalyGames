import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";

async function getId(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    );
    return res.json();
  } catch (error) {
    throw new Error("Ocorreu algum erro na chamada");
  }
}

export default async function GameDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await getId(id);

  if (!data) {
    redirect("/");
  }
  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          src={data.image_url}
          alt={data.title}
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          className="object-cover w-full h-80 sm:h-96 opacity-70"
        />
      </div>
      <Container>
        <h1 className="text-2xl font-bold my-4">{data.title}</h1>
        <p>{data.description}</p>
      </Container>
    </main>
  );
}
