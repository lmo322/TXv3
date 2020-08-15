//
//  Welcome
//  Spacebook
//
//  Created by Lauren Owen.
//  Copyright © 2018 TempleX. All rights reserved.
//

import React from "react"
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class Welcome extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			logoImageTranslateY: new Animated.Value(-1),
			logoImageOpacity: new Animated.Value(-1),
			logoImageRotate: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
		this.startAnimationOne()
	}

	onSignUpPressed = () => {
	
	}

	onLogInPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Login")
	}

	startAnimationOne() {
	
		// Set animation initial values to all animated properties
		this.state.logoImageTranslateY.setValue(0)
		this.state.logoImageOpacity.setValue(0)
		this.state.logoImageRotate.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.logoImageTranslateY, {
			duration: 850,
			easing: Easing.bezier(0.29, 0.87, 1, 1),
			toValue: 1,
		}), Animated.timing(this.state.logoImageOpacity, {
			duration: 350,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		}), Animated.timing(this.state.logoImageRotate, {
			duration: 1000,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <LinearGradient
				start={{
					x: 0.31,
					y: 1.1,
				}}
				end={{
					x: 0.69,
					y: -0.1,
				}}
				locations={[0, 1]}
				colors={["rgb(247, 132, 98)", "rgb(139, 27, 140)"]}
				style={styles.welcomeViewLinearGradient}>
				<View
					style={styles.welcomeView}>
					<Animated.View
						style={[{
							opacity: this.state.logoImageOpacity.interpolate({
								inputRange: [-1, 0, 1],
								outputRange: [1, 0, 1],
							}),
							transform: [{
								translateY: this.state.logoImageTranslateY.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: [0.01, 300, 0],
								}),
							}, {
								rotate: this.state.logoImageRotate.interpolate({
									inputRange: [-1, 0, 0.7, 1],
									outputRange: ["0deg", "-45deg", "-45deg", "0deg"],
								}),
							}],
						}, styles.logoImageAnimated]}>
						<Image
							source={require("./../../assets/images/logo.png")}
							style={styles.logoImage}/>
					</Animated.View>
					<Text
						style={styles.spacebookText}>Spacebook</Text>
					<Text
						style={styles.conquerTheStarsText}>Conquer the stars{"\n"}from behind the screen.</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.viewView}>
						<TouchableOpacity
							onPress={this.onSignUpPressed}
							style={styles.signUpButton}>
							<Image
								source={require("./../../assets/images/icon-sign-up.png")}
								style={styles.signUpButtonImage}/>
							<Text
								style={styles.signUpButtonText}>SIGN UP</Text>
						</TouchableOpacity>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onLogInPressed}
							style={styles.logInButton}>
							<Image
								source={require("./../../assets/images/icon-log-in.png")}
								style={styles.logInButtonImage}/>
							<Text
								style={styles.logInButtonText}>LOG IN</Text>
						</TouchableOpacity>
					</View>
					<Text
						style={styles.supernovaStudioText}>© 2050 Supernova Studio</Text>
				</View>
			</LinearGradient>
	}
}

const styles = StyleSheet.create({
	welcomeView: {
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	welcomeViewLinearGradient: {
		flex: 1,
	},
	logoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowRadius: 25,
		shadowOpacity: 1,
		width: "100%",
		height: "100%",
	},
	logoImageAnimated: {
		width: 120,
		height: 120,
		marginTop: 100,
	},
	spacebookText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 42,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 60,
	},
	conquerTheStarsText: {
		color: "white",
		fontFamily: "Lato-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 20,
	},
	viewView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 60,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 85,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	signUpButton: {
		backgroundColor: "white",
		borderRadius: 2,
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowRadius: 25,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 148,
		height: 60,
	},
	signUpButtonText: {
		color: "rgb(217, 103, 110)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	signUpButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	logInButton: {
		backgroundColor: "white",
		borderRadius: 2,
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowRadius: 25,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 148,
		height: 60,
	},
	logInButtonText: {
		color: "rgb(218, 104, 109)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	logInButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	supernovaStudioText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Lato-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginBottom: 20,
	},
})
