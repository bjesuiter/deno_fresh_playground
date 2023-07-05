import {HandlerContext} from '$fresh/server.ts';
import {PokeList, Pokemon} from '../components/PokeList.tsx';
import Counter from '../islands/Counter.tsx';

/**
 *
 * @param req Request
 * @param ctx HandlerContext
 * @returns
 */
export default async function AsyncPagePoc(req: Request, ctx: HandlerContext) {
	console.log(`In AsyncPageTest`);
	console.log(`\n ---- \n\n Req Object: `, req);
	console.log(`\n ---- \n\n Context Object: `, ctx);

	// const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);

	// const jsObj = await res.json();
	const pokeList = (await res.json()).results as Pokemon[];

	const pokeListWithImagesAsync = pokeList.map(async poke => {
		const res = await fetch(poke.url);
		const body = await res.json();

		// https://pokeapi.co/api/v2/pokemon/1/
		poke.imgUrl = body.sprites.other.home.front_default;
		return poke;
	});

	const pokeListWithImages = await Promise.all(pokeListWithImagesAsync);

	return (
		<div class="m-8 px-8 border-0 border-gray-400 rounded w-3/4">
			{/* Tailwind seems not to work here, for some reason */}
			{/* Also tried class={tw`text-5xl`} */}
			{/* <h1 class="text-5xl text-teal-500">Async Page Test</h1> */}
			<h1 class="text-5xl text-lime-500">Async Page Test (lime)</h1>
			<h1 class="text-5xl text-green-500">Async Page Test (green)</h1>

			<h2 class="text-3xl mt-6 mb-2"> Counter (Islands Test)</h2>
			<Counter start={4}></Counter>

			<h2 class="text-3xl mt-6 mb-2">PokéList (Server Component Test)</h2>
			<PokeList entries={pokeListWithImages}></PokeList>
			{/* <pre>{JSON.stringify(jsObj, null, '\t')}</pre> */}
		</div>
	);
}
