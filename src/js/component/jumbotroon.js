import React from "react";

export function Jumbotron() {
	return (
		<div className="container-fluid">
			<div className="container d-flex justify-content-center">
				<div className="jumbotron pt-2 ">
					<h1 className="display-3">A Warm Welcome!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</div>
			</div>
		</div>
	);
}
