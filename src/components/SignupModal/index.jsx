import { useState } from "react";
import { useUser } from "../../context/UserContext";
import * as S from "./styles";

const SignupModal = () => {
	const [inputUsername, setInputUsername] = useState("");
	const { login } = useUser();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputUsername.trim()) {
			login(inputUsername.trim());
		}
	};

	return (
		<S.Overlay>
			<S.ModalContainer>
				<S.Title>Welcome to CodeLeap network!</S.Title>
				<S.Subtitle>Please enter your username</S.Subtitle>
				<form onSubmit={handleSubmit}>
					<S.Input
						type="text"
						placeholder="John Doe"
						value={inputUsername}
						onChange={(e) => setInputUsername(e.target.value)}
					/>
					<S.Button type="submit" disabled={!inputUsername.trim()}>
						ENTER
					</S.Button>
				</form>
			</S.ModalContainer>
		</S.Overlay>
	);
};

export default SignupModal;
