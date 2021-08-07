import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import CryptoCount from "./BlogPosts/CryptoCount";
import API from "./API/API";
import Literature from "./Literature/Literature";
import Home from "./Home/Home";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div className={classes.App}>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route
							path="/blogs/cryptocount"
							exact
							component={CryptoCount}
						/>
						<Route path="/api" exact component={API} />
						<Route
							path="/literature"
							exact
							component={Literature}
						/>
					</Switch>
				</div>
				<Footer className={classes.footer} />
			</BrowserRouter>
		</div>
	);
};

export default App;
