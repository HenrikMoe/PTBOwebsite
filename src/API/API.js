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
					Automatic Delegator Address Fiat Book Value Analysis
				</h3>
				<code className={classes.code}>
					portaltoblockchain.org/CryptoCount/Analysis/Tezos/Auto
				</code>
				<div className={classes.Name}>Query Parameters</div>
				<code className={classes.code}>
					?address=${"{"}address{"}"}&fiat=${"{"}fiat{"}"}
				</code>
				*where fiat is the three letter representation of your country's
				fiat
				<h3 className={classes.EndPoint}>
					Payload Properties
				</h3>
				<code className={classes.code}>
					unrealizedRewards - The unrealized reward set of the delegator address.
					unrealizedBasisRewards - The unrealized reward set by the basis cost of the delegator address.
					unrealizedBasisRewardsDep - The unrealized reward set by the basis cost and the supply depletion cost of the delegator address.
					unrealizedBasisRewardsMVDep - The unrealized reward set by the basis cost and the market value dilution cost of the delegator address.
					address - The delegator address.
					fiat - The fiat currency.
					basisPrice - The calcualted basis cost. 
					xtzBasis - The staking basis. 
					basisP - The staking basis by the basis cost. 
					basisDep - The staking basis by the basis cost and by the supply depletion cost.
					basisMVdep - The staking basis by the basis cost and by the market value dilution cost. 
				</code>
				<hr />





				<h3 className={classes.EndPoint}>
					Automatic Delegator Address Analysis While Realizing Quantity Of XTZ
				</h3>
				<code className={classes.code}>
					portaltoblockchain.org/CryptoCount/Analysis/Tezos/AutoRealizing
				</code>
				<div className={classes.Name}>Query Parameters</div>
				<code className={classes.code}>
					?address=${"{"}address{"}"}&fiat=${"{"}fiat{"}"}
					&quantityRealizing=${"{"}quantityRealizing{"}"}
				</code>
				<h3 className={classes.EndPoint}>
					Payload Reward Properties
				</h3>
				<code className={classes.code}>
					realizingRewards - The quantity of rewards being realized by the delegator address. 
					unrealizedRewards - The quantity of rewards that have not been realized by the delegator address. 
					realizingRewardBasis - The quantity of rewards by the basis cost being realized by the delegator address. 
					unrealizedBasisRewards - The quantity of rewards by the basis cost that have not been realized by the delegator address. 
					realizingRewardBasisDep - The quantity of rewards by the basis cost and by the supply depletion cost being realized by the delegator address.
					unrealizedBasisRewardsDep - The quantity of rewards by the basis cost and by the supply depletion cost that have not been realized by the delegator address.
					realizingRewardBasisMVDep - The quantity of rewards by the basis cost and by the market value depletion cost being realized by the delegator address.
					unrealizedBasisRewardsMVDep - The quantity of rewards by the basis cost and by the market value depletion cost that have not been realized by the delegator address.
					unrealizedRewardAgg - The sum of the unrealized rewards. 
					unrealizedBasisAgg - The sum of the unrealized rewards by the basis cost. 
					unrealizedDepAgg - The sum of the unrealized rewards by the basis cost and the supply deplpetion cost.
					unrealizedMVDAgg - The sum of the unrealized rewards by the basis cost and the market value dilution cost. 
					realizingRewardAgg - The sum of the rewards being realized by the delegator address.
					realizingBasisAgg - The sum of the rewards by the basis cost being realized by the delegator address.
					realizingDepAgg - The sum of the rewards by the basis cost and the supply depletion cost being realized by the delegator address.
					realizingMVDAgg - The sum of the rewards by the basis cost and the market value dilution cost being realized by the delegator address.
				</code>
				<h3 className={classes.EndPoint}>
					Payload Staking Basis Properties
				</h3>
				<code className={classes.code}>
					realizingXTZbasis - The quantity of the staking basis being realized by the delegator address.
					realizingBasisP - The quantity of the staking basis by the basis cost being realized by the delegator address.
					realizingBasisDep - The quantity of the staking basis by the basis cost and by the supply depletion cost being realized by the delegator address.
					realizingBasisMVDep - The quantity of the staking basis by the basis cost and by the market value dilution cost being realized by the user.
					unrealizedXTZBasis - The quantity of the staking basis not being realized by the delegator address.
					unrealizedBasisP - The quantity of the staking basis by the basis cost not being realized by the delegator address.
					unrealizedBasisDep - The quantity of the staking basis by the basis cost and by the supply depletion cost not being realized by the delegator address.
					unrealizedBasisMVDep - The quantity of the staking basis by the basis cost and by the market value dilution cost not being realized by the delegator address.
				</code>
				<h3 className={classes.EndPoint}>
					Payload Accounting Analysis Parameter Properties
				</h3>
				<code className={classes.code}>
					address - The delegating address. 
					basisPrice - The calculated staking basis price.
					fiat - The fiat currency. 
				</code>

			</div>
		</div>
	);
};

export default API;
