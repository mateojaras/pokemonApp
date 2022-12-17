import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
	pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
	return (
		<>
			<Layout tittle="Hola mundo">
				<Grid.Container gap={2} justify="flex-start">
					{pokemons.map((pokemon) => (
						<PokemonCard pokemon={pokemon} key={pokemon.id} />
					))}
				</Grid.Container>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	const pokemons: SmallPokemon[] = data?.results.map((pokemon, index) => {
		return {
			...pokemon,
			id: index + 1,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				index + 1
			}.svg`,
		};
	});

	return {
		props: { pokemons: pokemons },
	};
};

export default Home;
