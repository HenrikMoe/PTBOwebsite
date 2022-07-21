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
		CryptoCount 0.2.1 supplies tax optimized financial data to Tezos block reward delegators and bakers.				
                <br />
				<br />
		Users can visualize rewards, generates income statements, and plan realizations from Tezos based assets into fiat currency. 
                <br />
				<br />
				The goal is to help manage personal decentralized finance activity and respondibly plan realizations.
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
		

			</div>
		</div>
	);
};

export default About;
