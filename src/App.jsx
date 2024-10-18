import "./App.css";
import List from "./components/List";

function App() {
    return (
        <>
            <div className="m-auto flex-col content-center justify-center text-center max-w-xl">
                <h1 className="text-lg font-medium">Rick and Morty</h1>
                <p className="text-[8px]">design by triple_force</p>
                <List />
            </div>
        </>
    );
}

export default App;
