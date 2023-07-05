import {Head} from '$fresh/runtime.ts';

export default function Home() {
	return (
		<>
			<div class="p-4 mx-auto max-w-screen-md">
				<h1 class="text-4xl font-bold">
					Deno Fresh Playground by &nbsp;
					<a
						class="text-blue-500 underline"
						target="_blank"
						href="https://github.com/bjesuiter/deno_fresh_playground"
					>
						bjesuiter
					</a>
				</h1>
				<ul class="my-5">
					<li>
						<a class="text-blue-500 underline" href="./columns-demo">
							Columns-Demo
						</a>
					</li>
					<li>
						<a class="text-blue-500 underline" href="./pokelist-async">
							PokéList (Async Page Component Test)
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
