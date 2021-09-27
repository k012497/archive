<script lang="ts">
	import { Router, Route } from "svelte-navigator";

	import Home from "./routes/Home.svelte";
	import Contact from "./routes/Contact.svelte";
	import Project from "./routes/Project.svelte";
</script>

<Router>
	<Route path="/">
		<Home />
	</Route>
	<Route path="/contact">
		<Contact />
	</Route>
	<Route path="/project">
		<Project />
	</Route>
</Router>