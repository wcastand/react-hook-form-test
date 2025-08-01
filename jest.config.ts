import type { Config } from "jest"

const config: Config = {
	collectCoverage: false,

	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	preset: "jest-expo",
	// The navigation test need to have a modified test environment to work properly
	setupFiles: ["./jest.setup.js"],
	transformIgnorePatterns: [
		"node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|moti|@datadog)",
	],
	// Example below of running a setup after the setupFiles finished creating the test environment
	// setupFilesAfterEnv:["@testing-library/jest-native/extended-expect"],
}
export default config
