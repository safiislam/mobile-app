import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.view}
    >
      <Text>Hello friend</Text>
      <Link style={style.link} href={'/login'}>Login</Link>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: 'blue',
    backgroundColor: 'orange',
    padding: 10
  }
})