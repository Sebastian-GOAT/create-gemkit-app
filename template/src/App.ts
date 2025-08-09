import { HashRouter } from 'gemkit/router';
import Home from './pages/Home.ts';
import NotFound from './pages/NotFound.ts';

export default function App() {

    document.title = 'My Gemkit Application';
    
    return HashRouter(
        {
            '/': Home
        },
        {},
        NotFound
    );
}