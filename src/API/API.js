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
					unrealizedRewards </code> 
					The unrealized reward set of the delegator address.
					{"/n"}
					<code className={classes.code}>
					unrealizedBasisRewards </code> 
					The unrealized reward set by the basis cost of the delegator address.
					<code className={classes.code}>
					unrealizedBasisRewardsDep </code> 
					The unrealized reward set by the basis cost and the supply depletion cost of the delegator address.
					<code className={classes.code}>
					unrealizedBasisRewardsMVDep </code> 
					The unrealized reward set by the basis cost and the market value dilution cost of the delegator address.
					<code className={classes.code}>
					address </code> 
					The delegator address.
					<code className={classes.code}>
					fiat </code> 
					The fiat currency.
					<code className={classes.code}>
					basisPrice </code> 
					The calcualted basis cost. 
					<code className={classes.code}>
					xtzBasis </code> 
					The staking basis. 
					<code className={classes.code}>
					basisP </code> 
					The staking basis by the basis cost. 
					<code className={classes.code}>
					basisDep </code> 
					The staking basis by the basis cost and by the supply depletion cost.
					<code className={classes.code}>
					basisMVdep </code> 
					The staking basis by the basis cost and by the market value dilution cost.
				 
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
					realizingRewards </code> 
					The quantity of rewards being realized by the delegator address. 
					<code className={classes.code}>
					unrealizedRewards </code> 
					The quantity of rewards that have not been realized by the delegator address. 
					<code className={classes.code}>
					realizingRewardBasis </code> 
					The quantity of rewards by the basis cost being realized by the delegator address. 
					<code className={classes.code}>
					unrealizedBasisRewards </code> 
					The quantity of rewards by the basis cost that have not been realized by the delegator address. 
					<code className={classes.code}>
					realizingRewardBasisDep </code> 
					The quantity of rewards by the basis cost and by the supply depletion cost being realized by the delegator address.
					<code className={classes.code}>
					unrealizedBasisRewardsDep </code> 
					The quantity of rewards by the basis cost and by the supply depletion cost that have not been realized by the delegator address.
					<code className={classes.code}>
					realizingRewardBasisMVDep </code> 
					The quantity of rewards by the basis cost and by the market value depletion cost being realized by the delegator address.
					<code className={classes.code}>
					unrealizedBasisRewardsMVDep </code> 
					The quantity of rewards by the basis cost and by the market value depletion cost that have not been realized by the delegator address.
					<code className={classes.code}>
					unrealizedRewardAgg </code> 
					The sum of the unrealized rewards. 
					<code className={classes.code}>
					unrealizedBasisAgg </code> 
					The sum of the unrealized rewards by the basis cost. 
					<code className={classes.code}>
					unrealizedDepAgg </code> 
					The sum of the unrealized rewards by the basis cost and the supply deplpetion cost.
					<code className={classes.code}>
					unrealizedMVDAgg </code> 
					The sum of the unrealized rewards by the basis cost and the market value dilution cost. 
					<code className={classes.code}>
					realizingRewardAgg </code> 
					The sum of the rewards being realized by the delegator address.
					<code className={classes.code}>
					realizingBasisAgg </code> 
					The sum of the rewards by the basis cost being realized by the delegator address.
					<code className={classes.code}>
					realizingDepAgg </code> 
					The sum of the rewards by the basis cost and the supply depletion cost being realized by the delegator address.
					<code className={classes.code}>
					realizingMVDAgg </code> 
					The sum of the rewards by the basis cost and the market value dilution cost being realized by the delegator address.
				<h3 className={classes.EndPoint}>
					Payload Staking Basis Properties
				</h3>
				<code className={classes.code}>
					realizingXTZbasis </code> 
					The quantity of the staking basis being realized by the delegator address.
					<code className={classes.code}>
					realizingBasisP </code> 
					The quantity of the staking basis by the basis cost being realized by the delegator address.
					<code className={classes.code}>
					realizingBasisDep </code> 
					The quantity of the staking basis by the basis cost and by the supply depletion cost being realized by the delegator address.
					<code className={classes.code}>
					realizingBasisMVDep </code> 
					The quantity of the staking basis by the basis cost and by the market value dilution cost being realized by the user.
					<code className={classes.code}>
					unrealizedXTZBasis </code> 
					The quantity of the staking basis not being realized by the delegator address.
					<code className={classes.code}>
					unrealizedBasisP </code> 
					The quantity of the staking basis by the basis cost not being realized by the delegator address.
					<code className={classes.code}>
					unrealizedBasisDep </code> 
					The quantity of the staking basis by the basis cost and by the supply depletion cost not being realized by the delegator address.
					<code className={classes.code}>
					unrealizedBasisMVDep </code> 
					The quantity of the staking basis by the basis cost and by the market value dilution cost not being realized by the delegator address.
				<h3 className={classes.EndPoint}>
					Payload Accounting Analysis Parameter Properties
				</h3>
				<code className={classes.code}>
					address </code> 
					The delegating address. 
					<code className={classes.code}>
					basisPrice </code> 
					The calculated staking basis price.
					<code className={classes.code}>
					fiat </code> 
					The fiat currency. 

			</div>
		</div>
	);
};

export default API;
