import React from "react";
import classes from "./APIPage.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
const APIPage = ({ url, params, type, exampleReq, exampleRes }) => {
	return (
		<div className={classes.Main}>
			<div className={classes.Body}>
				
				<div className={classes.Example}>
					<h3 className={classes.EndPoint}>Example Request</h3>
					<SyntaxHighlighter
						language="http"
						style={atomOneDarkReasonable}
						className={classes.codeSyntax}
						wrapLines={true}
						wrapLongLines={true}
					>
						{exampleReq}
					</SyntaxHighlighter>
					<h3 className={classes.EndPoint}>Example Response</h3>
					<SyntaxHighlighter
						language="json"
						style={atomOneDarkReasonable}
						className={classes.codeSyntax}
						wrapLines={true}
						wrapLongLines={true}
					>
						{JSON.stringify(exampleRes, null, 2)}
					</SyntaxHighlighter>
				</div>
				<div className={classes.Description}>
				 <h3 className={classes.Description}>Data</h3>
					<b>
						Use the CryptoCount API to analyze a Tezos baker/delegator address for its rewards and staking basis by a fiat currency.
						<br></br>
						<br></br>

						Params: 
						<br></br>
						* address=Delegator or Baker address
						<br></br>
						* fiat= 3 Letter FIAT Code
						<br>
						</br> 
						* consensusRole="Delegator" or "Baker"
						<br>
						</br> 
						* realizingQuantity=520
						<br></br>
						<br></br>

						Proceed:
						<br></br>
						<b>1. Unrealized FMV Reward Position</b> <br>
						</br> 
						<br>
						</br> 
						2. Store  <b>unrealizedRewardAgg</b> <br></br>
						<br>
						</br> 
						3. Use <b>unrealizedRewardAgg</b> for maximum fill of <b>realizingQuantity</b> in  <b>FIFO Realization of FMV Rewards</b> url.
						<br>
						</br> 
						<br>
						</br> 

					</b> 
					<h3 className={classes.Description}>Endpoint</h3>
					<code className={classes.code}>
						<code
							className={
								type?.toLowerCase() === "post"
									? classes.POST
									: classes.GET
							}
						>
							{type?.toUpperCase()}
						</code>
						{url}
					</code>
					<h3 className={classes.EndPoint}>URL Paramters</h3>
					<SyntaxHighlighter
						language="javascript"
						style={atomOneDarkReasonable}
						className={classes.codeSyntax}
					>
						{params}
					</SyntaxHighlighter>
				</div> 
				
			</div>
		</div>
	);
};

export default APIPage;
