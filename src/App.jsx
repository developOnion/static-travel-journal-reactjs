import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

export default function App() {
	const articles = data.map((entry) => {
		return <Entry key={entry.id} entry={entry} />;
	});

	return (
		<>
			<Header />
			<div className="p-10 flex flex-col space-y-4">{articles}</div>
		</>
	);
}
