import React from "react";
import classes from "./Client.module.css";
//import video from '../Videos/ClientModuleDemo.mp4'
import { CodeBlock } from "react-code-blocks";


const code1 = `function safeFetch(method, endpoint, body) {
	return fetch(baseURL + endpoint, {
		method: method,
		body: JSON.stringify(body),
		...reqConf,
	})
		.then(function (response) {
			return Promise.resolve(response);
		});
}`

const code2 = `export function post(endpoint, body) {
	return safeFetch("POST", endpoint, body);
}`

const code3 = `export function generatePost(params) {
	return post("/tezos/Generate", 
		{
			"fiat": params["fiat"],
			"address": params["address"],
			"consensusRole": params["consensusRole"],
			"user_id": params["user_id"]
		},
	);
}`

const code4 = `export function getSet(setId, user_id) {
	return post("/tezos/Retrieve", {
		setId: setId,
	});
}`

const code5 = `export function getRealizingSet(setId, quantity) {
	return post("/tezos/Realize", {
		setId: setId,
		quantity: quantity,
	});
}`

const code6 = `export function saveRealize(setId, confirm_quantity) {
	return post("/tezos/Save", {
		objectId: setId,
		quantity: confirm_quantity,
	});
}`

const code7 = `
import jsPDF from "jspdf";

const handleDownload = (e) => {
	e.preventDefault();
	var doc = new jsPDF()
	//var myImage = require('./sixtyFourBitIMG').image

	doc.setFontSize(18);
	doc.addImage(myImage, 'JPEG', 20, 25, 31, 23, 'PTBO Logo');
	doc.text("TEZOS NATIVE BLOCK REWARD INCOME", 54, 35)
	doc.setFontSize(12);
	doc.text("CALCUALTED BY CRYPTOCOUNT", 55, 40)
	doc.setFontSize(10)
	doc.text("Portal To Blockchain Organization (PTBO)", 55, 45)
	doc.text("PoS Protocol Blockchain: TEZOS " , 25, 60)
	doc.text("Tezos Delegator Address: " + set["data"]["walletAddress"], 25, 67)
	doc.text("Fiat: " + set["data"]["fiat"], 25, 74)
	var qRewSold = (Math.round((set["data"]["aggregateRealizedNativeReward100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	doc.text("Period Start: " + set["data"]["realizingNativeRewards"][0]["date"], 25, 88);
	var last = set["data"]["realizingNativeRewards"].length
	doc.text("Period End: " + set["data"]["realizingNativeRewards"][last - 1]["date"], 25, 95);
	doc.text("Quantity Of Rewards Sold: " + qRewSold + " XTZ", 25, 109)
	doc.text("Average Asset Basis Cost: " + set["data"]["weightedAverageTotalDomainInvestmentCost"].toFixed(2) + " " + set["data"]["fiat"], 25, 116)
	doc.text("Fair Market Value Native Reward Income: "+ (Math.round((set["data"]["aggregateRealizedNativeFMVReward100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (set["data"]["fiat"]), 25, 123)
	doc.text("Supply Depletion Native Reward Income: "+ (Math.round((set["data"]["aggregateRealizedNativeSupplyDepletion100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+(set["data"]["fiat"]), 25, 130)
	doc.text("Market Dilution Native Reward Income: "+ (Math.round((set["data"]["aggregateRealizedNativeMarketDilution100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (set["data"]["fiat"]), 25, 137)



	doc.save("TezosRewardIncomeStatement.pdf");
};
`
const newTab = () => {
	window.open(
	"https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/", "_blank");
}

const Client = () => {
	return (
		<div className={classes.wrap}>

		
		<div className={classes.APIWrapper}>
			
				<h1 className={classes.Header}>
					Integrate CryptoCount For Your App's Tezos Addresses
					<hr className={classes.HR} />
				</h1>
				<h2 className={classes.EP}> Are you hosting Tezos delegators or bakers in an App? <a href="https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/">CryptoCount API</a> is for you.  </h2>
				<h2 className={classes.EP}> Integrate CryptoCount to get Fair Market Value (FMV) assessments in 40 fiat currencies for your Tezos user’s block rewards. </h2>
				<h2 className={classes.EP}> Display the user’s FMV income when they sell or transfer a quantity of Tez less than or equal to the sum of their block rewards.  </h2>
				<h2 className={classes.EP}> For transfer or sale amounts equalling more than the total of the user's block rewards, capital gains + layer 2 DeFi/Dapp reward tax accounting is coming in CryptoCount 0.3.0.  </h2>
				<br />
				<br />
				<h2 className={classes.Header}>Data Procedure </h2>
				<hr className={classes.HR} />
				<h2 className={classes.EP}>The following procedure correctly uses the CryptoCount API. </h2>
				<br />
				<br />
				<code>baseURL = https://cryptocount.co/api/</code>
				<br />
				<br />

				<h2 className={classes.EP}>The CryptoCount API Endpoints take arguments from the body of HTTP POST requests. </h2>
				<br />
				<br />
				<h2 className={classes.EP}>Example HTTP call. </h2>
				<CodeBlock text={code1} language={"javascript"} showLineNumbers={true} />
				<br></br>
				<CodeBlock text={code2} language={"javascript"} showLineNumbers={true} />
				<br></br>
				<h2 className={classes.EP}><a href="https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/Product/post_tezos_Generate">Generate</a> the CryptoCount object and store the objectID when a user initializes a Tezos address in your app. Consensus Role is either "Delegator" or "Baker".</h2>
				<br />
				<br />
				<CodeBlock text={code3} language={"javascript"} showLineNumbers={true} />
				<br />
				<br />
				<h2 className={classes.EP}><a href="https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/Product/post_tezos_Retrieve">Retrieve</a> the CryptoCount object to update it before performing Realizations.</h2>

				<br />
				<br />
				<CodeBlock text={code4} language={"javascript"} showLineNumbers={true} />
				<br />
				<br />
				<h2 className={classes.EP}><a href="https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/Product/post_tezos_Realize">Realize</a> quantities of Native Block Rewards to get income metrics evaulated a FMV, Supply Depletion, and Market Value Dilution.</h2>
				<br />
				<br />
				<CodeBlock text={code5} language={"javascript"} showLineNumbers={true} />
				<br />
				<br />
				<h2 className={classes.EP}><a href="https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/Product/post_tezos_Save">Save</a> a realization by repassing the quantity. The object will be permanently modified in the database per the realization. Ideal for realization chaining. </h2>
				<br />
				<br />
				<CodeBlock text={code6} language={"javascript"} showLineNumbers={true} />
				<br />
				<br />
				<h2 className={classes.EP}>Use CryptoCount's Income Statement Template with jsPDF for your users. </h2>
				<br />
				<br />
				<CodeBlock text={code7} language={"javascript"} showLineNumbers={true} />


				

			
				{/* <h3 className={classes.EndPoint}><a href="https://github.com/PortalToBlockchainOrganization/CryptoCountClientModule/blob/master/src/components/Button/Button.jsx">GitHub - Example React Machine</a></h3> */}
				<br />
				<br />
			
				
				
		
		</div>
		</div>
	);
};

export default Client;
