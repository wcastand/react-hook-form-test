/// <reference types="expo-router/types/expect" />

import RootLayout from "@/app/_layout"
import Code from "@/app/code"
import Welcome from "@/app/index"
import SignIn from "@/app/sign-in"
import { it } from "@jest/globals"
import { cleanup, render, renderRouter, screen, userEvent } from "expo-router/testing-library"
import { Text } from "react-native"

// jest.useFakeTimers()

afterAll(cleanup)

describe("App Navigation", () => {
	it("Text renders correctly", () => {
		render(<Text>Welcome !</Text>)
		expect(screen.getByText("Welcome !")).toBeTruthy()
	})
	it("my-test", async () => {
		renderRouter({
			_layout: jest.fn(() => <RootLayout />),
			code: jest.fn(() => <Code />),
			index: jest.fn(() => <Welcome />),
			"sign-in": jest.fn(() => <SignIn />),
		})

		const user = userEvent.setup()
		const signIn = screen.getByTestId("sign-in-button")
		expect(signIn).toBeTruthy()
		await user.press(signIn)
		expect(screen).toHavePathname("/sign-in")
		expect(screen.getByTestId("email-input")).toBeOnTheScreen()
		await user.type(screen.getByTestId("email-input"), "demo@green-got.com")
		const signinBtn = screen.getByTestId("submit-button")
		await user.press(signinBtn)

		expect(screen).toHavePathname("/code")
	})
})
