import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import Discord from "@material-ui/icons/Group";
import Twitter from "@material-ui/icons/Twitter";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<span className={classes.CR}>
				© Portal To Blockchain Organization Technologies 2023
			</span>
			<div className={classes.FooterCol}>
				<div className={classes.ContactForm}>
					<MailOutlineIcon className={classes.Icon} />
					<a
						href="mailto:henrik@ptbotech.org"
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
				<div className={classes.ContactForm}>
					<Discord className={classes.Icon} />
					<a
						href="https://discord.gg/a4PhFgBf"
						target="_blank"
						rel="noreferrer"
						className={classes.ContactLink}
					>
						Discord
					</a>
				</div>
				<div className={classes.ContactForm}>
						<Twitter className={classes.Icon} />
						<a
							href="https://twitter.com/CryptoCountApp"
							target="_blank"
							rel="noreferrer"
							className={classes.ContactLink}
						>
							Twitter
						</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
