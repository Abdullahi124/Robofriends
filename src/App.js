import React from 'react'
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }


    render() {
        const { robots, searchField } = this.state
        const filterRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
            <h1 className='tc'>loading</h1> :


            (<div className='tc'>
                <h1 className='f1 '>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filterRobots} />
                </Scroll>
            </div>
            )

    }
}

export default App