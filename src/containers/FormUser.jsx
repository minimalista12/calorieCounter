import React from 'react'
import { connect } from 'react-redux'
import { user } from '../actions'
import { viewForm } from '../actions'
import { Form, Text, Radio, RadioGroup } from 'react-form';


const validate_edad = edad => !edad || edad.trim() === '' ? 'Edad is a required field' : null

const validate_nombre = nombre => !nombre || nombre.trim() === '' ? 'Nombre is a required field' : null

const validate_apellido = apellido => !apellido || apellido.trim() === '' ? 'Apellido is a required field' : null

const FormUser = ({ dispatch }) => {
  let input
  const showResults = values => {
    dispatch(user(values));
    dispatch(viewForm(false));
  }

  return (
    <div>
      <Form onSubmit={showResults} >
        {formApi => (
          <div className="container-fluid">
            <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
              <RadioGroup field="gender">
                <label htmlFor="radio-input-male" className="mr-2">Masculino</label>
                <Radio value="male" id="radio-input-male" />
                <label htmlFor="radio-input-female" className="mr-2">Femenino</label>
                <Radio value="female" id="radio-input-female" />
              </RadioGroup>
              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <Text field="edad" id="edad" className="form-control" validate={validate_edad} placeholder='' />
              </div>
              <div className="form-group">
                <label htmlFor="peso">Peso</label>
                <Text field="peso" id="peso" className="form-control" placeholder='' />
              </div>
              <div className="form-group">
                <label htmlFor="Estatura">Estatura</label>
                <Text field="estatura" id="estatura" className="form-control" placeholder='' />
              </div>             
              <RadioGroup field="activity">
                <div>
                  <Radio value="1.2 " id="radio-input-sedentary" />
                  <label htmlFor="radio-input-sedentary" className="mr-2">Sedentaria</label>
                </div>
                <div>
                  <Radio value="1.375" id="radio-input-light" />
                  <label htmlFor="radio-input-light" className="mr-2">Actividad ligera (ejercicio 1 a 3 veces a la semana)</label>
                </div>
                <div>
                  <Radio value="1.55" id="radio-input-moderate" />
                  <label htmlFor="radio-input-moderate" className="mr-2">Actividad moderada (ejercicio 3 a 5 veces a la semana)</label>
                </div>
                <div>
                  <Radio value="1.725" id="radio-input-intense" />
                  <label htmlFor="radio-input-intense" className="mr-2">Actividad intensa (ejercicio 6 a 7 veces a la semana)</label>
                </div>
                <div>
                  <Radio value="1.9" id="radio-input-athlete" />
                  <label htmlFor="radio-input-athlete" className="mr-2">Atletas profesionales</label>
                </div>                
              </RadioGroup>           
              <button type="submit" className="btn btn-primary">Siguiente
              </button>
            </form>
          </div>
        )}
      </Form>
    </div>

  )
}

export default connect()(FormUser)