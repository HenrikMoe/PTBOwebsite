import React from "react";
import classes from "./Home.module.css";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/portal.json";
const Home = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className={classes.Home}>
			<div className={classes.Content}>
				<div className={classes.Text}>
					<h3>Welcome to</h3>
					<h2>The Portal To Blockchain Organization (PTBO)</h2>
					<text>
						We are working to develop a symmetrical structure to
						organize better integrate blockchain technology into our
						society.
						<br />
						<br />
						We currently specialize in blockchain interfacing
						applications.
					</text>
				</div>
				<Lottie
					className={classes.Vid}
					options={defaultOptions}
					height={400}
					width={400}
					isClickToPauseDisabled={true}
				/>
			</div>
		</div>
	);
};

export default Home;
