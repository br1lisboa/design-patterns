"use client";

import { createContext } from "react";
import { useTestHook } from "./hooks";

type ContextType = {
  title?: string | undefined;
  paragraph?: string | undefined;
  onClick: () => void | undefined;
  number: number | undefined;
};

export const Context = createContext({} as ContextType);
const { Provider } = Context;

export function CompoundExtensiveProps({
  children,
  contentCard,
  className,
  style,
}: {
  children: React.ReactNode | React.ReactNode[];
  contentCard?: {
    title?: string;
    paragraph?: string;
    onChange?: () => void | undefined;
    value?: number;
  };
  className?: string;
  style?: React.CSSProperties;
}) {
  const [state, handleClick] = useTestHook({
    onChange: contentCard?.onChange,
    value: contentCard?.value,
  });

  return (
    <Provider
      value={{
        title: contentCard?.title,
        paragraph: contentCard?.paragraph,
        onClick: handleClick,
        number: state,
      }}
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
