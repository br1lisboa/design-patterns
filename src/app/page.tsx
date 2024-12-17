"use client";

import CompoundCard from "@/components/compound-components";
import { CompoundCardWhitContext } from "@/components/compound-components-context";
import { CompoundStyle } from "@/components/compound-components-context-style-extensive";
import { CompoundExtensiveProps } from "@/components/compound-components-context-style-extensive-control-props";
import { CCPStateInitializer } from "@/components/compound-components-state-initializer";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber((prev) => prev + 1);
  }

  return (
    <main className="max-w-[1200px] min-h-screen grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6">
      {/* CCP STATE INITIALIZER */}
      <CCPStateInitializer
        contentCard={{
          title: "CCP STATE INITIALIZER",
          paragraph:
            "Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm",
        }}
        style={{ backgroundColor: "gray" }}
        initialValues={{
          value: 5,
          maxCount: 10,
        }}
      >
        {({ reset }) => (
          <>
            <CCPStateInitializer.Title className="text-yellow-950" />
            <CCPStateInitializer.Paragraph className="text-yellow-950" />
            <button onClick={reset} className="py-2 underline">
              Reset STATE INIT
            </button>
            <CCPStateInitializer.Button text="Click" />
          </>
        )}
      </CCPStateInitializer>

      <div className="hidden sm:block" />

      {/*CCP CONTROL PROPS */}
      <CompoundExtensiveProps
        contentCard={{
          value: number,
          onChange: handleIncrement,
          title: "CCP CONTROL PROPS",
          paragraph:
            "Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm",
        }}
        style={{ backgroundColor: "gray" }}
      >
        <CompoundExtensiveProps.Title className="text-yellow-950" />
        <CompoundExtensiveProps.Paragraph className="text-yellow-950" />
        <CompoundExtensiveProps.Button text="Click" />
      </CompoundExtensiveProps>

      <CompoundExtensiveProps
        contentCard={{
          value: number,
          title: "CCP CONTROL PROPS",
          paragraph:
            "Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm",
        }}
        style={{ backgroundColor: "gray" }}
      >
        <CompoundExtensiveProps.Title className="text-yellow-950" />
        <CompoundExtensiveProps.Paragraph className="text-yellow-950" />
        <CompoundExtensiveProps.Button text="Click" />
      </CompoundExtensiveProps>

      {/* COMMON */}
      <div
        style={{}}
        className="p-2 border border-white rounded-md max-w-[300px]"
      >
        <h1 className="text-3xl">COMMON</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          voluptatem. Voluptas, quas. Necessitatibus, quas
        </p>
      </div>

      {/* COMPONENT COMPOUND */}
      <CompoundCard>
        <CompoundCard.Title title="COMPONENT COMPOUND" />
        <CompoundCard.Paragraph paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, voluptatem. Voluptas, quas. Necessitatibus, quas" />
      </CompoundCard>

      {/* COMPONENT COMPOUND  WHIT CONTEXT*/}
      <CompoundCardWhitContext
        contentCard={{
          title: "COMPONENT COMPOUND  WHIT CONTEXT",
          paragraph:
            "Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm",
        }}
      >
        <CompoundCardWhitContext.Title />
        <CompoundCardWhitContext.Paragraph />
      </CompoundCardWhitContext>

      {/* CCP EXTENSIBLE STYLES */}
      <CompoundStyle
        contentCard={{
          title: "CCP EXTENSIBLE STYLES",
          paragraph:
            "Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm",
        }}
        className="bg-gray-200"
      >
        <CompoundStyle.Title className="text-yellow-950" />
        <CompoundStyle.Paragraph className="bg-yellow-300" />
      </CompoundStyle>

      <CompoundStyle
        contentCard={{
          title: "CCP EXTENSIBLE STYLES",
          paragraph:
            "Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm Loreem tasams sdksdmm",
        }}
        style={{ backgroundColor: "red" }}
      >
        <CompoundStyle.Title className="text-yellow-950" />
        <CompoundStyle.Paragraph className="bg-yellow-300" />
      </CompoundStyle>
    </main>
  );
}
