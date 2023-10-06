import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  );
}
