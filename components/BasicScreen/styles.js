import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#708090",
    padding: 10,
  },
  button: {
    width: 80,
    margin: 3,
    backgroundColor: "#1E90FF",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonsBox: {
    marginLeft: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dropDownFrom: {
    zIndex: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  dropDownTo: {
    zIndex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  textSize: {
    fontSize: 30,
  },
  loader: {
    flex: 0.2,
    justifyContent: "center",
  },
  boxCurrency: {
    alignItems: "flex-end",
  },
  buttonCurrency: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 40,
  },
});
