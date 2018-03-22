import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { user } from '../actions'
import { viewForm } from '../actions'
import { Form, Text } from 'react-form';


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
                <div className="form-group">
                  <label htmlFor="edad">Edad</label>
                  <Text field="edad" id="edad" className="form-control" validate={validate_edad} placeholder='Edad Cliente'/>
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <Text field="nombre" id="nombre" className="form-control" validate={validate_nombre} placeholder='Nombre Cliente'/>
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellido</label>
                  <Text field="apellido" id="apellido" className="form-control" validate={validate_apellido} placeholder='Apellido Cliente'/>
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Peso</label>
                  <Text field="peso" id="peso" className="form-control" placeholder='Peso Cliente'/>
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Estatura</label>
                  <Text field="estatura" id="estatura" className="form-control" placeholder='Estatura Cliente'/>
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">FA</label>
                  <Text field="fa" id="fa" className="form-control" placeholder='FA Cliente'/>
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Sexo</label>
                  <Text field="sexo" id="sexo" className="form-control" placeholder='Sexo Cliente'/>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            
          )}
      </Form>
    </div>
          
  )
}

export default connect()(FormUser)