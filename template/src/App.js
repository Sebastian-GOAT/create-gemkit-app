import { onMount } from './utils/hooks/hooks.js';
import { HashRouter } from './utils/router/Router.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

export default function App() {

    onMount(() => {
        document.title = 'My Gemkit Application';
    });
    
    return HashRouter(
        {
            '/': Home
        },
        {},
        NotFound
    );
}