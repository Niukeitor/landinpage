import React from "react";

export function NavBar() {
	return (
		<div className="container-fluid bg-dark">
			<div className="container">
				<nav className="navbar navbar-expand-lg text-white navbar-light">
					<a className="text-white" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse  navbar-collapse justify-content-end "
						id="navbarNav">
						<div className="navbar-nav ">
							<a className="nav-link active text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-link text-secondary" href="#">
								About
							</a>
							<a className="nav-link text-secondary" href="#">
								Servicies
							</a>
							<a className="nav-link text-secondary" href="#">
								Contact
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
