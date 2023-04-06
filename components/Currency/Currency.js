import BasicScreen from "../BasicScreen/BasicScreen";
import { CURRENCY_APY_KEY } from "@env";
import { useState, useEffect } from "react";
import { currency, commonButtons } from "../BasicScreen/buttons";

export default function Currency() {
  const [request, setRequest] = useState("");
  const [valuefrom, setValueFrom] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const [amount, setAmount] = useState("");
  const [loader, setLoader] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append("apikey", CURRENCY_APY_KEY);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    if (valueTo && valuefrom && amount) {
      setLoader(true);
      fetch(
        `https://api.apilayer.com/fixer/convert?to=${valueTo}&from=${valuefrom}&amount=${amount}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setRequest(JSON.parse(result).result))
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => setLoader(false));
    }
  }, [valueTo, valuefrom, amount]);

  const click = (button) => {
    switch (button) {
      case "<":
        setAmount((prev) => prev.slice(0, prev.length - 1));
        break;
      case "C":
        setAmount("");
        setValueFrom("");
        setValueTo("");
        setRequest("");
        break;
      default:
        setAmount((prev) => `${prev}${button}`);
        break;
    }
  };

  return (
    <BasicScreen
      select={currency}
      valuefrom={valuefrom}
      setValueFrom={setValueFrom}
      valueTo={valueTo}
      setValueTo={setValueTo}
      result={request}
      amount={amount}
      loader={loader}
      click={click}
      buttons={commonButtons}
    />
  );
}
