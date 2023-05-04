import {Head} from '$fresh/runtime.ts';
import type {ComponentChildren} from 'preact';

type LayoutProps = {
	children: ComponentChildren;
};

export default function Layout(props: LayoutProps) {
	return (
		<>
			<Head>
				<title>Fresh App</title>
			</Head>
			<header>
				<nav>
					<a href="/"> Home </a>
				</nav>
			</header>
			<main>{props.children}</main>
		</>
	);
}
