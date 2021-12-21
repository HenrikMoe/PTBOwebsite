import React from "react";
import classes from "./About.module.css";

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
						Website
					</a>
                    </h5>
				
					<hr className={classes.HR} />
				</h1>
                  <br />
				<br />
		CryptoCount supplies tax optimized financial data and accounting services for Tezos block reward delegators.				
                <br />
				<br />
		The website visualizes block rewards and delivers income statements to users.	
		<br />
				<br />
                Statements are generated when a user selects a quantity of rewards to realize.
                <br />
				<br />
                CryptoCount supports 40 countries and 1 blockchain. 
                <br />
				<br />
                Downloadable statements can be delivered to authorities for tax reporting. 
                <br />
				<br />
                This project supports data integration to an existing app. Pre-built react components and API documentation are located in the <a href="https://www.portaltoblockchain.org/about">Client Module</a> and <a href="https://www.portaltoblockchain.org/api">API</a> sections of this site. 
                <br />
				<br />
                The software was designed from literature authored by Sutherland and Landoni(2020), listed in the <a href="https://www.portaltoblockchain.org/literature">Academic Literature</a> section of this site. 
                <br />
				<br />
				Visit our <a href="https://www.github.com/PortalToBlockchainOrganization">GitHub</a> and feel free to leave feature requests. 

			</div>
		</div>
	);
};

export default About;
