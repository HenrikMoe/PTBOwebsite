import React from "react";
import classes from "./Client.module.css";

const Client = () => {
	return (
		<div className={classes.APIWrapper}>
			<div className={classes.API}>
				<h1 className={classes.Header}>
					CryptoCount Developer Client Module
					<hr className={classes.HR} />
				</h1>
				<h2 className={classes.EP}> Integrate CryptoCount Into Your Frontend React. </h2>
				<h3 className={classes.EndPoint}>Install Dependencies</h3>
				<code className={classes.code}>
					npm install axios
                    npm install jspdf
				</code>
				<h3 className={classes.EndPoint}>Add Imports To Component</h3>
				<code className={classes.code}>
					import jspdf from 'jspdf'
                    import axios from 'axois'
				</code>
				<br />
				<br />
                <h3 className={classes.EndPoint}>Add Realize Reward + PDF Income Statement Function</h3>
				<code className={classes.code}>
                function(deladdress, fiat, q realize)
                    url = api
                    props = axios.get(url)
                    basisIncome = props.realizingBasisRewardAgg
                    address = props.address
                    fiat = props.fiat
                    quantityRealized = props.realizingXTZAgg
                    .then.qpdf()=>(
                    all parameters
                    all words
                    all 64 bit images
                    )
				</code>
				<br />
				<br />
                <h3 className={classes.EndPoint}>Add Field and Button To Your React DOM</h3>
				<code className={classes.code}>
                    Wrap
                        Form Quantity Realized, Fiat
                    Button Get Income
                    Wrap
				</code>
				<br />
				<br />
				
				
			</div>
		</div>
	);
};

export default Client;
