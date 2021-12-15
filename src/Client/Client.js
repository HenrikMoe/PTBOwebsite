import React from "react";
import classes from "./Client.module.css";
import video from '../Videos/ClientModuleDemo.mp4'


const Client = () => {
	return (
		<div className={classes.APIWrapper}>
			<div className={classes.API}>
				<h1 className={classes.Header}>
					CryptoCount Client Module
					<hr className={classes.HR} />
				</h1>
				<video width="750" height="500" src={video} controls >
				</video>

				<h2 className={classes.EP}> Integrate CryptoCount Into React Application. </h2>
				
				<h3 className={classes.EndPoint}>Component Example</h3>

				<a href="https://github.com/PortalToBlockchainOrganization/CryptoCountClientModule/blob/master/src/components/Button/Button.jsx">React Componenet File</a>
				
				<br />
				<br />
				<h3 className={classes.EndPoint}>Install Dependencies</h3>
				<pre>
					<code className={classes.code}>
						npm install axios
						npm install jspdf
					</code>
				</pre>
				<h3 className={classes.EndPoint}>Modify Dependencies With Local System State Data</h3>
				<pre>
					Delegation Address 
					<code className={classes.code} >
					const address = 'tz1cgrzpsB43pBppH6mJzrHnFqxU8RUce991'					</code>
					<br />
					<br />
					Fiat Currency
					<code className={classes.code} >
					const fiat = 'USD'
					</code>
					<br />
					<br />
				</pre>
				
			</div>
		</div>
	);
};

export default Client;
