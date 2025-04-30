import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";
import next from "next";

async function getData(title: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const game: GameProps[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="text-xl text-black font-bold my-8">
          Veja o que encontramos na nossa base:
        </h1>
        {game && game.length > 0 ? (
          <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {game.map((item) => (
              <GameCard key={item.id} data={item} />
            ))}
          </section>
        ) : (
          <span className="font-medium text-xl text-black">
            Nenhum jogo encontrado...
          </span>
        )}
      </Container>
    </main>
  );
}
