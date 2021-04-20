import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import FaleConosco from '../pages/Fale-conosco';

import Main from '../pages/Main';
import Sobre from '../pages/Sobre';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre" exact component={Sobre} />
                <Route path="/fale-conosco" exact component={FaleConosco} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}