"use client";

import { useCallback, useContext } from "react";
import { Context } from "../CCPStateInitializer";

export function Button({ text }: { text: string }) {
  const { onClick, state, maxCount } = useContext(Context);

  const disabled = useCallback(
    function isMaxReached() {
      const disabled = state === maxCount;
      return disabled;
    },
    [state, maxCount]
  );

  return (
    <button
      className={`p-2 bg-blue-700 hover:bg-blue-900 rounded-md w-full ${
        disabled() && "cursor-not-allowed opacity-50"
      }`}
      onClick={onClick}
    >{`${text} ${state}`}</button>
  );
}
