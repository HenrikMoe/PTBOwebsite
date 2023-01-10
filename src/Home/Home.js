import classes from "./Home.module.css";
//import Lottie from "react-lottie";
import animationData from "../assets/lottie/portal.json";
import Button from 'react-bootstrap/Button';
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import ccLogo from "../assets/cryptocountlogo.png"
import img from "../assets/image.jpg";
import github from "../assets/github.png"
import codesheet from "../assets/codesheet.png"
import upsideDown from "../assets/upsideDown.png"
import apipic from "../assets/api-with-outlets.jpg"
import Discord from "../assets/Discord.png"
import { CSVLink } from "react-csv";



import {connect} from 'react-redux'
import * as actionCreators from "../actions/actions.js"


const Home = (props) => {
	// const defaultOptions = {
	// 	loop: true,
	// 	autoplay: true,
	// 	animationData: animationData,
	// 	rendererSettings: {
	// 		preserveAspectRatio: "xMidYMid slice",
	// 	},
	// };

	//client module demo functions
		//on address initialization
		React.useEffect((e)=>{
			props.generateSet("EUR")
			
			}, [])
	
		//on load of page retrieve set
		// React.useEffect((e)=>{
		// 	props.generateSet()
			
		// 	}, [])
	
	
		const [realizingNativeRewardMarker, setRealizingNativeRewardMarker] = React.useState(false)
	
		const [csvData, setCsvData] = useState([])

		const handleCSVDownload = () => {
			console.log('in datcsv ')
			var last = props.object.object.realizingNativeRewards.length
			console.log(last)
			console.log(props.object.object)
			if(last !== 0){
				var csvDataReal = 
				[ [ 
						"LPOSBlockchain", "TezosStakingAddress",
						"Fiat", "PeriodStart", 
						"PeriodEnd", "QuantityofXTZRewardsSold",  
						"AverageAssetBasisCost", "FairMarketValueNativeRewardIncome",
						"SupplyDepletionNativeRewardIncome", "MarketDilutionNativeRewardIncome", 
				],
				[
					"Tezos", props.object.object.walletAddress, props.object.object.fiat, props.object.object.realizingNativeRewards[0].date,
					props.object.object.realizingNativeRewards[last - 1].date, Math.round((props.object.object.aggregateRealizedNativeReward100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
					props.object.object.weightedAverageTotalDomainInvestmentCost.toFixed(2), Math.round((props.object.object.aggregateRealizedNativeFMVReward100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
					Math.round((props.object.object.aggregateRealizedNativeSupplyDepletion100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), Math.round((props.object.object.aggregateRealizedNativeMarketDilution100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				]]
			}
			else{
				last = props.object.object.realizedNativeRewards.length
				csvDataReal = 
				[[ 
						"LPOSBlockchain", "TezosStakingAddress",
						"Fiat", "PeriodStart", 
						"PeriodEnd", "QuantityofXTZRewardsSold",  
						"AverageAssetBasisCost", "FairMarketValueNativeRewardIncome",
						"SupplyDepletionNativeRewardIncome", "MarketDilutionNativeRewardIncome", 
				],
				[
					"Tezos", props.object.object.walletAddress, props.object.object.fiat, props.object.object.realizedNativeRewards[0].date,
					props.object.object.realizedNativeRewards[last-1].date, Math.round((props.object.object.aggregateRealizedNativeReward100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
					props.object.object.weightedAverageTotalDomainInvestmentCost.toFixed(2), Math.round((props.object.object.aggregateRealizedNativeFMVReward100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
					Math.round((props.object.objectaggregateRealizedNativeSupplyDepletion100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), Math.round((props.object.object.aggregateRealizedNativeMarketDilution100p*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				]]
			}
			setCsvData(csvDataReal)
			// 	{userRealize: {blockchain:"Tezos"} , {TezosStakingAddress:`${set["data"]["walletAddress"]}`} },
	
			// ]
			// 		Fiat: `${set["data"]["fiat"]}`,PeriodStart: `${set["data"]["realizingNativeRewards"][0]["date"]}`, 
			// 		PeriodEnd:`${set["data"]["realizingNativeRewards"][last - 1]["date"]}`, QuantityofXTZRewardsSold:`${(Math.round((set["data"]["aggregateRealizedNativeReward100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,  
			// 		AverageAssetBasisCost:`${set["data"]["weightedAverageTotalDomainInvestmentCost"].toFixed(2)}`, FairMarketValueNativeRewardIncome:`${(Math.round((set["data"]["aggregateRealizedNativeFMVReward100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
			// 		SupplyDepletionNativeRewardIncome:`${(Math.round((set["data"]["aggregateRealizedNativeSupplyDepletion100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,MarketDilutionNativeRewardIncome:`${(Math.round((set["data"]["aggregateRealizedNativeMarketDilution100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 
				
			// 	},{}
			// ]
			// 	// {LPOSBlockchain: "Tezos", TezosStakingAddress: `${set["data"]["walletAddress"]}`,
			// 	//  Fiat: `${set["data"]["fiat"]}`, PeriodStart: set["data"]["realizingNativeRewards"][0]["date"], 
			// 	//  PeriodEnd: set["data"]["realizingNativeRewards"][last - 1]["date"], QuantityofXTZRewardsSold: (Math.round((set["data"]["aggregateRealizedNativeReward100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
			// 	//  AverageAssetBasisCost: set["data"]["weightedAverageTotalDomainInvestmentCost"].toFixed(2), FairMarketValueNativeRewardIncome: (Math.round((set["data"]["aggregateRealizedNativeFMVReward100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
			// 	// SupplyDepletionNativeRewardIncome: (Math.round((set["data"]["aggregateRealizedNativeSupplyDepletion100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), MarketDilutionNativeRewardIncome: (Math.round((set["data"]["aggregateRealizedNativeMarketDilution100p"])*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") },
			// 	// ];
				console.log(csvData)
	
		}

		const checkForCsv = (e) => {
			if(realizingNativeRewardMarker === true){
				handleCSVDownload()
			}
		}

		const handleDownload = (e) => {
				e.preventDefault();
				console.log('asdf')
				var doc = new jsPDF()
				console.log('l;jh')
				//var myImage = require('./sixtyFourBitIMG').image
				doc.setFontSize(18);
				//doc.addImage(myImage, 'JPEG', 20, 25, 31, 23, 'PTBO Logo');
				doc.text("TEZOS NATIVE BLOCK REWARD INCOME", 54, 35)
				doc.setFontSize(12);
				doc.text("CALCUALTED BY CRYPTOCOUNT", 55, 40)
				doc.setFontSize(10)
				doc.text("Portal To Blockchain Organization (PTBO)", 55, 45)
				//doc.addImage(tezLogo, 'JPEG', 20, 25, 23, 23, 'Tezos Logo');
				doc.text("PoS Protocol Blockchain: TEZOS " , 25, 60)
				doc.text("Tezos Delegator Address: " + props.object.object.walletAddress, 25, 67)
				doc.text("Fiat: " + props.object.object.fiat, 25, 74)
				var qRewSold = (Math.round((props.object.object.aggregateRealizedNativeReward100p)*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				doc.text("Period Start: " + props.object.object.realizingNativeRewards[0].date, 25, 88);
				var last = props.object.object.realizingNativeRewards.length
				doc.text("Period End: " + props.object.object.realizingNativeRewards[last - 1].date, 25, 95);
				doc.text("Quantity Of Rewards Sold: " + qRewSold + " XTZ", 25, 109)
				doc.text("Average Asset Basis Cost: " + props.object.object.weightedAverageTotalDomainInvestmentCost.toFixed(2) + " " + props.object.object.fiat, 25, 116)
				doc.text("Fair Market Value Native Reward Income: "+ (Math.round((props.object.object.aggregateRealizedNativeFMVReward100p)*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (props.object.object.fiat), 25, 123)
				doc.text("Supply Depletion Native Reward Income: "+ (Math.round((props.object.object.aggregateRealizedNativeSupplyDepletion100p)*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+(props.object.object.fiat), 25, 130)
				doc.text("Market Dilution Native Reward Income: "+ (Math.round((props.object.object.aggregateRealizedNativeMarketDilution100p)*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (props.object.object.fiat), 25, 137)
	
				//var doc = [props][pdfDocument]
				//doc.setFontSize(12)
				// doc.text("CALCULATED ON BEHALF OF", 25, 137)
	
				// doc.text("NAME: " + set["firstName"] + ' ' + set["lastName"], 25, 144)
				// doc.text("EMAIL: " + set["email"], 25, 151)
	
				doc.save("TezosRewardIncomeStatement.pdf");
	};
	
		const reloadWithFiat = (e) => {
			props.generateSet(fiat.current.value)
		}
	
		const realize = (e) => {
			props.generateRealize(props.object.object.objectId, quantityRealize.current.value)
			setRealizingNativeRewardMarker(true)
			//handleCSVDownload()
			checkForCsv()
			console.log(realizingNativeRewardMarker)
			
			
		}
	
		const fiat = React.createRef()
		const quantityRealize = React.createRef();
	
		// click handler
		const handle100 = ( e/** DOM event, click */ ) => {
			// prevent page from refreshing
			e.preventDefault();
			quantityRealize.current.value = props.object.object.aggregateUnrealizedNativeReward100p.toFixed(0);
	
			
		};
	
		//make update after save
		const handle25 = (e /** DOM event, click */) => {
			// prevent page from refreshing
			e.preventDefault();
		
			quantityRealize.current.value = props.object.object.aggregateUnrealizedNativeReward25p.toFixed(0);
	
		};
	
		const handle50 = (e /** DOM event, click */) => {
			// prevent page from refreshing
			e.preventDefault();
			var value = props.object.object.aggregateUnrealizedNativeReward50p
			console.log(value)
			quantityRealize.current.value = value.toFixed(0);
	
		};
	
		const handle75 = (e /** DOM event, click */) => {
			// prevent page from refreshing
			e.preventDefault();
	
			quantityRealize.current.value = props.object.object.aggregateUnrealizedNativeReward75p.toFixed(0);
	
		};
	
	
		console.log(props.object)
		// eslint-disable-next-line no-lone-blocks
		
		
		
		
			


	return (
		<div className={classes.wrap} >
	<div className={classes.Home}>
			<div className={classes.Content}>
				<div className={classes.Text}>
					{/* <h3 className={classes.words}>Welcome to</h3> */}
					<h2 className={classes.words8}>
						PTBO TECH
					</h2>
					<h4 className={classes.words10}>
					{/* <text className={classes.Sub}> */}
					CryptoCount API <a href="https://www.portaltoblockchain.org/client"> Supplies Block Reward FMV Income Statements For Your Users</a>. 
										{/* </text> */}
					</h4>
					
				</div>
				{/* <Lottie
					className={classes.Vid}
					options={defaultOptions}
					height={400}
					width={400}
					isClickToPauseDisabled={true}
				/> */}
				<div>
					<div className={classes.inline}>
					<h2 className={classes.words7}>Open Source Products</h2><a href="https://cryptocount.co"><img class={classes.cclogo}src={ccLogo} alt="cclogo" ></img></a>{" "}<img class={classes.ptbologo}src={img} alt="ptboimg"></img>{" "}<a href="https://app.swaggerhub.com/apis-docs/PORTALTOBLOCKCHAIN_1/crypto-count_api/0.2.2#/"><img class={classes.apilogo}src={apipic} alt="apithing" ></img></a>
					</div>
					
					<h2 className={classes.words3}>Client Example Below</h2>
				
				</div>
			</div>
		</div>

		<div className={classes.productContainer}>
		<div>
      <div>
	  <h1 className={classes.head2}>API Integration Example (Client Module) </h1>
		<div className={classes.head}>Client Module GitHub <a  href="https://github.com/PortalToBlockchainOrganization/CryptoCountClientModule"><img className={classes.cclogo} src={github} alt='github'></img></a></div>
				<div className={classes.head}>Code Sheet <a href="/client"><img className={classes.cclogo} src={codesheet} alt='codesheet'></img></a></div>
				<div className={classes.head}>Quick Demo Machine<img className={classes.cclogo} src={upsideDown} alt='upside'></img> </div>
				<div className={classes.head}>This integratable CryptoCount Client Module has a hardcoded Tezos address and features a simple realization with a downloadable income statement.</div>

          	<div className={classes.APIWrapper}>
				
                  <div className={classes.setToggles3}>
                  <div className={classes.quantGroup}>
                  <div className={classes.words}>Income Assessment Machine </div>
              </div>
              </div>
              
							<div className={classes.setToggles8}>
							<div className={classes.quantGroup}>
                <div
									className={classes.help}
									tooltip-data="Select up to 100% of native rewards. "
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
								<div className={classes.words}>Select Reward Quantity:</div>
							
								<Button
										variant="primary"
										onClick={handle25}
										className={classes.buttonReward}
									>
										25%
								</Button>
								<Button
										variant="primary"
										onClick={handle50}
										className={classes.buttonReward}

									>
										50%
									</Button>
								<Button
										variant="primary"
										onClick={handle75}
										className={classes.buttonReward}
									>
										75%
									</Button>
									<Button
									className={classes.buttonReward}										variant="primary"
										onClick={handle100}
									>
										100%
									</Button>
							<div>
            </div>
            </div>
			</div>


              <div className={classes.setToggles8}>
							<div className={classes.quantGroup}>
                            <div
									className={classes.help}
									tooltip-data="Select up to 100% of native rewards. "
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                            <div className={classes.words}>
                            Account Balance Today:
                            </div>
                          
                                <div className={classes.words2}>
                                    5000 XTZ
                                </div>
                  </div>
                  </div>

                              
              <div className={classes.setToggles9}>
							<div className={classes.quantGroup}>
                            <div
									className={classes.help}
									tooltip-data="Enter value less than or equal to your reward sum"
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                                <div className={classes.words}>Realizing:</div>
                            
                            <form className="cool-form">

                                <input className={classes.smallerInput} placeholder="n XTZ" ref={quantityRealize} />
                            
                                </form>
                                <div
									className={classes.help}
									tooltip-data="3 letter fiat code ex: 'USD' "
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                                <div className={classes.words}>3 Letter Fiat:</div>
                            
                                <form className="cool-form">

                                <input className={classes.smallerInput} placeholder="ex: EUR" ref={fiat} />

                                </form>
								<Button onClick={reloadWithFiat}className={classes.buttonReward2}>
                                    Set Fiat
                                </Button>
                                <Button onClick={realize}className={classes.buttonReward2}>
                                    Generate
                                </Button>
                  </div>
                  </div>


				{realizingNativeRewardMarker === true ?(
					
					<div>
					<div className={classes.setToggles8}>
							    <div className={classes.quantGroup}>
                                <div
									className={classes.help}
									tooltip-data="Fair Marekt Value assessment of your reward realization"
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                <div className={classes.words}>Fair Market Value Income</div>
                <div
									className={classes.help}
									tooltip-data="FMV plus market dilution assessment of your reward realization"
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                <div className={classes.words}>Supply Depletion Income</div>
                <div
									className={classes.help}
									tooltip-data="FMV plus supply depletion assessment of your reward realization"
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                <div className={classes.words}>Market Dilution Income</div>

                </div>
                </div>


                                <div className={classes.setToggles8}>
							    <div className={classes.quantGroup}>
                                <div className={classes.words2}>{props.object.object.aggregateRealizedNativeFMVReward100p.toFixed(2)}{" "}{props.object.object.fiat}</div>
                                <div className={classes.words2}>{props.object.object.aggregateRealizedNativeSupplyDepletion100p.toFixed(2)}{" "}{props.object.object.fiat}</div>
                                <div className={classes.words2}>{props.object.object.aggregateRealizedNativeMarketDilution100p.toFixed(2)}{" "}{props.object.object.fiat}</div>
                    

                  </div>
                  </div>

                  <div className={classes.setToggles8}>
							    <div className={classes.quantGroup}>
                            
                                <div
									className={classes.help}
									tooltip-data="Basis Cost Data and More "
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div>
                                <Button className={classes.buttonReward3} onClick={handleDownload}>Download PDF</Button>
								<CSVLink className={classes.buttonReward3}filename={"CryptoCountRealization.csv"} asyncOnClick={true} data={csvData}>Download CSV</CSVLink>
                                {/* <div
									className={classes.help}
									tooltip-data="Basis Cost Data and More "
								>
									<HelpOutlineRoundedIcon
										className={classes.helpIcon}
									/>
								</div> */}
                                {/* <Button className={classes.buttonReward}>Save</Button> */}
                </div>
                </div>
				</div>
				): null}
                  
                       

                                <div className={classes.setToggles3}>
							    <div className={classes.quantGroup}>
                                <div className={classes.words3}>Calculated by <a href="https://cryptocount.co">CryptoCount</a><a href="https://cryptocount.co"><img class={classes.cclogo2}src={ccLogo} alt="cclogo" ></img></a></div>

                                </div>
                                </div>
                       
                       

					
						</div>	

						
						
                        </div>
                        </div>
						<div className={classes.head3}>PTBO TECH Discord<a  href="https://discord.gg/7rYEu5c32E"><img className={classes.cclogo3} src={Discord} alt='Discord'></img></a></div>

      </div>
		</div>
		
								
	
		
	);
};

const mapStateToProps=(state)=>{
	return state
}
export default connect (mapStateToProps, actionCreators)(Home);
