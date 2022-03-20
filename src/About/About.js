import React from "react";
import classes from "./About.module.css";
import HistoryObject from "../assets/HistoryObject.jpg"

const About = () => {
	return (
		<div className={classes.APIWrapper}>
			<div className={classes.API}>
            <h1 className={classes.Header}>
					About CryptoCount 	
                    <h5>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://cryptocount.co"
					>
						CryptoCount
					</a>
                    </h5>
				
					<hr className={classes.HR} />
				</h1>
                  <br />
				<br />
		CryptoCount supplies tax optimized financial data to Tezos block reward delegators.				
                <br />
				<br />
		The website visualizes block rewards and generates income statements to users.	
		<br />
				<br />
                Statements are generated when a user selects a quantity of rewards to realize.
                <br />
				<br />
				Downloadable statements can be delivered to authorities for income tax reporting. 
                <br />
				<br />
				CryptoCount supports 40 countries and 1 blockchain. 
                <br />
				<br />
                The project supports data integration to an existing app. Pre-built react components and API documentation are located in the <a href="https://www.portaltoblockchain.org/client">Integrate CryptoCount</a> and <a href="https://www.portaltoblockchain.org/api">API</a> sections of this site. 
                <br />
				<br />
                The software was derived from economic literature authored by Sutherland and Landoni(2020), listed in the <a href="https://www.portaltoblockchain.org/literature">Academic Literature</a> section of this site. 
                <br />
				<br />
				Visit our <a href="https://www.github.com/PortalToBlockchainOrganization">GitHub</a> and feel free to leave feature requests. 
				<br />
				<br />
				Here is a representation of the History object, the core object to CryptoCount's functionality. 
				<br />
				<br />
				<img src={HistoryObject} className={classes.Pic} alt="History Object"/>
				<br />
				<br />

			</div>
		</div>
	);
};

export default About;
