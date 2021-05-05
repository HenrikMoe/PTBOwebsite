import React from "react";
import classes from "../CryptoCount.module.css";
const Update = ({ date, area, notes, context, children }) => {
	return (
		<div>
			<div className={classes.Updates}>
				<text>
					{date}
					<br />
					<br />
					{area}
					<br />
					<br />
					<div className={classes.Notes}>
						{notes}
						<br />
						<br />
						{context}
						<br />
						<br />
					</div>
				</text>
			</div>
			<div className={classes.Samples}>{children}</div>
			<hr />
		</div>
	);
};

export default Update;
