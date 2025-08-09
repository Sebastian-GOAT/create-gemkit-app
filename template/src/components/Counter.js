import { Div, H2, Button } from 'gemkit/elements';
import { withState } from 'gemkit/hooks';

export default function Counter() {

    const [count, setCount] = withState('count', 0);

    return Div({
        className: 'flex flex-col items-center gap-4',
        children: [
            H2({
                className: 'text-2xl',
                children: [`Count: ${count}`]
            }),
            Button({
                className: 'px-4 py-2 bg-green-700 hover:bg-green-400 text-white cursor-pointer rounded-xl duration-400 transition-colors',
                children: ['Increment'],
                onClick: () => setCount(count + 1)
            })
        ]
    });
}