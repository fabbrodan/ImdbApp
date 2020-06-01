import React, {Component} from 'react';

class ActionButton extends Component {
    constructor(props) {
        super(props);

        this.actionName = props.actionName;
    }

    render() {
        return (
            <input type="button" onClick={this.actionName}></input>
        )
    }
}

export default ActionButton;