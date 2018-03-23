import React from 'react'
import PropTypes from 'prop-types'
import { viewForm } from '../actions'
import { addDaily } from '../actions'
import { sustraerCalories } from '../actions'
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var selectedOption = 0;
const DailyLimit = ({ user, dispatch, elementos }) => (
  <div className="container-fluid">
    <div>
      <h2>Daily Limit</h2>
      <div>
        <label > {user !== undefined && user.calorias !== undefined ? user.calorias : null}</label>
      </div> 

    </div>
    <div>

      <Select className="anchoSelect"
        name="form-field-name"
        value={0}
        onChange={(selectedOption) => {
          dispatch(addDaily(selectedOption));
          dispatch(sustraerCalories({ dailyCalories: user.calorias, foodCalories: selectedOption.value }));
          console.log(`Selected: ${selectedOption.label}`);
        }}
        options={[
          { value: 100, label: 'CARAOTA' },
          { value: 300, label: 'MANGO' },
          { value: 100, label: 'GUANABANA' },
          { value: 300, label: 'LECHOZA' },
          { value: 100, label: 'FRESA' },
          { value: 300, label: 'MELOCOTON' }
        ]}
      />
    </div>
    <div>
      <ul>
        {elementos.map(element =>
          <li>
            {element.label}
          </li>
        )}
      </ul>
    </div>

    <div>
      <button onClick={() => window.location = window.location.protocol + '//' + window.location.host + '/calorieCounter/#/datosUser'}>Atras</button>
      <button onChange={(selectedOption) => {
        dispatch(addDaily(selectedOption));
        console.log(`Selected: ${selectedOption.label}`);
      }} >Restan</button>
    </div>
  </div>

)

export default DailyLimit;