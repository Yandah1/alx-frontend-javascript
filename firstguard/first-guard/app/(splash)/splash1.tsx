import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Splash1() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(splash)/splash2"); // Navigate to splash2 after 2 seconds
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/firstguard-2.png")} 
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/firstguard-3.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "center", // Centers images vertically
    alignItems: "center", // Centers images horizontally
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginVertical: 10, // Adds space between images vertically
  },
});