import { useState, useEffect } from "react";
import {
  CustomColorMenu,
  TextMenu,
  Wrapper,
  LinkMenu,
  BlockEditMenu,
  IconLinkMenu,
  ButtonMenu,
} from "spark-admin-sdk";
import { ColorMenu } from "spark-admin-sdk";

interface Position {
  x: number;
  y: number;
}

function App() {
  const [cursorPosition, setCursorPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    null
  );

  const handleSelect = (id: string) => {
    console.log("Element selected:", id);
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setCursorPosition({
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      });
      setSelectedElementId(id);
    }
  };

  useEffect(() => {
    console.log("selectedElementId:", selectedElementId);
    console.log("cursorPosition:", cursorPosition);
  }, [selectedElementId, cursorPosition]);

  const section = [
    {
      name: "Section1",
      anchor: "#anchor1",
    },
    {
      name: "Section2",
      anchor: "#anchor2",
    },
  ];

  const page = [
    {
      url: "http://localhost:5173/",
      name: "test-sdk",
    },
    {
      url: "http://localhost:5173/",
      name: "test-sdk",
    },
  ];

  return (
    <>
      <Wrapper id="LOL">
        <h1
          className="heading"
          contentEditable
          onSelect={() => handleSelect("LOL")}
        >
          Hello World From Spark Studio
        </h1>
      </Wrapper>
      <Wrapper id="LOL2">
        <h2
          className="heading"
          contentEditable
          onSelect={() => handleSelect("LOL2")}
        >
          Second Heading Is Here
        </h2>
      </Wrapper>
      {selectedElementId && <TextMenu position={cursorPosition} />}
      {selectedElementId && <ColorMenu position={cursorPosition} />}
      {selectedElementId && <CustomColorMenu position={cursorPosition} />}
      {selectedElementId && (
        <LinkMenu
          sectionOptions={section}
          pageOptions={page}
          onChange={(value: string) => console.log(value)}
          position={cursorPosition}
        />
      )}
      {selectedElementId && (
        <IconLinkMenu
          onClick={() => console.log("works")}
          position={cursorPosition}
        />
      )}
      {selectedElementId && (
        <BlockEditMenu
          onClick={() => console.log("works")}
          isLoading={false}
          position={cursorPosition}
        />
      )}
      {selectedElementId && (
        <ButtonMenu
          onClick={() => console.log("works")}
          position={cursorPosition}
        />
      )}
    </>
  );
}

export default App;
