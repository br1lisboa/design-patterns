"use client";

import { createContext, JSX } from "react";
import { useTestHook } from "./hooks";

type ContextType = {
  title?: string | undefined;
  paragraph?: string | undefined;
  state: number | undefined;
  onClick: () => void | undefined;
  maxCount?: number | undefined;
};

export const Context = createContext({} as ContextType);
const { Provider } = Context;

type CCPStateInitializerProps = {
  children: (props: { reset: () => void }) => JSX.Element;
  contentCard?: {
    title?: string;
    paragraph?: string;
    onChange?: () => void | undefined;
    value?: number;
  };
  className?: string;
  style?: React.CSSProperties;
  initialValues?: {
    value?: number;
    maxCount?: number;
  };
};

export function CCPStateInitializer({
  children,
  contentCard,
  className,
  style,
  initialValues,
}: CCPStateInitializerProps) {
  const [state, handleClick, reset] = useTestHook({
    onChange: contentCard?.onChange,
    value: contentCard?.value,
    initialValues: initialValues,
  });

  return (
    <Provider
      value={{
        title: contentCard?.title,
        paragraph: contentCard?.paragraph,
        state: state,
        onClick: handleClick,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div
        className={`p-2 border border-white rounded-md max-w-[300px] ${className}`}
        style={style}
      >
        {children({ reset })}
      </div>
    </Provider>
  );
}
