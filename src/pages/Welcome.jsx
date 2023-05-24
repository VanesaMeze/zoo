import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <form>
      <h1>
        <span className="h1">WELCOME</span>
      </h1>
      <div>
        <Link to={"animals"}>Animals</Link>
      </div>
    </form>
  );
};
export default Welcome;
