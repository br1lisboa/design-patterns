"use client";

import { createContext } from "react";
// import { useTestHook } from "./hooks";

type ContextType = {
  title: string | undefined;
  paragraph: string | undefined;
};
export const Context = createContext({} as ContextType);
const { Provider } = Context;

export function CompoundStyle({
  children,
  contentCard,
  className,
  style,
}: {
  children: React.ReactNode | React.ReactNode[];
  contentCard?: {
    title: string;
    paragraph: string;
  };
  className?: string;
  style?: React.CSSProperties;
}) {
  // const [test] = useTestHook();

  return (
    <Provider
      value={{ title: contentCard?.title, paragraph: contentCard?.paragraph }}
    >
      <div
        className={`p-2 border border-white rounded-md max-w-[300px] ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
}
