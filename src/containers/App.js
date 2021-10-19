import React from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import './App.css';

//React lifecycle methods
//Changed the function to a class syntax to use 'this.state'
class App extends React.Component{
    constructor() {
        super()
        //Two states used to render and pass to props to these components
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        //fetching the website json data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
        
    }

    //A function that I made that shows what is being typed on the search bar
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        //Destructing
        const {robots, searchfield} = this.state;
        //With the information from the CardList, filter robots according to what is inputted in the search bar
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        //If you have multiple users and it takes a while to load the page, you can do an if statement that states the page is loading
        //Using ternary
        return !robots.length ?
            <h1>Loading</h1> :
            (
             <div className="tc">
                <h1 className="f1 light-green">
                    RoboFriends 
                </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
            </div>
            );
    }
}

export default App;