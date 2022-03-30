import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import classes from "./API.module.css";
import APIPage from "./APIPage/APIPage";
import APISection from "./APISection";

const API = () => {
	// API Navbar router
	const { path, url } = useRouteMatch();

	return (
		<div className={classes.APIWrapper}>
			<div className={classes.API}>
				<h1 className={classes.Header}>
					<NavLink to="/api">CryptoCount Developer API</NavLink>
					<hr className={classes.HR} />
				</h1>
			</div>
			<div className={classes.Body}>
				<nav className={classes.SideNav}>
					<ul>
						<ul>
							<APISection title="Tezos">
								<div>
									<li className={classes.Outter}>
									</li>
									<ul className={classes.NestedNav}>
										<li className={classes.InnerNav}>
										<NavLink
												to={`${url}/reward-book-value`}
												className={classes.Nav}
											>
												<b>Modern Holding </b> - Unrealized FMV reward position.
											</NavLink>
											
										</li>
										<li className={classes.InnerNav}>
										<NavLink
												to={`${url}/reward-realization`}
												className={classes.Nav}
											>
												<b>Realization </b> - FIFO FMV of Rewards
											</NavLink>
										</li>
									</ul>
								</div>
							</APISection>
							{/* <APISection title="Velas">
								<div>
									<li className={classes.Outter}>
									</li>
									<ul className={classes.NestedNav}>
										<li className={classes.InnerNav}>
											<NavLink
												to={`${url}/reward-realization`}
												className={classes.Nav}
											>
												Velas Reward Realization
											</NavLink>
										</li>
										<li className={classes.InnerNav}>
											<NavLink
												to={`${url}/reward-book-value`}
												className={classes.Nav}
											>
												Velas Reward and Basis Book Value
											</NavLink>
										</li>
									</ul>
								</div>
							</APISection> */}
						</ul>
					</ul>
				</nav>
				<Switch>
					<Route
						exact
						path={path}
						component={() => <div>test</div>}
					/>
					<Route
						exact
						path="/api/reward-realization"
						component={() => (
							<APIPage
								url="http://api.portaltoblockchain.org/Analysis/Tezos/AutoRealize"
								params={
									"?address=${address}&fiat=${fiat}&realizingQuantity=${realizingQuantity}"
								}
								type="get"
								exampleReq="http://api.portaltoblockchain.org/Analysis/Tezos/AutoRealize?address=tz1TzS7MEQoCT6rdc8EQMXiCGVeWb4SLjnsH&fiat=USD&realizingQuantity=100"
								exampleRes={{
									address:
										"tz1TzS7MEQoCT6rdc8EQMXiCGVeWb4SLjnsH",
									basisPrice: 3.792666426254427,
									fiat: "USD",
									realizingRewards: [
										{
											date: "2021-11-13",
											reward: 2.5950637341688303,
										},
									],
									unrealizedRewards: [
										{
											date: "2021-11-17",
											reward: 2.5193753
										}
									],
									unrealizedFMVRewards: [],
									realizingFMVRewards: [],
									unrealizedFMVRewardsMVDep: [],
									realizingFMVRewardsMVDep: [],
									unrealizedFMVRewardsSupDep: [],
									realizingFMVRewardsSupDep: [],
									unrealizedRewardAgg: 69.85857200000001,
									unrealizedFMVAgg: 264.95026061047764,
									unrealizedDepAgg: 254.46376411571248,
									unrealizedMVDAgg: 254.44345054142477,
									realizingRewardAgg: 99.99999999999996,
									realizingRewardFMVAgg: 11379.2666426254425,
									realizingRewardDepAgg: 387.8184137664671,
									realizingRewardMVDAgg: 387.3205327040061,
									realizingXTZbasis: 0.6842319999999766,
									realizingBasisP: null,
									realizingBasisDep: null,
									realizingBasisMVDep: null,
									unrealizedXTZBasis: 138901,
									unrealizedBasisP: 138901,
									unrealizedBasisDep: 138901,
									unrealizedBasisMVDep: 138901,
								
								}}
							/>
						)}
					/>
					<Route
						exact
						path="/api/reward-book-value"
						component={() => (
							<APIPage
								url="http://api.portaltoblockchain.org/Analysis/Tezos/Auto"
								params={"?address=${address}&fiat=${fiat}"}
								type="get"
								exampleReq="https://api.portaltoblockchain.org/Analysis/Tezos/AutoRealize?address=tz1TzS7MEQoCT6rdc8EQMXiCGVeWb4SLjnsH&fiat=USD&realizingQuantity=1000"
								exampleRes={{	address:
									"tz1TzS7MEQoCT6rdc8EQMXiCGVeWb4SLjnsH",
								basisPrice: 3.792666426254427,
								fiat: "USD",
								unrealizedRewards: [
									{
										date: "2021-11-17",
										reward: 2.5193753
									}
								],
								unrealizedFMVRewards: [],
								unrealizedFMVRewardsMVDep: [],
								unrealizedFMVRewardsSupDep: [],
								unrealizedRewardAgg: 69.85857200000001,
								unrealizedFMVAgg: 264.95026061047764,
								unrealizedDepAgg: 254.46376411571248,
								unrealizedMVDAgg: 254.44345054142477,
								unrealizedXTZBasis: 138901,
								unrealizedBasisP: 138901,
								unrealizedBasisDep: 138901,
								unrealizedBasisMVDep: 138901,}}
							/>
						)}
					/>
				</Switch>
			</div>
			{/* <h2 className={classes.EP}> 1) Tezos Delegator Reward Realization </h2>
				<h3 className={classes.EndPoint}>Base URL</h3>
				<code className={classes.code}>
					api.portaltoblockchain.org/Analysis/Tezos/AutoRealize
				</code>
				<h3 className={classes.EndPoint}>URL Paramters</h3>
				<code className={classes.code}>
					?address=${"{"}address{"}"}&fiat=${"{"}fiat{"}"}
					&realizingQuantity=${"{"}realizingQuantity{"}"}
				</code>
				<br />
				<br />
				Type: String
				<code className={classes.code}>address </code>
				Tezos delegator address.
				<br />
				<br />
				Type: String 
				<code className={classes.code}>fiat </code>
				Three letter country fiat abrevaition, ex USD.
				<br />
				<br />
				Type: Int
				<code className={classes.code}>realizingQuantity </code>
				The quantity of Tezos (XTZ) that the delegator is selling. 
				<br />
				<br />
				<h3 className={classes.EndPoint}>Return Properties</h3>
				Type: Array
				<code className={classes.code}>realizingRewards </code>
				The quantity of rewards being realized by the delegator address.
				<br />
				<br />
				Type: Array
				<code className={classes.code}>realizingRewardBasis </code>
				The quantity of rewards by the basis cost being realized by the
				delegator address.
				<br />
				<br />
				Type: Array
				<code className={classes.code}>realizingRewardBasisDep </code>
				The quantity of rewards by the basis cost and by the supply
				depletion cost being realized by the delegator address.
				<br />
				<br />
				Type: Array
				<code className={classes.code}>realizingRewardBasisMVDep </code>
				The quantity of rewards by the basis cost and by the market
				value depletion cost being realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingRewardAgg </code>
				The sum of the rewards being realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingBasisAgg </code>
				The sum of the rewards by the basis cost being realized by the
				delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingDepAgg </code>
				The sum of the rewards by the basis cost and the supply
				depletion cost being realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingMVDAgg </code>
				The sum of the rewards by the basis cost and the market value
				dilution cost being realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingXTZbasis </code>
				The quantity of the staking basis being realized by the
				delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingBasisP </code>
				The quantity of the staking basis by the basis cost being
				realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingBasisDep </code>
				The quantity of the staking basis by the basis cost and by the
				supply depletion cost being realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>realizingBasisMVDep </code>
				The quantity of the staking basis by the basis cost and by the
				market value dilution cost being realized by the user.
				<br />
				<br />
				Type: Array.
				<code className={classes.code}>unrealizedRewards </code>
				The quantity of rewards that have not been realized by the
				delegator address.
				<br />
				<br />
				Type: Array.
				<code className={classes.code}>unrealizedBasisRewards </code>
				The quantity of rewards by the basis cost that have not been
				realized by the delegator address.
				<br />
				<br />
				Type: Array.
				<code className={classes.code}>unrealizedBasisRewardsDep </code>
				The quantity of rewards by the basis cost and by the supply
				depletion cost that have not been realized by the delegator
				address.
				<br />
				<br />
				Type: Array.
				<code className={classes.code}>
					unrealizedBasisRewardsMVDep
				</code>
				The quantity of rewards by the basis cost and by the market
				value depletion cost that have not been realized by the
				delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedRewardAgg </code>
				The sum of the unrealized rewards.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedBasisAgg </code>
				The sum of the unrealized rewards by the basis cost.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedDepAgg </code>
				The sum of the unrealized rewards by the basis cost and the
				supply deplpetion cost.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedMVDAgg </code>
				The sum of the unrealized rewards by the basis cost and the
				market value dilution cost.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedXTZBasis </code>
				The quantity of the staking basis not being realized by the
				delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedBasisP </code>
				The quantity of the staking basis by the basis cost not being
				realized by the delegator address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedBasisDep </code>
				The quantity of the staking basis by the basis cost and by the
				supply depletion cost not being realized by the delegator
				address.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>unrealizedBasisMVDep </code>
				The quantity of the staking basis by the basis cost and by the
				market value dilution cost not being realized by the delegator
				address.
				<br />
				<br />

				
				
		
				<hr />
				<h2 className={classes.EP}>2) Tezos Delegator Reward Book Value </h2>
				<h3 className={classes.EndPoint}>Base URL</h3>
				<code className={classes.code}>
					api.portaltoblockchain.org/Analysis/Tezos/Auto
				</code>
				<h3 className={classes.EndPoint}>URL Parameters</h3>
				<code className={classes.code}>
					?address=${"{"}address{"}"}&fiat=${"{"}fiat{"}"}
				</code>
				<br />
				<br />
				Type: String
				<code className={classes.code}>address </code>
				Tezos delegator address.
				<br />
				<br />
				Type: String
				<code className={classes.code}>fiat </code>
				Three letter country fiat abrevaition, ex USD.
				<br />
				<br />
				<h3 className={classes.EndPoint}>Return Properties</h3>
				Type: Array
				<code className={classes.code}>unrealizedRewards </code>
				The unrealized reward set of the delegator address.
				<br />
				<br />
				Type: Array
				<code className={classes.code}>unrealizedBasisRewards </code>
				The unrealized reward set by the basis cost of the delegator
				address.
				<br />
				<br />
				Type: Array
				<code className={classes.code}>unrealizedBasisRewardsDep </code>
				The unrealized reward set by the basis cost and the supply
				depletion cost of the delegator address.
				<br />
				<br />
				Type: Array
				<code className={classes.code}>
					unrealizedBasisRewardsMVDep
				</code>
				The unrealized reward set by the basis cost and the market value
				dilution cost of the delegator address.
				<br />
				<br />
				Type: String
				<code className={classes.code}>address </code>
				The delegator address.
				<br />
				<br />
				Type: String
				<code className={classes.code}>fiat </code>
				The fiat currency.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>basisPrice </code>
				The calcualted basis cost.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>xtzBasis </code>
				The staking basis.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>basisP </code>
				The staking basis by the basis cost.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>basisDep </code>
				The staking basis by the basis cost and by the supply depletion
				cost.
				<br />
				<br />
				Type: Float
				<code className={classes.code}>basisMVdep </code>
				The staking basis by the basis cost and by the market value
				dilution cost.
				<br />
				<br /> */}
		</div>
	);
};

export default API;
