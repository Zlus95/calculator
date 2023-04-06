import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./Calculator/Calculator";
import Currency from "./Currency/Currency";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            headerStyle: {
              backgroundColor: "#1E90FF",
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="Currency"
          component={Currency}
          options={{
            headerStyle: {
              backgroundColor: "#1E90FF",
            },
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
