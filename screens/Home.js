import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from "react-native";


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/GTACHEATSBG.png')}
                    style={styles.backgroundImage}>
                    <TouchableOpacity
                        style={styles.routeCardGTA3}
                        onPress={() => this.props.navigation.navigate("GTA3")}
                    >
                        <Text style={styles.routeText}>GTA 3</Text>
                        <Image source={require("../assets/GTA3LOGO.png")} style={styles.IconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.routeCardGTAVC}
                        onPress={() => this.props.navigation.navigate("GTAVC")}
                    >
                        <Text style={styles.routeText}>GTA VC</Text>
                        <Image source={require("../assets/GTAVCLOGO.png")} style={styles.IconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.routeCardGTASA}
                        onPress={() => this.props.navigation.navigate("GTASA")}
                    >
                        <Text style={styles.routeText}>GTA SA</Text>
                        <Image source={require("../assets/GTASALOGO.png")} style={styles.IconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
        paddingLeft: 30
    },
    routeCardGTA3: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        borderRadius: 10,
        backgroundColor: '#FFA500',
        borderWidth: 3,
    },
    routeCardGTAVC: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        borderRadius: 10,
        backgroundColor: '#FF00FF',
        borderWidth: 3,
    },
    routeCardGTASA: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        borderRadius: 10,
        backgroundColor: '#32CD32',
        borderWidth: 3,
    },
    IconImage: {
        position: 'absolute',
        height: 60,
        width: 60,
        resizeMode: 'contain',
        right: 20,
        top: 5,
        borderRadius: 10,
    }

})