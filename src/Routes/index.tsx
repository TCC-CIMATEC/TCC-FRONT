import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

import Main from '../pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}