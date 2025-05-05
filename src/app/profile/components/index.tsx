"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);
    if (input.trim() !== "") {
      setGameName(input);
    }
    setInput("");
  }

  return (
    <div className="w-full bg-gray-900 text-white p-4 h-44 rounded-lg flex flex-col justify-between">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full h-8 bg-white text-black outline-none px-2 rounded-md"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="cursor-pointer" onClick={handleButton}>
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all cursor-pointer"
          onClick={handleButton}
        >
          <FiEdit size={24} color="#fff" />
        </button>
      )}

      {gameName && (
        <div>
          <span className="text-white">Jogo favorito:</span>
          <p className="font-bold text-white">{gameName}</p>
        </div>
      )}

      {!gameName && <p className="font-bold text-white">Adicionar jogo</p>}
    </div>
  );
}
