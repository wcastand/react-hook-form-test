import { useRouter } from "expo-router"
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form"
import { Button, TextInput, View } from "react-native"

function Input() {
	const { control } = useFormContext()
	return (
		<Controller
			control={control}
			name="email"
			render={({ field: { onChange, value } }) => (
				<TextInput
					onChangeText={onChange}
					placeholder="Email"
					style={{ borderWidth: 1, padding: 10, width: "80%" }}
					testID="email-input"
					value={value}
				/>
			)}
		/>
	)
}

function SubmitButton({ onSubmit }: { onSubmit: (data: any) => void }) {
	const { handleSubmit } = useFormContext()
	return <Button onPress={handleSubmit(onSubmit)} testID="submit-button" title="submit" />
}

export default function SignIn() {
	const formFields = useForm()
	const router = useRouter()
	const onSubmit = async (data: any) => {
		console.log("Form submitted with data:", data)
		await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
		console.log("Data fetched successfully")
		router.push({ pathname: "/code" })
	}
	return (
		<View
			style={{
				alignItems: "center",
				flex: 1,
				justifyContent: "center",
			}}
		>
			<FormProvider {...formFields}>
				<Input />
				<SubmitButton onSubmit={onSubmit} />
			</FormProvider>
		</View>
	)
}
