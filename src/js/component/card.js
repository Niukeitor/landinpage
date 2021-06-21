import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col-12 col-sm-6 col-md-3 my-3 my-md-0">
			<div className="card p-0 m-0">
				<img
					src={props.imagen}
					className="card-img-top w-100 "
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title text-center">{props.titulo}</h5>
					<p className="card-text text-center">{props.descripcion}</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href={props.buttonURL} className="btn btn-primary">
						Click
					</a>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	titulo: PropTypes.string,
	descripcion: PropTypes.string,
	imagen: PropTypes.string,
	buttonURL: PropTypes.string
};
