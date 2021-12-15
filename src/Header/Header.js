import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import img from "../assets/image.jpg";
import EmailIcon from "@material-ui/icons/Email";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
	const [dropdown, setDropdown] = React.useState(null);

	const handleHoverEnter = () => {
		setDropdown("cryptocount");
	};

	const handleContactEnter = () => {
		setDropdown("contact");
	};

	const handleHoverLeave = () => {
		setDropdown(null);
	};

	let menu;

	if (dropdown === "cryptocount") {
		// Add blog hyperlinks here
		menu = (
			<div className={classes.WindowWrapper}>
				<div
					className={classes.BlogWindow}
					onMouseLeave={handleHoverLeave}
				>
					{/* <NavLink
						className={classes.WindowLink}
						to="/blogs/cryptocount"
						onClick={handleHoverLeave}
					>
						<div className={classes.Title}>CryptoCount</div>
						<p className={classes.Description}>
							Current status and progress on CryptoCount, a
							web-based app that counts block rewards.
						</p>
					</NavLink> */}
					<NavLink
						className={classes.WindowLink}
						to="/about"
						onClick={handleHoverLeave}
					>
						<div className={classes.Title}>About</div>
						<p className={classes.Description}>About CryptoCount</p>
					</NavLink>
					<hr />
						<NavLink
						className={classes.WindowLink}
						to="/client"
						onClick={handleHoverLeave}
					>
						<div className={classes.Title}>Client Module</div>
						<p className={classes.Description}>Front End Integation</p>
					</NavLink>
					<hr />
					<NavLink
						className={classes.WindowLink}
						to="/api"
						onClick={handleHoverLeave}
					>
						<div className={classes.Title}>API</div>
						<p className={classes.Description}>API documentation</p>
					</NavLink>
					<hr />
					<NavLink
						className={classes.WindowLink}
						to="/privacy"
						onClick={handleHoverLeave}
					>
						<div className={classes.Title}>Privacy</div>
						<p className={classes.Description}>Privacy Policy</p>
					</NavLink>
					<hr />
					<NavLink
						className={classes.WindowLink}
						to="/literature"
						onClick={handleHoverLeave}
					>
						<div className={classes.Title}>Resourses</div>
						<p className={classes.Description}>Academic Literature</p>
					</NavLink>
					<hr />
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
					<EmailIcon className={classes.Icon} />
					<div className={classes.Title}>Get in touch</div>
					<p className={classes.Description}>
						These are the best mediums to reach out to the PTBO
						team.
					</p>
					<hr />
					<div className={classes.ContactRow}>
						<div className={classes.ContactForm}>
							<MailOutlineIcon className={classes.Icon} />
							<a
								href="mailto:portaltoblockchain@gmail.com"
								className={classes.ContactLink}
							>
								Email
							</a>
						</div>
						<div className={classes.ContactForm}>
							<GitHubIcon className={classes.Icon} />
							<a
								href="https://github.com/PortalToBlockchainOrganization"
								target="_blank"
								rel="noreferrer"
								className={classes.ContactLink}
							>
								Github
							</a>
						</div>
					</div>
					<hr />
				</div>
			</div>
		);
	} else {
		menu = null;
	}

	return (
		<div>
			<header className={classes.Header}>
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
					<div
						className={classes.Link}
						onMouseEnter={handleHoverEnter}
					>
						CryptoCount
					</div>
					<div
						className={classes.Link}
						to="/resources"
						onMouseEnter={handleContactEnter}
					>
						Contact
					</div>
				</div>
			</header>
			{menu}
		</div>
	);
};

export default Header;
