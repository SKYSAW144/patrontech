import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Patron Technology, Puzzle Portion;
                <input type={"file"}/>

            </header>
            <table>
                <thead>
                <tr>
                    <th colSpan={2}>Table headers</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
