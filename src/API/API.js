import React from "react";
import classes from "./API.module.css";

const API = () => {
	return (
		<div className={classes.APIWrapper}>
			<div className={classes.API}>
				<h1 className={classes.Header}>
					Developer API
					<hr className={classes.HR} />
				</h1>
				<h2 className={classes.EP}>HTTP Endpoints</h2>
				<h3 className={classes.EndPoint}>
					Automatic Delegator Address Fiat Book
				</h3>
				<div className={classes.Name}>Value Analysis</div>
				<code className={classes.code}>
					portaltoblockchain.org/CryptoCount/Tezos/Analysis/Auto
				</code>
				<div className={classes.Name}>Query Parameters</div>
				<code className={classes.code}>
					?address=${"{"}address{"}"}&fiat=${"{"}fiat{"}"}
				</code>
				*where fiat is the three letter representation of your country's
				fiat
				<hr />
				<h3 className={classes.EndPoint}>
					Automatic Delegator Address Analysis While Realizing
				</h3>
				<div className={classes.Name}>Quantity Of XTZ</div>
				<code className={classes.code}>
					portaltoblockchain.org/CryptoCount/Tezos/Analysis/AutoRealizing
				</code>
				<div className={classes.Name}>Query Parameters</div>
				<code className={classes.code}>
					?address=${"{"}address{"}"}&fiat=${"{"}fiat{"}"}
					&quantityRealizing=${"{"}quantityRealizing{"}"}
				</code>
			</div>
		</div>
	);
};

export default API;
