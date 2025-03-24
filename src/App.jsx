import { Link } from "react-router-dom";
function App() {

  return (
    <>
      <Link to="/register" className="cursor-pointer" >register</Link>
      <br />
      <Link to="/login" className="cursor-pointer" >login</Link>
    </>
  );
}

export default App;
