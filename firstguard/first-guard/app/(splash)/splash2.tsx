import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Splash2() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the blue circle to expand
    Animated.timing(scaleAnim, {
      toValue: 4, // Grows 4x its original size
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      router.replace("/welcome"); // Navigate to Welcome screen after animation
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          { transform: [{ scale: scaleAnim }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: "#0057FF", // Blue color
    position: "absolute",
  },
});
