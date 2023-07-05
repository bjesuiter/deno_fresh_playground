export type Pokemon = {
	name: string;
	url: string;
	imgUrl?: string;
};

export function PokeList({entries}: {entries: Pokemon[]}) {
	return (
		<>
			<ul class="my-8 w-56">
				{entries.map(poke => (
					<li class="relative m-4 p-6 shadow-xl text-center border-2 border-gray-400 rounded">
						{poke.imgUrl && <img src={poke.imgUrl}></img>}
						<a class="absolute top-2 left-0 right-0 capitalize" href={poke.url}>
							{poke.name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
