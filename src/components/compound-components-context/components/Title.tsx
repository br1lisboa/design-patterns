"use client";

import { useContext } from "react";
import { Context } from "../CompoundContext";

export function Title({ title }: { title?: string }) {
  const { title: titleContext } = useContext(Context);

  const cardTitle = title || titleContext;

  return <h1 className="text-3xl">{cardTitle}</h1>;
}
