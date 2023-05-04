import Layout from "../components/Layout.tsx";

export default function ColumnsDemo() {
	return (
		<Layout>
			<div class="grid grid-cols-6 grid-rows-1 min-h-screen">
				<div>col 1</div>
				<div>col 2</div>
				<div>col 3</div>
				<div>col 4</div>
				<div>col 5</div>
				<div>col 6</div>
			</div>
		</Layout>
	);
}
