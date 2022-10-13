<script>
  import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
  <main>
    <Route path="/">
      <h1>Home Page</h1>
    </Route>
    <Route path="about">
      <h1>About Page</h1>
    </Route>
  </main>
</Router>
