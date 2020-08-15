//
//  App.js
//  Spacebook
//
//  Created by Lauren Owen.
//  Copyright © 2018 TempleX. All rights reserved.
//

import * as Font from "expo-font"
import EventDetail from "./App/EventDetail/EventDetail"
import Login from "./App/Login/Login"
import React from "react"
import Timeline from "./App/Timeline/Timeline"
import Welcome from "./App/Welcome/Welcome"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	Welcome: {
		screen: Welcome,
	},
	Login: {
		screen: Login,
	},
}, {
	initialRouteName: "Welcome",
})

const PushRouteTwo = createStackNavigator({
	Timeline: {
		screen: Timeline,
	},
}, {
	initialRouteName: "Timeline",
})

const Untitled = createBottomTabNavigator({
	PushRouteTwo: {
		screen: PushRouteTwo,
	},
}, {
	tabBarPosition: "bottom",
	animationEnabled: true,
	tabBarOptions: {
		showIcon: true,
		activeTintColor: "rgb(139, 27, 140)",
		inactiveTintColor: "rgb(139, 27, 140)",
		indicatorStyle: {
			backgroundColor: "transparent",
		},
		style: {
			backgroundColor: "rgb(248, 248, 248)",
		},
	},
	defaultNavigationOptions: ({ navigation }) => {
	
		const { routeName } = navigation.state
		
		switch (routeName) {
			case "PushRouteTwo":
				return Timeline.tabBarItemOptions(navigation)
		}
	},
})

const PushRouteThree = createStackNavigator({
	EventDetail: {
		screen: EventDetail,
	},
}, {
	initialRouteName: "EventDetail",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
	Untitled: {
		screen: Untitled,
	},
	PushRouteThree: {
		screen: PushRouteThree,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
			"Lato-Regular": require("./assets/fonts/LatoRegular.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
