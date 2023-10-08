import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.critica}>
      <Text style={[styles.title, styles.titleTypo]}>Ted Lasso</Text>
      <View style={[styles.center, styles.centerPosition]}>
        <Image
          style={[styles.posterIcon, styles.centerPosition]}
          contentFit="cover"
          source={require("./assets/poster.jpg")}
        />
        <Text
          style={[styles.description, styles.titleTypo]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus ornare tincidunt. Suspendisse egestas nibh diam, vel molestie mauris tempor a. Sed quis mollis nunc. Nulla facilisi. Nullam eget rhoncus mauris, eget ultricies urna. `}</Text>
        <Image
          style={styles.estrelas1Icon}
          contentFit="cover"
          source={require("./assets/5estrelas.png")}
        />
      </View>
      <View style={[styles.button, styles.titlePosition]}>
        <Text style={styles.buttonText}>saiba mais</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "center",
    color: "#000",
    fontFamily: "SF Pro",
    position: "absolute",
  },
  titlePosition: {
    left: "50%",
    top: "50%",
  },
  centerPosition: {
    width: 291,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: -383,
    marginLeft: -69,
    fontSize: 32,
    left: "50%",
    top: "50%",
  },
  buttonText: {
    fontSize: 26,
    color: "#f1f1f1",
    textAlign: "left",
    fontFamily: "SF Pro",
  },
  button: {
    marginTop: 331,
    marginLeft: -86,
    borderRadius: 10,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 26,
    paddingVertical: 5,
    position: "absolute",
    overflow: "hidden",
  },
  posterIcon: {
    marginTop: -315,
    marginLeft: -145.5,
    height: 436,
  },
  description: {
    top: 507,
    left: 4,
    fontSize: 13,
    width: 284,
    height: 123,
  },
  estrelas1Icon: {
    top: 454,
    left: 35,
    width: 221,
    height: 35,
    position: "absolute",
  },
  center: {
    marginTop: -309,
    marginLeft: -146,
    height: 630,
  },
  critica: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default App;
