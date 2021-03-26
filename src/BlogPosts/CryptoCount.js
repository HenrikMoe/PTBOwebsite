import React from "react";
import Blog from "../Blog/Blog";
import classes from "./CryptoCount.module.css";

const CryptoCount = () => {
	return (
		<Blog
			title="CryptoCount"
			link="https://github.com/HenrikMoe/CryptoCount"
		>
			<div className={classes.Updates}>
				<text>
					Update: 02/10/2021
					<br />
					<br />
					Development Area: Server
					<br />
					<br />
					<div className={classes.Notes}>
						Developer Notes: Node.js/Express.js Framework expansion.
						MongoDB Expansion.
						<br />
						<br />
						Context: Identifiying areas of the exisiting framework
						to scale to new functionality. Creating delegator
						analysis functionality. Preparing system files for
						module development.
						<br />
						<br />
					</div>
				</text>
			</div>
			<hr />
			<div clasName={classes.Updates}>
				<br />
				<text>
					Update: 02/15/2021
					<br />
					<br />
					Development Area: Server
					<br />
					<br />
					<div className={classes.Notes}>
						Developer Notes: Framework expansion continues.
						Delegator analysis external data flow work. Scaling
						database with more fiat currencies. Testing GUI for
						socket client server communication is built.
						<br />
						<br />
						Context: Using the tzkt/baking bad and coingecko api.
						Delegator analysis program is basis of main server
						course. That program's dependencies dicatate the other
						supporintg modules development (i.e. the database and
						the client GUI)
						<br />
						<br />
					</div>
				</text>
			</div>
			<hr />
			<div className={classes.Updates}>
				<br />
				<text>
					Update: 02/24/2021
					<br />
					<br />
					Development Area: Server
					<br />
					<br />
					<div className={classes.Notes}>
						Developer Notes: database schemas set up. database
						updates set up. core analysis program further
						modularized. modularization of a realization function
						transforming the accouting sets set up. socket io accout
						authentication set up. socket.io dialogue set up
						<br />
						<br />
						Context: Delegator analysis program dependencies
						prepared.
						<br />
						<br />
					</div>
				</text>
			</div>
			<hr />
			<div>
				<br />
				<text>
					Update: 03/10/2021<br></br>
					Development Area: Server, Server Client Routing
					<br />
					<br />
					<div className={classes.Notes}>
						Developer Notes: parallel branches under development: 1)
						the tezosdelegatoranalysis program where we get users
						block rewards and perform accounting analysis on them
						continuosly 2) titled - react-auth-accounts - this
						branch is being used to develop the client server
						routing for user accounts and user experience
						<br />
						<br />
						Context: Operators Henrik Moe and Shaheen Alemi develop
						the two main branches.
						<br />
						<br />
					</div>
				</text>
				<br />
			</div>
		</Blog>
	);
};

export default CryptoCount;
