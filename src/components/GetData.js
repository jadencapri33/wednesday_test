import React from "react";
import Axios from 'axios'

class GetData extends React.Component {

  constructor(props) {
    super(props);

    console.log("hello from getData component");

    this.state = { todos: [] };
  }

  getData = (event) => {
    // https://jsonplaceholder.typicode.com/todos/1
    console.log("getData");

    Axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then( res=> {
        this.setState( {todos: [res.data]})
    }

    )
  }

  render() {
    return (
      <div>
        <p>Hello World</p>

        <ul>
            {  this.state.todos.map ( (myitem,i) => { 

                return <ShowData  key={i} title={myitem.title}  userid={myitem.userId} />
            })}
        </ul>
        <button onClick={this.getData}>Get Data</button>
      </div>
    );
  }
}


export class ShowData extends React.Component {

    render(){
        return (
        <p>{ this.props.title} { this.props.userid} </p>
        )
    }
}


export default GetData;
