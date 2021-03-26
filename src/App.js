import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import CryptoCount from "./BlogPosts/CryptoCount";
import Home from "./Home/Home";

const App = () => {
	return (
		<div className={classes.App}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path="/blogs/cryptocount"
						exact
						component={CryptoCount}
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
