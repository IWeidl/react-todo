import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      add: "Text"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ add: event.target.value });
  }
  handleSubmit(event) {
    if (this.state.add !== "") {
      this.setState({ todos: [...this.state.todos, this.state.add] });
      this.setState({ add: "" });
      event.preventDefault();
    }
  }
  deleteTodo(item, event) {
    event.preventDefault();
    let array = this.state.todos;
    let index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({ todos: array });
  }
  render() {
    return (
      <div className="form-group" name="todo-list">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <input
                type="text"
                name="todo-input"
                className="form-control"
                placeholder={this.state.add}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-4">
              <input
                type="Submit"
                className="btn btn-light form-control"
                value="Add"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="btn-group-vertical col-12">
            {this.state.todos.map((item, index) => (
              <div className="row">
                <button
                  type="button"
                  className="todo-list-item btn btn-secondary btn-block mt-1"
                  style={{ whiteSpace: "normal" }}
                  onClick={this.deleteTodo.bind(this, item)}
                  key={index}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
