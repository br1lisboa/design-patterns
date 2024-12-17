import { useState } from "react";

export function useTestHook() {
  const [test, setTest] = useState("test");

  return [test, setTest] as const;
}
