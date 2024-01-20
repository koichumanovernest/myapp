import { useState } from "react";
import "./App.css";
import Form from "./Components/form/Form";
import List from "./Components/list/List";

function App() {
	const [texst, setTexst] = useState([]);
	

	return (
		<div className="App">
			<Form texst={texst} setTexst={setTexst}/>
			<List texst={texst}/>
		</div>
	);
}

export default App;
