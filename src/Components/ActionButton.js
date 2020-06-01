import React, {Component} from 'react';

class ActionButton extends Component {
    constructor(props) {
        super(props);

        this.actionName = props.actionName;
        this.textValue = props.textValue;
    }

    render() {
        return (
            <input type="button" onClick={this.actionName} value={this.textValue}></input>
        )
    }
}

export default ActionButton;