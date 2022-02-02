import React from "react";
import classes from "./API.module.css";
import { ChevronDownIcon } from "@heroicons/react/solid";
const APISection = (props) => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<div>
			<div
				className={classes.Blockchain}
				onClick={() => setIsOpen(!isOpen)}
			>
				{props.title}
				<div className={isOpen ? classes.Chevron : classes.Chevron90}>
					<ChevronDownIcon />
				</div>
			</div>
			{isOpen && props.children}
		</div>
	);
};

export default APISection;
