import React, {Component} from 'react';

type CounterState = {
    readonly count: number
};

type CounterProps = {};

class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState(({count}) => {
                return {
                    count: ++count
                }
            }
        )
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click + 1</button>
            </div>
        )
    }
}

export default Counter;