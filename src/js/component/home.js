import React from "react";

import { NavBar } from "./navBar.js";
import { Jumbotron } from "./jumbotroon";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	let personas = [
		{
			titulo: "Luis Suarez",
			descripcion:
				"Kylian Mbappé Lottin (pronunciación en francés: /kiljan (ɛ)mbape lɔtɛ̃/; París, Isla de Francia, 20 de diciembre de 1998) es un futbolista francés de ascendencia argelina y camerunesa. Juega como delantero y su equipo actual es el París Saint-Germain Football Club de la Ligue 1 de Francia. Es internacional absoluto con la selección de Francia desde 2017.",
			imagen:
				"https://www.soyfutbol.com/__export/1587234511842/sites/debate/img/2020/04/18/evr6hdtxgaaevea_crop1587234511441.jpg_943222218.jpg",
			buttonURL: "https://es.wikipedia.org/wiki/Kylian_Mbapp%C3%A9"
		},
		{
			titulo: "Alan Walker",
			descripcion:
				"Alan Olav Walker (n. Northampton, Inglaterra; 24 de agosto de 1997) es un DJ, compositor y productor discográfico británico-noruego. Entre sus más grandes éxitos se encuentran «Alone», «The Spectre», «Faded», «Sing Me to Sleep», «Ignite», «Diamond Heart», «Darkside», «Force», «On My Way», «Tired», «Alone, Pt. II», «All Falls Down», «Lily», entre otros. ",
			imagen:
				"https://i.pinimg.com/originals/d4/a4/e5/d4a4e53ef5082b6c912b8c8cc859f703.jpg",
			buttonURL: "https://es.wikipedia.org/wiki/Alan_Walker"
		},
		{
			titulo: "Cristiano",
			descripcion:
				"Cristiano Ronaldo dos Santos Aveiro (pronunciación en portugués: /kɾiʃˈtiɐnu ʁuˈnaɫdu/; Funchal, Madeira; 5 de febrero de 1985), más conocido como Cristiano Ronaldo, es un futbolista portugués que juega como delantero en la Juventus F. C. de la Serie A de Italia y en la selección de Portugal, de la cual es su capitán.",
			imagen:
				"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
			buttonURL: "https://es.wikipedia.org/wiki/Cristiano_Ronaldo"
		},
		{
			titulo: "Carlos Gardel",
			descripcion:
				"Carlos Gardel fue un cantante, compositor y actor de cine uruguayo. Es el más conocido representante (del género) en la historia del tango. Iniciador y máximo exponente del tango canción,3​ fue uno de los intérpretes más importantes de la música popular mundial en la primera mitad del siglo xx,4​ por la calidad de su voz, por la cantidad de discos vendidos (como cantante y como compositor)",
			imagen:
				"https://upload.wikimedia.org/wikipedia/commons/f/fa/Gardel_color.jpg",
			buttonURL: "https://es.wikipedia.org/wiki/Carlos_Gardel"
		}
	];

	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="container ">
				<div className="row  justify-content-center">
					{personas.map((element, i) => {
						return (
							<Card
								key={i}
								titulo={element.titulo}
								descripcion={element.descripcion}
								imagen={element.imagen}
								buttonURL={element.buttonURL}
							/>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}
