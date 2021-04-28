import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from '../containers/home';



export default () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

