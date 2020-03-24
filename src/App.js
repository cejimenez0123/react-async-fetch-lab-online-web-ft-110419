// create your App component here
import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json()).then(json => {
            this.setState(json)
        })
    }
    render(){
        return <div></div>
    }

}
export default App