import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "abdullah",
      rollNumber: 5216,
      inst: "saylani",
      subject: ["HTML", "CSS", "JAVASCRIPT"],
      score: {
        html: 74,
        css: 56,
        javascript: 54
      },

      second: 0,
      counter: 0,
      // button: <button onClick={this.showMuzammilData.bind(this)}>Show Muzammil Data</button>,
      currentUser: "Abdullah",
      newUser: "",
      todos: [],
      flag: false

    }
    this.showAbdullahData = this.showAbdullahData.bind(this);
    this.showMuzammilData = this.showMuzammilData.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.clearTodo = this.clearTodo.bind(this)
    this.saveTodo = this.saveTodo.bind(this);

    // this.indDelte = this.indDelte.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      })

      // if (this.state.second === 10) {
      //   this.setState({
      //     userName: "Muzammil"
      //   })
      // }
    }, 1000);

  }

  showMuzammilData() {
    console.log("hello", this)
    this.setState({
      userName: "muzammil",
      rollNumber: 5215,
      score: {
        html: 72,
        css: 60,
        javascript: 93
      },
      // button: <button onClick={this.showAbdullahData.bind(this)}>Show abdullah Data</button>,
      currentUser: "Muzammil"
    })
  }
  showAbdullahData() {
    // console.log("hello",this)
    this.setState({
      userName: "abdullah",
      rollNumber: 5216,
      inst: "saylani",
      subject: ["HTML", "CSS", "JAVASCRIPT"],
      score: {
        html: 74,
        css: 56,
        javascript: 54
      },
      // button: <button onClick={this.showMuzammilData.bind(this)}>Show muzammil Data</button>,
      currentUser: "Abdullah"


    })
  }
  increament() {
    // console.log("increament", this)
    this.setState({
      counter: this.state.counter + 1
    })
    if (this.state.counter === 10) {
      alert("over limit")
      this.setState({ counter: 0 })
    }

  }
  decreament() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  formHandler(event) {
    this.setState({
      newUser: event.target.value
    })

  }

  addTodo(eve) {
    if (this.state.newUser === "") {
      alert("todo is empty");
    }
    else {
      let todosClone = this.state.todos;
      todosClone.push(this.state.newUser);

      this.setState({
        todos: todosClone,
        newUser: ''
      })


    }


  };

  clearTodo(event) {

    if (this.state.todos.length === 0) {
      alert("todo is already clear");
    }
    else {

      this.setState({
        todos: [],
        newUser: ''
      })


    }


  };

  indDelte(id) {
    let cloneArray = this.state.todos;
    cloneArray.splice(id, 1)
    this.setState({
      todos: cloneArray

    })
  }

  editTodo(id) {
    let cloneEditItem = this.state.todos[id];
    this.setState({
      flag: true,
      newUser: cloneEditItem,
      editIndex: id
    })
  }


  saveTodo() {
    let updatedVal = this.state.newUser;
    let cloneTodo = this.state.todos;
    let ind = this.state.editIndex;
    cloneTodo.splice(ind, 1, updatedVal);

    this.setState({
      todos: cloneTodo,
      flag: false,
      newUser: ""
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.userName} to React</h1>
        </header>
        <p>My namei is {this.state.userName}</p>
        <p>Roll Number {this.state.rollNumber}</p>
        <p>Inst Name {this.state.inst}</p>
        <p>My {this.state.subject[0]} score is {this.state.score.html}</p>
        <p>My {this.state.subject[1]} score is {this.state.score.css}</p>
        <p>My {this.state.subject[2]} score is {this.state.score.javascript}</p>
        <p>Second {this.state.second} </p>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {
          (this.state.currentUser === "Abdullah") ?
            (<button onClick={this.showMuzammilData}>Show Muzammil Data</button>) :
            (<button onClick={this.showAbdullahData}>Show Abdullah Data</button>)
        }

        <br />
        <br />
        <br />


        <button onClick={this.increament.bind(this)}>+</button>
        <span>
          {' ' + this.state.counter + ' '}
        </span>
        <button onClick={this.decreament.bind(this)}>-</button>

        <br />
        <br />
        <br />


        <input type="text" name="userName" value={this.state.newUser} onChange={this.formHandler} /><br />
        {(this.state.flag === true) ?
          (<button onClick={this.saveTodo}>Save todo</button>) :
          (<button onClick={this.addTodo}>Add todo</button>
          )}

        <button onClick={this.clearTodo}>Clear todo</button>
        <ol>
          {
            this.state.todos.map((todos, id) => {
              return (
                <li key={id}>{todos}
                  <button onClick={this.indDelte.bind(this, id)}>del</button>
                  <button onClick={this.editTodo.bind(this, id)}>Edit</button>

                </li>
              )
            })
          }
        </ol>

      </div>
    );
  }
}

export default App;
