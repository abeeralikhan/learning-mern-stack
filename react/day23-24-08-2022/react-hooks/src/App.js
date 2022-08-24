import './App.css';
import Counter from './Counter';
import Toggler from './Toggler';
import SimpleForm from './SimpleForm';

export default function App(props) {
	return (
		<div className="App">
			<h1>Helloo from funtional component!!!</h1>
			<Counter />
			<Toggler />
			<SimpleForm />
		</div>
	);
}
