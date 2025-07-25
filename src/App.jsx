import MainScreen from "./components/MainScreen";
import SignupModal from "./components/SignupModal";
import { UserProvider, useUser } from "./context/UserContext";
import { GlobalStyles } from "./styles/GlobalStyles";

const AppContent = () => {
	const { isLoggedIn } = useUser();

	return (
		<>
			<GlobalStyles />
			{!isLoggedIn ? <SignupModal /> : <MainScreen />}
		</>
	)
}

function App() {
	return (
		<UserProvider>
			<AppContent />
		</UserProvider>
	);
}

export default App;
