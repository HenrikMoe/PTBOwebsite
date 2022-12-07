import React from "react";
import classes from "./Literature.module.css";
import jsPDF from "jspdf";
import pdf1 from "../assets/0.2.2.pdf"
import pdf2 from "../assets/0.3.0.pdf"

const Literature = () => {




	return (
		<div className={classes.LitWrapper}>
			<div className={classes.Literature}>
			<h3 className={classes.words}>Live Version: CryptoCount x Tezos 0.2.2</h3>
				<h3 className={classes.words}>Resourced CryptoCount 0.2.2 Block Reward Accounting Methods:
					
				</h3>
				<a
						className={classes.Link}
						target="_blank"
						rel="noreferrer"
						href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3672461"
					>
						Dilution and True Economic Gain from Cryptocurrency
						Block Rewards
					</a>
				<h3 className={classes.words}>CryptoCount x Tezos 0.3.0 WhitePaper:
					
				</h3>
				<a
						className={classes.Link}
						target="_blank"
						rel="noreferrer"
						href={pdf2}
						download="CryptoCount0.3.0.pdf"
					>
						Transaction Based Capital Gains, Layer 2 DeFi/Dapp Reward FMV Assessments, Smart Contract Tax Payments
					</a>
					<h3 className={classes.words}>CryptoCount x Tezos 0.2.2 WhitePaper:
					
				</h3>
				<a
						className={classes.Link}
						target="_blank"
						rel="noreferrer"
						href={pdf1}
						download="CryptoCount0.2.2.pdf"
					>
						Native DeFi Reward FMV Assessments
					</a>
			</div>
		</div>
	);
};

export default Literature;
