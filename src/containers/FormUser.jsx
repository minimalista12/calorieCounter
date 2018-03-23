import React from 'react'
import { connect } from 'react-redux'
import { user } from '../actions'
import { viewForm } from '../actions'
import { Form, Text, Radio, RadioGroup } from 'react-form';
import { Row } from 'react-bootstrap';


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
      <Row>
        <div className="titleData">
          <h2>Ingresa tus datos</h2>
        </div>
        <Form onSubmit={showResults} >
          {formApi => (
            <div className="container-fluid">
              <form onSubmit={formApi.submitForm} id="form1">
                <div className="userGender">
                  <RadioGroup field="gender">
                    <label htmlFor="radio-input-male" className="mr-2">Masculino</label>
                    <Radio value="male" id="radio-input-male" />
                    <label htmlFor="radio-input-female" className="mr-2">Femenino</label>
                    <Radio value="female" id="radio-input-female" />
                  </RadioGroup>
                </div>
                <div className="dataInputs">
                  <div className="form-group ingresandoData">
                    <label htmlFor="edad">Edad</label>
                    <Text field="edad" id="edad" className="form-control anchoInput" validate={validate_edad} placeholder='' />
                  </div>
                  <div className="form-group ingresandoData">
                    <label htmlFor="peso">Peso (kg)</label>
                    <Text field="peso" id="peso" className="form-control anchoInput" placeholder='' />
                  </div>
                  <div className="form-group ingresandoData">
                    <label htmlFor="Estatura">Estatura (cm)</label>
                    <Text field="estatura" id="estatura" className="form-control anchoInput" placeholder='' />
                  </div>
                </div>
                <div className="activity">
                  <h4>Tipo de Actividad</h4>
                  <div className="activityOptions">
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
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Siguiente
              </button>
              </form>
            </div>
          )}
        </Form>
      </Row>
    </div>

  )
}

export default connect()(FormUser)