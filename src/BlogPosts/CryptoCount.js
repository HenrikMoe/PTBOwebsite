import React from "react";
import Blog from "../Blog/Blog";
import Update from "./Update/Update";
import mainS from "../assets/mainSample.png";
import fiatS from "../assets/fiatSample.png";
import fiatS2 from "../assets/fiatSample2.png";
import calS from "../assets/CalSample.png";
import analysisO from "../assets/AnalysisOutput.JPG";

const CryptoCount = () => {
	return (
		<Blog
			title="CryptoCount"
			link="https://github.com/HenrikMoe/CryptoCount"
			about="About: CryptoCount is PTB studio's first developed application.
			CryptoCount is a web app for accounting cryptocurrency block rewards. 
			Perfect for tax reporting, users are able to realize quantities of rewards in over 30 fiat currencies. 
			The app will help you report your most optimized block reward income, with cost basis and depreciation accounting available as well. 
			CryptoCount makes reporting block reward income easy."
		>
			<Update
				date="Update: 02/10/2021"
				area="Development Area: Back-end"
				notes="Notes: Server framework expansion. Database framework expansion."
				context="Context: Today we’re identifying areas of the existing 
				framework to scale to new functionality and creating delegator 
				analysis functionality. We’re also preparing system files for 
				module development."
			/>
			<Update
				date="Update: 02/15/2021"
				area="Development Area: Back-end"
				notes="Notes: Framework expansion continues. We’re doing
				delegator analysis external data-flow work and scaling
				the database with more fiat currencies. The Testing GUI
				for socket client server communication has been built.."
				context="Context: We’re using the tzkt/baking bad and coingecko
				api. The delegator analysis program is now the basis of
				the main server course. That program's dependencies
				dictate the other supporting modules development (i.e.,
				the database and the client GUI)."
			/>
			<Update
				date="Update: 02/24/2021"
				area="Development Area: Back-end"
				notes="Notes: Database schemas set up. DatabaseUpdates.js
						database update program is also up and running and the
						core analysis program has been further modularized for
						future development. Modularization of a realization
						function transforming the accounting sets is now
						functional, and webssocketing account authentication and
						web socket dialogue are good to go too."
				context="Context: Delegator analysis program dependencies
				prepared."
			/>
			<Update
				date="Update: 03/10/2021"
				area="Development Area: Back-end, Routing"
				notes="Notes: Development on tezosdelegatoranalysis program
						continues. Development on back-end and front-end routing
						for user accounts' authentication and functionality
						continues."
				context="Context: Today, two core back-end functionalities are
				under development: user accounts functionality and core
				application content."
			/>
			<Update
				date="Update: 3/24/2021"
				area="Development Area: Back-end, Front-end"
				notes="Notes: User's inner system sign-in back-end, front-end developed."
				context="Context: Front-end and back-end user account sign in and database handling finalized. "
			/>
			<Update
				date="Update: 4/2/2021"
				area="Development Area: Front-end"
				notes="Notes: Created front-end routing to push user to new page when the input params are posted to the back-end. "
				context="Context: Front-end sub-system is prepared for the activation of the core content program tzdelanalysis. Refactoring of pure tezos delegator analysis will result in posts of analysis results to front-end. "
			/>
			<Update
				date="Update: 4/16/2021"
				area="Development Area: Back-end, Front-end, Database"
				notes="Notes: 1) Tzdel analysis finished. To be audited. 2) Calendar and storyboard added to front end."
				context="Context: Core content program tezos delegator analysis is completed. Continued refining of the analysis and auditing with accountants will be conducted to ensure product integrity."
			/>
			<Update
				date="Update: 5/3/2021"
				area="Development Area: Server, Front-end"
				notes="Fiat selection for international currencies on front end user flow finalized, basis date selection with context data for user selection developed."
				context="Context: Milestone 1's completion is finalized. Milestone 2 is already underway, that is, displaying the analysis data and conducting realization analysis on same."
			>
				Samples:
				<img src={mainS} alt="main" />
				<img src={fiatS} alt="fiat1" />
				<img src={fiatS2} alt="fiat2" />
				<img src={calS} alt="cal" />
				<img src={analysisO} alt="cal" />
			</Update>
			<Update date="Update: 5/5/2021" area="area" />
		</Blog>
	);
};

export default CryptoCount;
