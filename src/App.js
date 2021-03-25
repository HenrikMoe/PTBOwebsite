import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact>
						<div className={classes.Content}>
							<h2>
								Welcome to the Portal To Blockchain Organization
								(PTBO). <br></br>
							</h2>
							<text>
								At our thesis core, we are working to develop a
								symmetrical structure to organize the blockchain
								data structure.
								<br></br>
								Curently, we specialize in blockchain
								interfacing applications.
							</text>
						</div>
						<Footer />
					</Route>
					<Route path="/blogs" exact />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
