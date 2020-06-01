import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ActionButton from './ActionButton';

class Card extends Component {

    constructor(props) {
        super(props);

        this.imgUrl = props.imgUrl;
        this.name = props.name;
        this.popularity = props.popularity;
    }

    render() {
        return(
            <tr>
                <td className="imgCell">
                    <img src={this.imgUrl} alt={this.imgUrl}></img>
                </td>
                <td className="nameCell">
                    <p>{this.name}</p>
                </td>
                <td className="popularityCell">
                    <p>{this.popularity}</p>
                </td>
                <td className="buttonCell">
                    <p><ActionButton actionName={DeleteActor}/></p>
                </td>
            </tr>
        )
    }
}

let DeleteActor = () => {
    console.log("delete button pressed");
}

export default Card;