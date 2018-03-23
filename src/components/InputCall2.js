import React, { Component } from 'react'

export class InputCall2 extends Component {
  state = {
    // lo que el usuario pone en el input
    inputval:'' 
  }

  _handleChange = (e) => {
    // actualiza el estado , toma el valor del input
    this.setState({inputval: e.target.value}) 
  }
  _handleSubmit = (e) => {
    // previene el evento nativo del submit
    e.preventDefault() 
    // guardamos en la variable el valor del input
    const { inputval } = this.state 

    // hacemos llamado a la API con la variable
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
        console.log(results)
        });
      })
      .catch(err => {
        console.log('Error', err);
      })
    };
  
  render() {
    //onchange a input para monitoriar los cambios y pasamos el evento handlechange
    return( 
      // a traves de onSubmit pasamos el evento handleSubmit (se ejecuta cada vez que hacemos submit un llamado a la API)
      <form onSubmit = { this._handleSubmit }> 
        <div className ="input-append"> 
          <input onChange ={ this._handleChange } type="text" className="span2"  size="120"placeholder="Agrega tu alimento aquí" />
          <button className ="btn">Agregar</button>

       </div>
      </form>
    )
           {this.state.results.map((result, index) => {
            return (
  <div className="newFood">
<div className="new">{result.food_name}</div>
</div>

            )
          })}

  }
}

export default InputCall2;