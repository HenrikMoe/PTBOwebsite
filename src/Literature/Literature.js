import React from "react";
import classes from "./Literature.module.css";
import jsPDF from "jspdf";
import pdf1 from "../assets/0.2.2.pdf"
import pdf2 from "../assets/0.3.0.pdf"

const Literature = () => {


  const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('0.3.0.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CryptoCount0.3.0.pdf';
                alink.click();
            })
        })
    }
  
   const onButtonClick2 = () => {
        // using Java Script method to get PDF file
        fetch('0.2.2.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CryptoCount0.2.2.pdf';
                alink.click();
            })
        })
    }

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
 				<a className={classes.Link} href={pdf1} without rel="noopener noreferrer" target="_blank">
				      <button trailingIcon="picture_as_pdf" label="Resume">
					Transaction Based Capital Gains, Layer 2 DeFi/Dapp Reward FMV Assessments, Smart Contract Tax Payments PDF
				      </button>
				   </a>
			
				<h3 className={classes.words}>CryptoCount x Tezos 0.2.2 WhitePaper:
					
				</h3>
				 <a className={classes.Link} href={pdf2} without rel="noopener noreferrer" target="_blank">
				      <button trailingIcon="picture_as_pdf" label="Resume">
					Native DeFi Reward FMV Assessments PDF
				      </button>
				   </a>
			</div>
		</div>
	);
};

export default Literature;
