import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native"

function Welcome() {
	const router = useRouter()
	return (
		<View
			style={{
				alignItems: "center",
				flex: 1,
				justifyContent: "center",
			}}
		>
			<Text>Edit app/Welcome.tsx to edit this screen.</Text>
			<Button onPress={() => router.push("/sign-in")} testID="sign-in-button" title="Sign In" />
		</View>
	)
}

export default Welcome
