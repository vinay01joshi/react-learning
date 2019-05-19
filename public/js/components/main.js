import React from 'react';
import API from '../API';

export default class Main extends React.Component {

    componentDidMount(){
        // Run After component mount in the Dom
        API.fetchLinks();
    }

    componentWillMount() {
        // Run before the component mount int the Dom
    }

    render() {
        //return <h3> Hello React Component with Cool Features ! </h3>

        return (
            <div>
            <h3>Links</h3>
            <ul>
                <li>link </li>
                <li>link </li>
                <li>link </li>
            </ul>
            </div>
        );
    }

}
 