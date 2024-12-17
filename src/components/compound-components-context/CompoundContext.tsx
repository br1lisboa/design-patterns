"use client";

import { createContext } from "react";
// import { useTestHook } from "./hooks";

type ContextType = {
  title: string | undefined;
  paragraph: string | undefined;
};
export const Context = createContext({} as ContextType);
const { Provider } = Context;

export function CompoundWhitContext({
  children,
  contentCard,
}: {
  children: React.ReactNode | React.ReactNode[];
  contentCard?: {
    title: string;
    paragraph: string;
  };
}) {
  // const [test] = useTestHook();

  return (
    <Provider
      value={{ title: contentCard?.title, paragraph: contentCard?.paragraph }}
    >
      <div className="p-2 border border-white rounded-md max-w-[300px]">
        {children}
      </div>
    </Provider>
  );
}
