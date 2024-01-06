import './App.css';

function App() {
    const avatarUrl = "https://avatars.githubusercontent.com/u/18039995?v=4";
    return (
        <div className="App">
            <header className="App-header">
                <img src={avatarUrl} alt="Zbigniew Czerwonka portreit"/>
                <p>Welcome on Scrum For Leaders!</p>
                <a className="App-link" href="https://scrum.org" target="_blank" rel="noreferrer">
                    For more learning go to scrum.org
                </a>
                <a className="github-link" href="https://github.com/zczerwon">
                    <img alt="github logo" src={"github-logo.png"}/>
                </a>
            </header>
        </div>
    );
}

export default App;
