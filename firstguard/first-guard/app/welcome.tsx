import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>How would you like to get started?</Text>
        </View>

        {/* Community Member Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/community")}
        >
          <Image
            source={require("@/assets/images/user-iconly-pro.png")}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Community Member</Text>
          <Text style={styles.cardText}>
            Stay informed, report incidents, and access safety resources.
          </Text>
        </TouchableOpacity>

        {/* Law Enforcement Officer Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/law-enforcement")}
        >
          <Image
            source={require("@/assets/images/Group.png")}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Law Enforcement Officer</Text>
          <Text style={styles.cardText}>
            Access reports and assist communities in need.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  frame: {
    width: 280,
    height: 565,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 250,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    height: 200,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10, // Space between icon and text
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    maxWidth: 200,
  },
});
