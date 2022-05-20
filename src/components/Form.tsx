import React, {Component} from 'react';


class Form extends Component<{}, {}> {

    handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        console.log(e.currentTarget)
    };

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Submitted")
    };

    handleCopy(e: React.ClipboardEvent<HTMLInputElement>) {
        console.log("Copied")
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Sample Text:

                    <input onFocus={this.handleFocus} onCopy={this.handleCopy} type="text"/>
                </label>

                <button>Submit</button>
            </form>
        )
    }
}

export default Form;