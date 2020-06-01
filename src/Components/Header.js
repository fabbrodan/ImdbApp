import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.title = props.title;
    }

    render() {
        return(
            <div className="Header">
                <h1>{this.title}</h1>
            </div>
        )
    }
}

export default Header;