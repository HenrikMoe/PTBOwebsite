import React from "react";
import classes from "./Literature.module.css";
import jsPDF from "jspdf";
import pdf1 from "../assets/CryptoCountCurrentBehaviors.pdf"
import pdf2 from "../assets/CryptoCountNewBehaviors.pdf"

console.log(pdf1)

const Literature = () => {

const onResumeClick = () => {
  window.open(pdf1);
}

const onResumeClick2 = () => {
  window.open(pdf2);
}
  const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CryptoCountNewBehaviors.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
		    console.log(fileURL)
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CryptoCount0.3.0.pdf';
                alink.click();
            })
        })
    }
  
   const onButtonClick2 = () => {
        // using Java Script method to get PDF file
        fetch('CryptoCountCurrentBehaviors.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
		    		    console.log(fileURL)

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
			
			
				<h3 className={classes.words}>CryptoCount Tax - Tezos 0.3.N:
					
				</h3>
				<div>
					
 				<a  href="https://pdfhost.io/v/Jsm~JCHHg_PTBO_TECHs_CryptoCount_RENDERING_APP" className={classes.Link}
						target="_blank"
						rel="noreferrer" >
				      
					  PTBO TECH's CryptoCount RENDERING APP
				      
				   </a>
				</div>
				<div>
					
 				<a  href="https://pdfhost.io/v/D7y89iOxX_PTBO_TECHs_CryptoCount_BACKEND_APP_and_CRON_SCRIPT" className={classes.Link}
						target="_blank"
						rel="noreferrer" >
				      
					  PTBO TECH's CryptoCount  BACKEND APP and CRON SCRIPT
				      
				   </a>
				</div>
				<div>
					
 				<a  href="https://pdfhost.io/v/OYsngYykU_PTBO_TECHs_CryptoCount_AI_APP_TRANSACTION_TO_ACCOUNTING_ENTRIES" className={classes.Link}
						target="_blank"
						rel="noreferrer" >
				      
					  PTBO TECH's CryptoCount AI APP - TRANSACTION TO ACCOUNTING ENTRIES
				      
				   </a>
				</div>
				<div>
					
 				<a  href="https://pdfhost.io/v/Ow0HBzNja_PTBO_TECHs_CryptoCount_KUBERNETES_CLOUD_SPECIFICATIONS" className={classes.Link}
						target="_blank"
						rel="noreferrer" >
				      
					  PTBO TECH's CryptoCount KUBERNETES CLOUD SPECIFICATIONS
				      
				   </a>
				</div>
			
				<h3 className={classes.words}>LIVE: CryptoCount x Tezos 0.2.N WhitePaper:
					
				</h3>
				<div>
				 <a href="https://pdfhost.io/v/CHTSX1qQ6_V2_Proposal_Compilation" className={classes.Link}
						target="_blank"
						rel="noreferrer" >
				      
					Native Tezos Reward FIFO Income Mockups
				      
				   </a>
				</div>
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
			</div>
		</div>
	);
};

export default Literature;

