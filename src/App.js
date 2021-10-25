import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Search from "./pages/search/search";
import TeamBuilder from "./pages/teamBuilder/teamBuilder";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Favorites from "./pages/favorites/Favorites";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Search User</Link>
                                </li>
                                <li>
                                    <Link to="/team">
                                        3 Developer Team Builder
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/fav">Favorites</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/fav">
                                <Favorites />
                            </Route>
                            <Route path="/team">
                                <TeamBuilder />
                            </Route>
                            <Route path="/">
                                <Search />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
