import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BasicScreen({
  calculator,
  display,
  navigation,
  select,
  valuefrom,
  setValueFrom,
  valueTo,
  setValueTo,
  result,
  amount,
  loader,
  click,
  buttons,
}) {
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [optionFrom, setOptionFrom] = useState(select);
  const [optionTo, setOptionTo] = useState(select);

  return (
    <View style={styles.container}>
      {calculator ? (
        <>
          <View style={styles.boxCurrency}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Currency")}
              activeOpacity={0.3}
              style={styles.buttonCurrency}
            >
              <MaterialCommunityIcons
                name="currency-usd"
                size={40}
                color="#1E90FF"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.display}>{display}</Text>
        </>
      ) : (
        <>
          <View style={styles.dropDownFrom}>
            <DropDownPicker
              open={openFrom}
              value={valuefrom}
              items={optionFrom}
              setOpen={setOpenFrom}
              setValue={setValueFrom}
              setItems={setOptionFrom}
              theme="DARK"
              selectedItemContainerStyle={{
                backgroundColor: "#1E90FF",
              }}
            />
          </View>
          <Text style={styles.textSize}>{`From ${amount} ${
            amount && valuefrom
          }`}</Text>
          <View style={styles.dropDownTo}>
            <DropDownPicker
              open={openTo}
              value={valueTo}
              items={optionTo}
              setOpen={setOpenTo}
              setValue={setValueTo}
              setItems={setOptionTo}
              theme="DARK"
              selectedItemContainerStyle={{
                backgroundColor: "#1E90FF",
              }}
            />
          </View>
          <>
            {loader ? (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color="#1E90FF" />
              </View>
            ) : (
              <Text style={styles.textSize}>{`To ${
                result && Number(result.toFixed(2))
              } ${valueTo || ""}`}</Text>
            )}
          </>
        </>
      )}
      <FlatList
        data={buttons}
        renderItem={({ item }) => (
          <View style={styles.buttonsBox}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => click(item.name)}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.contentContainer}
        numColumns={4}
        horizontal={false}
      />
    </View>
  );
}
