import React from "react";
import classes from "./Client.module.css";
//import video from '../Videos/ClientModuleDemo.mp4'


const Client = () => {
	return (
		<div className={classes.APIWrapper}>
			<div className={classes.API}>
				<h1 className={classes.Header}>
					Integrate CryptoCount
					<hr className={classes.HR} />
				</h1>
				<h2 className={classes.EP}> Connect to our API to deliver tax optimzed block reward financial data to your users. </h2>

				<h2 className={classes.EP}> Procedure </h2>

				<h3 className={classes.EndPoint}>1) Familiarize yourself with the available data in the <a href="https://www.portaltoblockchain.org/api">API</a> section.</h3>
				<h3 className={classes.EndPoint}>2) Connect your front end API with your preferred endpoint. </h3>
				
				<h3 className={classes.EndPoint}>3) Display your users data from global state.</h3>


				<br />
				<br />
				<h2 className={classes.EndPoint}>Example With React-Query and JSPDF Statement Download</h2>

				<h3 className={classes.EndPoint}>Input your users' parameters into the query statement. </h3>

			
				<h3 className={classes.EndPoint}><a href="https://github.com/PortalToBlockchainOrganization/CryptoCountClientModule/blob/master/src/components/Button/Button.jsx">GitHub - Example React Machine</a></h3>
				<br />
				<br />
				<h3 className={classes.EndPoint}>Example Machine Demo.</h3>

				{/* <video width="750" height="500" src={video} controls >
				</video> */}
				<br />
				<br />
				
				
			</div>
		</div>
	);
};

export default Client;
