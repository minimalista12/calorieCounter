import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class InputCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {

const inputval ={this.state.data};

    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${inputval}`, {
   method: 'get',
   headers: {
     'x-app-id': '5be45963',
     'x-app-key': 'bf6622af5a08a533ae6f3a1d7fbbc9b9'
   }
 })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.branded;
          this.setState({ results });
        });
      })
      .catch(err => {
        console.log('Error', err);
      })
  }


handle(event)
{
  this.setState({
data:event.target.value
  });console.log(event.target.value);
}
  render() {
    return(
      <section>
        <div >
          <input type='text' onChange={this.handle.bind(this)} />

           {this.state.results.map((result, index) => {
            return (
  <div className="newMovies">

<div className="new">{result.food_name}</div>
</div>

            )
          })}
        </div>
      </section>
    );
  }
}

export default InputCall;