import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.footerText = props.footerText;
    }

    render() {
        return (
            <div className="Footer">
                <p>{this.footerText}</p>
            </div>
        )
    }
}

export default Footer;