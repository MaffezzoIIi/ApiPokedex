import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

import Dashboard from '../pages/Dashboard';

interface PokemonsParams{
    pokemon: string;
}

const Routes: React.FC = () => (
    <Route path="/" exact component={Dashboard} />
);

export default Routes;