import React, { Component } from 'react';
import ActionButton from './ActionButton';

class Card extends Component {

    constructor(props) {
        super(props);
        
        this.imgUrl = props.imgUrl;
        this.name = props.name;
        this.popularity = props.popularity;
        this.action = props.action;
    }

    render() {
        return(
            <tr>
                <td colSpan="2" className="imgCell">
                    <img src={this.imgUrl} alt={this.name + ".jpg"}></img>
                </td>
                <td className="nameCell">
                    <p>{this.name}</p>
                </td>
                <td className="popularityCell">
                    <p>{this.popularity}</p>
                </td>
                <td className="buttonCell">
                    <ActionButton identifier={this.name} actionName={this.action} textValue="Delete Row"/>
                </td>
            </tr>
        )
    }
}

export default Card;