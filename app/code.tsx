import { Text, View } from "react-native"

export default function Code() {
	return (
		<View
			style={{
				alignItems: "center",
				flex: 1,
				justifyContent: "center",
			}}
		>
			<Text testID="code-text">Edit app/index.tsx to edit this screen.</Text>
		</View>
	)
}
