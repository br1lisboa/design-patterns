import { useState } from "react";

type UseTestHookProps = {
  onChange?: () => void;
  value?: number;
  initialValues?: {
    value?: number;
    maxCount?: number;
  };
};

export function useTestHook({
  onChange,
  value = 0,
  initialValues,
}: UseTestHookProps) {
  const [number, setNumber] = useState<number>(initialValues?.value || value);

  function handleIncrement() {
    if (number === initialValues?.maxCount) return;

    setNumber((prev) => prev + 1);

    if (onChange) {
      onChange();
    }
  }

  function resetValue() {
    setNumber(initialValues?.value || value);
  }

  return [number, handleIncrement, resetValue] as const;
}
