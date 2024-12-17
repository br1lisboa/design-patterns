"use client";

import { useContext } from "react";
import { Context } from "../CCPStateInitializer";

export function Paragraph({
  paragraph,
  className,
  style,
}: {
  paragraph?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { paragraph: paragraphContext } = useContext(Context);

  const cardParagraph = paragraph || paragraphContext;

  return (
    <p className={`${className}`} style={style}>
      {cardParagraph}
    </p>
  );
}
