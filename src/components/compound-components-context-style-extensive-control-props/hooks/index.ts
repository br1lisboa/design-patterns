import { useState } from "react";

type useTestHookProps = {
  onChange?: () => void;
  value?: number;
};

export function useTestHook({ onChange, value }: useTestHookProps) {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber((prev) => prev + 1);

    if (onChange) {
      onChange();
    }
  }

  const state = value ?? number;

  return [state, handleIncrement] as const;
}
