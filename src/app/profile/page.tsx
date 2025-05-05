import { Container } from "@/components/container";
import Image from "next/image";
import user from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="relative my-8 flex flex-col gap-3 items-center justify-between sm:flex-row">
          <div className="flex flex-col gap-4 items-center text-lg sm:flex-row justify-center sm:justify-normal">
            <Image
              src={user}
              alt="imagem de perfil"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl">Nome de perfil</h1>
          </div>
          <div className="sm:absolute top-0 right-0 flex gap-3 items-center justify-center mt-2">
            <button className="bg-gray-700 px-2 py-2 rounded-lg text-white cursor-pointer">
              Configurações
            </button>
            <button className="bg-gray-700 px-2 py-2 rounded-lg cursor-pointer">
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
}
