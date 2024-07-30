/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import "@/index.css";

/* Layouts */
import RootLayout from "@/layouts/RootLayout";

/* Pages */
import HomePage from "@/pages/HomePage";

render(
	() => (
		<>
			<Router root={RootLayout}>
				<Route path="/" component={HomePage} />
			</Router>
		</>
	),
	document.getElementById("root")!,
);
