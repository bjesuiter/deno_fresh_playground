import {HandlerContext} from '$fresh/server.ts';
import {PokeList, Pokemon} from '../components/PokeList.tsx';

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
		<div class="max-w-80 mx-auto">
			{/* Tailwind seems not to work here, for some reason */}
			{/* Also tried class={tw`text-5xl`} */}
			<h1 class="text-5xl text-red-500">Async Page Test</h1>
			<PokeList entries={pokeListWithImages}></PokeList>
			{/* <pre>{JSON.stringify(jsObj, null, '\t')}</pre> */}
		</div>
	);
}
