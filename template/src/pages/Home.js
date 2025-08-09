import { Div, H1 } from 'gemkit/elements';
import Counter from '../components/Counter.js';

export default function Home() {
    
    return Div({
        className: 'px-8 py-16',
        children: [
            H1({
                className: 'mb-12 text-4xl text-center font-bold',
                children: ['Home Page']
            }),
            Counter()
        ]
    });
}