import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAZDqo0AC-ABKPZVrPZWBzLW1u0_cOSxO4';

//Create a new component. This component shoud produce
//some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take this component's generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));