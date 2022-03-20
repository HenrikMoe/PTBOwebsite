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
						Parameters are Velas delegator address, fiat currency, and a quantity to realize. Returns the realizingRewardBasisAgg which is the sum of all the rewards being realized in units of fiat currency. 
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
