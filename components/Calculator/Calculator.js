import React, { useState } from "react";
import BasicScreen from "../BasicScreen/BasicScreen";
import { calculatorButtons } from "../BasicScreen/buttons";

export default function Calculator({ navigation }) {
  const [display, setDisplay] = useState("");

  const showDisplay = (text) => (text === "" ? text.replace("", "0") : text);

  const click = (button) => {
    switch (button) {
      case "<":
        // need fix
        setDisplay((prev) => prev.slice(0, prev.length - 1) || "");
        break;
      case "C":
        setDisplay("");
        break;
      case "=":
        setDisplay(Function("return " + display));
        break;
      default:
        setDisplay((prev) => `${prev}${button}`);
        break;
    }
  };
  return (
    <BasicScreen 
    calculator={true}
    display={showDisplay(display)}
    navigation={navigation}
    click={click}
    buttons={calculatorButtons}
    />
  );
}
