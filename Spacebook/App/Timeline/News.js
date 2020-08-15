//
//  News
//  Spacebook
//
//  Created by Lauren Owen.
//  Copyright © 2018 TempleX. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"


export default class News extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onNewsPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onNewsPress}>
				<View
					navigation={this.props.navigation}
					style={styles.news}>
					<View
						style={styles.bgWhiteView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 80,
							bottom: 0,
						}}>
						<Image
							source={require("./../../assets/images/bg-news-temp-2.png")}
							style={styles.bgNewsTempImage}/>
						<Text
							style={styles.melonHuskLaunchesText}>Melon Husk launches the first car that can travel a galaxy on a single tank of gas.</Text>
						<View
							style={styles.viewTwoView}>
							<Image
								source={require("./../../assets/images/icon-like.png")}
								style={styles.iconLikeImage}/>
							<Text
								style={styles.spacewoman185kLiText}>Spacewoman & 185k like this</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/icon-comment.png")}
								style={styles.iconCommentImage}/>
							<Text
								style={styles.kCommentsText}>21k comments</Text>
						</View>
					</View>
					<View
						style={styles.viewView}>
						<Image
							source={require("./../../assets/images/icon-avatar.png")}
							style={styles.iconAvatarImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 83,
								height: 32,
								marginLeft: 8,
								marginTop: 25,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.spacecrunchText}>SpaceCrunch</Text>
							<Text
								style={styles.today145PmText}>Today, 1:45 PM</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	news: {
		backgroundColor: "transparent",
		width: "100%",
		height: 419,
	},
	bgWhiteView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 30,
		bottom: 0,
	},
	bgNewsTempImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		width: null,
		height: 200,
	},
	melonHuskLaunchesText: {
		backgroundColor: "transparent",
		color: "rgb(7, 7, 7)",
		fontFamily: "Lato-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		flex: 1,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 18,
		marginBottom: 22,
	},
	viewTwoView: {
		backgroundColor: "rgb(250, 250, 250)",
		height: 59,
		flexDirection: "row",
		alignItems: "center",
	},
	iconLikeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 19,
		height: 19,
		marginLeft: 20,
	},
	spacewoman185kLiText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 5,
	},
	iconCommentImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 19,
		height: 19,
		marginRight: 5,
	},
	kCommentsText: {
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.4,
		marginRight: 20,
	},
	viewView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 9,
		right: 10,
		top: 14,
		height: 82,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	iconAvatarImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 82,
		height: 82,
	},
	spacecrunchText: {
		backgroundColor: "transparent",
		color: "rgb(15, 15, 15)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	today145PmText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
})
