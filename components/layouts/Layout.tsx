import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

interface Props {
	children: JSX.Element | JSX.Element[];
	tittle?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, tittle }: Props) => {
	return (
		<>
			<Head>
				<title>{tittle || "Pokemon App"}</title>
				<meta name="author" content="Fernando Herrera" />
				<meta name="description" content="Informacion sobre el pokemon XXXXX" />
				<meta name="keywords" content="XXXXX, pokemon, pokedex" />
				<meta property="og:title" content={`Informacion sobre ${tittle}`} />
				<meta
					property="og:description"
					content={`Esta es la pagina sobre ${tittle}`}
				/>
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar></Navbar>

			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
