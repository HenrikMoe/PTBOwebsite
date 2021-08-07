import React from "react";
import classes from "./Literature.module.css";

const Literature = () => {
	return (
		<div className={classes.LitWrapper}>
			<div className={classes.Literature}>
				<h1>Academic Literature</h1>
				<h3>
					<a
						className={classes.Link}
						target="_blank"
						rel="noreferrer"
						href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3672461"
					>
						Dilution and True Economic Gain from Cryptocurrency
						Block Rewards
					</a>
				</h3>
			</div>
		</div>
	);
};

export default Literature;
