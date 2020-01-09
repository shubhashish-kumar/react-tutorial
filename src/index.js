import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//example 1 for rendering of "Hello React!" using render method from Component
// import App from './example1/App'
//example 2 for rendering of Table content using render method from Class Component
// import App from './example2/App'
//example 3 for rendering of Table content using render method from Simple Component
// import App from './example3/App'
//example 4 for rendering of Table content using properties
// import App from './example4/App'
//example 5 for rendering of Table content with state
// import App from './example5/App'
//example 6 for rendering of Table content with form submission
// import App from './example6/App'
//example 7 for pulling in API data
// import App from './example7/Api'
// example 8 for JSX
// import App from './example8/App'
// example 9 for React Router: Basic
// import App from './example9/App'
// example 10 for React Router: Nested
// import App from './example10/App'
// example 11 for React Router: Url Parameters
// import App from './example11/App'
// example 12 for React Router: Redirects(Auth)
// import App from './example12/App'
// example 13 for React Router: Custom Link
// import App from './example13/App'
// example 14 for React Router: Preventing transitions
// import App from './example14/App'
// example 15 for React Router: No Match (404)
import App from './example15/App'
// example 16 for React Router: Recursive Paths
// import App from './example16/App'
// example 17 for React Router: Sidebar
// import App from './example17/App'
// example 18 for React Router: Animated Transitions
// import App from './example18/App'
// example 19 for React Router: Route Config
// import App from './example19/App'
// example 20 for React Router: Modal Gallery
// import App from './example20/App'
// example 21 for React Router: Static Router Context
// import App from './example21/App'
// example 22 for React Router: Query Parameters
// import App from './example22/App'


//Example 0 for simple rendering of "Hello React!" using render method from Component
/*class App extends Component {
    render() {
        return <div className="App"> <h1>Hello React!</h1> </div>
    }
}*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
