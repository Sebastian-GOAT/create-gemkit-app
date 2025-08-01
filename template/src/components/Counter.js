import { Div, H2, Button } from 'gemkit/elements';
import { ReactiveState } from 'gemkit/hooks';

export default function Counter() {

    const [count, setCount] = ReactiveState('count', 0);

    return Div({
        children: [
            H2({
                children: [`Count: ${count}`]
            }),
            Button({
                children: ['Increment'],
                onClick: () => setCount(count + 1)
            })
        ]
    });
}