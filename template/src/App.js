import { HashRouter } from 'gemkit/router';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

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