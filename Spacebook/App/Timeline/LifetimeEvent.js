//
//  LifetimeEvent
//  Spacebook
//
//  Created by Lauren Owen.
//  Copyright © 2018 TempleX. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"


export default class LifetimeEvent extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onLifetimeEventPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onLifetimeEventPress}>
				<View
					navigation={this.props.navigation}
					style={styles.lifetimeEvent}>
					<View
						style={styles.bgView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 237,
							top: 18,
							height: 147,
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/avatarastronaut.png")}
							style={styles.avatarAstronautImage}/>
						<Text
							style={styles.plutoPostedANewLText}>Pluto posted a new life event</Text>
						<Text
							style={styles.inAComplicatedRelText}>In a complicated relationship</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	lifetimeEvent: {
		backgroundColor: "transparent",
		width: "100%",
		height: 196,
	},
	bgView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 29,
		bottom: 1,
	},
	avatarAstronautImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 94,
		height: 94,
	},
	plutoPostedANewLText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 12,
	},
	inAComplicatedRelText: {
		backgroundColor: "transparent",
		color: "rgb(47, 47, 47)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 2,
	},
})
