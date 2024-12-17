"use client";

import { useContext } from "react";
import { Context } from "../CompoundContext";

export function Paragraph({ paragraph }: { paragraph?: string }) {
  const { paragraph: paragraphContext } = useContext(Context);

  const cardParagraph = paragraph || paragraphContext;

  return <p>{cardParagraph}</p>;
}
