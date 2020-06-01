import React, {Component} from 'react';

class ActionButton extends Component {
    constructor(props) {
        super(props);

        this.actionName = props.actionName;
        this.textValue = props.textValue;
        this.identifier = props.identifier;
    }

    render() {
        return (
            <input id={this.identifier} type="button" onClick={this.actionName.bind(this, this.identifier)} value={this.textValue}></input>
        )
    }
}

export default ActionButton;