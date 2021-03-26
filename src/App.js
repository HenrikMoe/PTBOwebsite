import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import Blog from "./Blog/Blog";

const App = () => {
	return (
		<div className={classes.App}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact>
						<div className={classes.Content}>
							<h3>Welcome to</h3>
							<h2>
								The Portal To Blockchain Organization (PTBO)
							</h2>
							<text>
								At our thesis core, we are working to develop a
								symmetrical structure to organize the blockchain
								data structure.
								<br />
								<br />
								Curently, we specialize in blockchain
								interfacing applications.
							</text>
						</div>
					</Route>
					<Route
						path="/blogs/cryptocount"
						exact
						component={() => (
							<Blog
								title="CryptoCount"
								link="https://github.com/HenrikMoe/CryptoCount"
							>
								<div>
									<text>
										Update: 02/10/2021
										<br></br>
										Development Area: Server
										<br></br>
										Developer Notes: Node.js/Express.js
										Framework expansion. MongoDB Expansion.
										<br></br>
										Context: Identifiying areas of the
										exisiting framework to scale to new
										functionality. Creating delegator
										analysis functionality. Preparing system
										files for module development.
										<br></br>
									</text>
								</div>

								<div>
									<br />
									<text>
										Update: 02/15/2021
										<br></br>
										Development Area: Server
										<br></br>
										Developer Notes: Framework expansion
										continues. Delegator analysis external
										data flow work. Scaling database with
										more fiat currencies. Testing GUI for
										socket client server communication is
										built.
										<br></br>
										Context: Using the tzkt/baking bad and
										coingecko api. Delegator analysis
										program is basis of main server course.
										That program's dependencies dicatate the
										other supporintg modules development
										(i.e. the database and the client GUI)
										<br></br>
									</text>
								</div>

								<div>
									<br />
									<text>
										Update: 02/24/2021
										<br></br>
										Development Area: Server
										<br></br>
										Developer Notes: database schemas set
										up. database updates set up. core
										analysis program further modularized.
										modularization of a realization function
										transforming the accouting sets set up.
										socket io accout authentication set up.
										socket.io dialogue set up
										<br></br>
										Context: Delegator analysis program
										dependencies prepared.
										<br></br>
									</text>
								</div>

								<div>
									<br />
									<text>
										Update: 03/10/2021<br></br>
										Development Area: Server, Server Client
										Routing
										<br></br>
										Developer Notes: parallel branches under
										development: 1) the
										tezosdelegatoranalysis program where we
										get users block rewards and perform
										accounting analysis on them continuosly
										2) titled - react-auth-accounts - this
										branch is being used to develop the
										client server routing for user accounts
										and user experience
										<br></br>
										Context: Operators Henrik Moe and
										Shaheen Alemi develop the two main
										branches.
										<br></br>
									</text>
								</div>
							</Blog>
						)}
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
