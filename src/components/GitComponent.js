import React, { Component } from 'react';

     class GitComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
      }


      inputChanged = (event) => {
          this.setState({repo: event.target.value});
      }

      addTodo = (event) => {
          event.preventDefault();
          console.log("Nappia on painettu, ebin :D");
          fetch('https://api.github.com/search/repositories?q='+this.state.repo)
          .then((response) => response.json())
          .then((responseData) => {
              this.setState({
                  listItems: responseData.items
              });
          })
      }

      render() {
        const itemRows = this.state.listItems.map((list) =>
            <tr key={list.full_name}>
              <td>{list.full_name}</td>
              <td>{list.html_url}</td>
            </tr>
          )

        return (
            <div>
            <h2>Repositories</h2>
            <form onSubmit={this.addTodo}>
              <label>Search Repositories</label>
              <br/>
              <input type="text" onChange={this.inputChanged} value={this.state.repo}/>
              <input type="submit" value="Search"/>
              <br/>
            </form>
            <table>
              <tbody>
                <tr><th>Name</th><th>URL</th></tr>
                {itemRows}
              </tbody>
            </table>
          </div>
        );
      }
    }
export default GitComponent;