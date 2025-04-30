"use client";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (input.trim() === "") return;
    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 flex items-center justify-between my-5 rounded-lg p-2"
    >
      <input
        type="text"
        placeholder="Procurando algum jogo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-11/12 bg-slate-200 outline-none"
      />

      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
