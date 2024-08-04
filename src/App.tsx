import { useEffect } from "react";
import { CustomColorMenu, TextMenu, Wrapper } from "spark-admin-sdk";
import { ColorMenu } from "spark-admin-sdk";

function App() {
  useEffect(() => {
    console.log(window.getSelection());
  });

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
    </>
  );
}

export default App;
