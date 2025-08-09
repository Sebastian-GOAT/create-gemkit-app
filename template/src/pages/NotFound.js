import { H1 } from 'gemkit/elements';

export default function NotFound() {
    
    return H1({
        className: 'px-8 py-16 text-4xl text-center font-bold',
        children: ['Page Not Found']
    });
}