import { FiEdit } from "react-icons/fi";

export function FavoriteCard() {
  return (
    <div className="w-full bg-gray-900 text-white p-4 h-44 rounded-lg flex flex-col justify-between">
      <button className="self-start hover:scale-110 duration-200 transition-all cursor-pointer">
        <FiEdit size={24} color="#fff" />
      </button>
      <p className="font-bold text-white">Adicionar jogo</p>
    </div>
  );
}
