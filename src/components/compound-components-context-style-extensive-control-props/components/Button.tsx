"use client";

import { useContext } from "react";
import { Context } from "../CompoundExtensiveProps";

export function Button({ text }: { text: string }) {
  const { onClick, number } = useContext(Context);

  return (
    <button
      className="p-2 bg-blue-700 hover:bg-blue-900 rounded-md w-full"
      onClick={onClick}
    >{`${text} ${number}`}</button>
  );
}
