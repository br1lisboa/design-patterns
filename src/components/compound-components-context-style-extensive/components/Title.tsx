"use client";

import { useContext } from "react";
import { Context } from "../CompoundStyle";

export function Title({
  title,
  className,
  style,
}: {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { title: titleContext } = useContext(Context);

  const cardTitle = title || titleContext;

  return (
    <h1 className={`text-3xl ${className}`} style={style}>
      {cardTitle}
    </h1>
  );
}
