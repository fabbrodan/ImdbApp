import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ActionButton from './ActionButton';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                </div>
                <table>
                    <thead>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Popularity</td>
                        <td>Action</td>
                    </thead>
                    <Row imgUrl="abc.com" name="Dummy Name" popularity="10.057465340"/>
                </table>
            </div>
        )
    }

}

class Row extends Component {

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
                    <img src={this.imgUrl} alt="placeholder"></img>
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