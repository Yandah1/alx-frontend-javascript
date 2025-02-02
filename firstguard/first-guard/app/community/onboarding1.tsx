import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image source={require("@/assets/images/rb-2148487606-1.png")} style={styles.image} />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Report Incidents Instantly</Text>
        <Text style={styles.description}>
          Share incidents with supporting media and locations to keep your community safe.
        </Text>

        {/* Bottom Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => router.replace("/community")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/community/onboarding2")}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 0.65, // 65% of screen height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8", // Light background to match design
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 0.35, // 35% of screen height
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  skipText: {
    fontSize: 16,
    color: "#999",
  },
  nextText: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
});

