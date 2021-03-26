import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<span className={classes.CR}>
				© Portal To Blockchain Organization 2021
			</span>
			<div className={classes.FooterCol}>
				Contact
				<div className={classes.ContactForm}>
					<MailOutlineIcon className={classes.Icon} />
					<a
						href="mailto:test@gmail.com"
						className={classes.ContactLink}
					>
						Email
					</a>
				</div>
				<div className={classes.ContactForm}>
					<GitHubIcon className={classes.Icon} />
					<a
						href="https://github.com/HenrikMoe?tab=repositories"
						target="_blank"
						rel="noreferrer"
						className={classes.ContactLink}
					>
						Github
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
