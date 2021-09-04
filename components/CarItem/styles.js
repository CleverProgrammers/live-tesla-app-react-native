import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "orange"
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    headerTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "white"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 12
    },
    batteryText: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold"
    },
    status: {
        alignItems: "center"
    },
    statusText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 175
    },
    controlsButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        padding: 18,
        marginLeft: 25
    }

})

export default styles;