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
  const data = await getId(id);

  if (!data) {
    redirect("/");
  }
  return (
    <div>
      <h1>Teste: {id}</h1>
    </div>
  );
}
