import React from "react";
import classes from "./APIPage.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
const APIPage = ({ url, params, type, exampleReq, exampleRes }) => {
	return (
		<div className={classes.Main}>
			<div className={classes.Body}>
				<div>
					<h3 className={classes.Description}>Description</h3>
					<p>
						The <b>CryptoCount API</b>  calls <b>fair market value block reward fiat income data</b> for a <b>Tezos delegator</b> address. 
						<br>
						</br>
						<br>
						</br> 
						<b>Recommended Ordering:</b> call the <b>Modern Holding</b> endpoint first. Store the <b>unrealizedRewardAgg</b> value, then, use the stored value to achieve the maximum fill for <b>realizingQuantity</b> in the <b>Realization</b> URI.

						<br>
						</br> 
						<br>
						</br> 
						The <b>Modern Holding</b> endpoint generates the Fair Market Values of a delegator's block rewards. Pass the <b>address</b> of the delegator and the three letter <b>fiat</b> abbreviation of the currency to the <b>Modern Holding</b> URI to get this data.

						<br>
						</br> 
						<br>
						</br> 
						The <b>Realization</b> endpoint uses the first-in first-out (FIFO) accounting method to realize rewards. Pass the quantity as <b> realizingQuantity</b>.

					</p>
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
			</div>
		</div>
	);
};

export default APIPage;
