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
                CryptoCount delivers income statements to block reward holders, offering an accounting interface for users to visualize their block rewards.
                <br />
				<br />
                Statements are generated when a user selects a quantity of rewards to realize.
                <br />
				<br />
                Downloadable statements can be delivered to authorities for tax reporting. 
                <br />
				<br />
                The CryptoCount project supports integration to an existing app. The one-click react component is in the <a href="/client">Client Module</a> section of this site. 
                <br />
				<br />
                CryptoCount currently supplies financial data and accounting services to Tezos block reward delegators.
                <br />
				<br />
                The software was designed from the literature by Sutherland and Landoni in the <a href="./literature">Academic Literature</a> section of this site. 
                <br />
				<br />
                CryptoCount currently supports 40 countries and 1 blockchain. 
                <br />
				<br />
                Contact us to if you want to supply feedback, need module integration assistance, or would like to have CryptoCount integrated into your blockchain. 
                        
			</div>
		</div>
	);
};

export default About;
