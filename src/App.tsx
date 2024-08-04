import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    console.log(window.getSelection());
  });
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
          onSelect={() => console.log(window.getSelection())}
        >
          Hello World From Spark Studio
        </h1>
      </Wrapper>
      <Wrapper id="LOL2">
        <h2 className="heading" contentEditable>
          Second Headin Is Here
        </h2>
      </Wrapper>
      <TextMenu />
      <ColorMenu />
      <CustomColorMenu />
      <LinkMenu
        sectionOptions={section}
        pageOptions={page}
        onChange={(value: string) => console.log(value)}
      />
      <IconLinkMenu onClick={() => console.log("works")} />
      <BlockEditMenu onClick={() => console.log("works")} isLoading={false} />
      <ButtonMenu onClick={() => console.log("works")} />
    </>
  );
}

export default App;
