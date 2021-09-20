import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import CryptoCount from "./BlogPosts/CryptoCount";
import API from "./API/API";
import Literature from "./Literature/Literature";
import Home from "./Home/Home";
import Client from "./Client/Client"
import Privacy from "./Privacy/Privacy"

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
						<Route
							path="/Client"
							exact
							component={Client}
						/>
							<Route
							path="/Privacy"
							exact
							component={Privacy}
						/>
					</Switch>
				</div>
				<Footer className={classes.footer} />
			</BrowserRouter>
		</div>
	);
};

export default App;
