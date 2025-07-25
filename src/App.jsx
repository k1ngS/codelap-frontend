import SignupModal from "./components/SignupModal";
import { UserProvider, useUser } from "./context/UserContext";
import { GlobalStyles } from "./styles/GlobalStyles";

const AppContent = () => {
	const { isLoggedIn, username, logout } = useUser();

	if (!isLoggedIn) {
		return <SignupModal />
	}

	return (
		<div>
			<h1>CodeLeap Network</h1>
			<p>Bem-vindo, {username}</p>
			<button type="button" onClick={logout}>Logout</button>
			<p>MainScreen será implementado em breve...</p>
		</div>
	)
}

function App() {
	return (
		<UserProvider>
			<GlobalStyles />
			<AppContent />
		</UserProvider>
	);
}

export default App;
