//
//  Advertisement
//  Spacebook
//
//  Created by Lauren Owen.
//  Copyright © 2018 TempleX. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"


export default class Advertisement extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onAdvertisementPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onAdvertisementPress}>
				<View
					navigation={this.props.navigation}
					style={styles.advertisement}>
					<View
						style={styles.bgView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 42,
							top: 30,
							height: 93,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/bg-event-temp.png")}
							style={styles.bgEventTempImage}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 65,
								marginLeft: 15,
								marginTop: 13,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.sprayAndPrayText}>Spray and Pray</Text>
							<Text
								style={styles.hullTattoosANewText}>Hull tattoos? A new trend to follow in 2050</Text>
							<Text
								style={styles.sponsoredContentText}>Sponsored content</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	advertisement: {
		backgroundColor: "transparent",
		width: "100%",
		height: 123,
	},
	bgView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 30,
		bottom: 0,
	},
	bgEventTempImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 93,
		height: 93,
	},
	sprayAndPrayText: {
		backgroundColor: "transparent",
		color: "rgb(217, 103, 110)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	hullTattoosANewText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "stretch",
		marginTop: 5,
	},
	sponsoredContentText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 10,
	},
})
