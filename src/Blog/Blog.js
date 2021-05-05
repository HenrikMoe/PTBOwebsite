import React from "react";
import classes from "./Blog.module.css";

const Blog = (props) => {
	return (
		<div className={classes.Body}>
			<h1>{props.title}</h1>

			<div>
				{props.link ? (
					<a
						href="https://github.com/HenrikMoe/CryptoCount"
						target="_blank"
						rel="noreferrer"
					>
						<button className={classes.GitLink}>GitHub</button>
					</a>
				) : null}
			</div>

			<div className={classes.Content}>
				{props.about}
				<hr className={classes.AboutHR} />
			</div>
			<div className={classes.Content}>{props.children}</div>
			<span>© Portal To Blockchain Organization 2021</span>
		</div>
	);
};

export default Blog;
