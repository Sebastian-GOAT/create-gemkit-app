import { Div, H1 } from 'gemkit/elements';
import Counter from '../components/Counter.js';

export default function Home() {
    
    return Div({
        children: [
            H1({
                children: ['Home Page']
            }),
            Counter()
        ]
    });
}