import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import img from "../assets/image.jpg";
const Header = () => {
	const [dropdown, setDropdown] = React.useState(null);

	const handleHoverEnter = () => {
		setDropdown("blogs");
	};

	const handleResEnter = () => {
		setDropdown("resources");
	};

	const handleContactEnter = () => {
		setDropdown("contact");
	};

	const handleHoverLeave = () => {
		setDropdown(null);
	};

	let menu;

	if (dropdown === "blogs") {
		menu = (
			<div className={classes.WindowWrapper}>
				<div
					className={classes.BlogWindow}
					onMouseLeave={handleHoverLeave}
				>
					Blogs
				</div>
			</div>
		);
	} else if (dropdown === "resources") {
		menu = (
			<div className={classes.WindowWrapper}>
				<div
					className={classes.BlogWindow}
					onMouseLeave={handleHoverLeave}
				>
					Resources
				</div>
			</div>
		);
	} else if (dropdown === "contact") {
		menu = (
			<div className={classes.WindowWrapper}>
				<div
					className={classes.BlogWindow}
					onMouseLeave={handleHoverLeave}
				>
					Contact
				</div>
			</div>
		);
	} else {
		menu = null;
	}

	return (
		<div>
			<div className={classes.Header}>
				<NavLink
					className={classes.Logo}
					to="/"
					onMouseEnter={handleHoverLeave}
				>
					<img src={img} alt="logo" />
					<span className={classes.Name}>
						The Portal To Blockchain
					</span>
				</NavLink>
				<div className={classes.NavGroup}>
					<NavLink
						className={classes.Link}
						to="/blogs"
						onMouseEnter={handleHoverEnter}
					>
						Blogs
					</NavLink>
					<NavLink
						className={classes.Link}
						to="/resources"
						onMouseEnter={handleResEnter}
					>
						Resources
					</NavLink>
					<NavLink
						className={classes.Link}
						to="/resources"
						onMouseEnter={handleContactEnter}
					>
						Contact
					</NavLink>
				</div>
			</div>
			{menu}
		</div>
	);
};

export default Header;
