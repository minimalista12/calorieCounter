import React from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const FormExample = () => (
  <Container>
    <Form>      
        <FormGroup tag="fieldset">
          <Label>Género</Label>
          <Row>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Masculino
            </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Femenino
            </Label>
            </FormGroup>
          </Col>
          </Row>
        </FormGroup>
     
      <Row>
        <Col>
          <FormGroup>
            <Label for="exampleEmail">Edad</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Estatura (cm) </Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Peso (kg) </Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleSelect">Actividad Física</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Persona Sedentaria</option>
          <option>Actividad Física 1-2 veces por semana</option>
          <option>Actividad Física 3-5 veces por semana</option>
          <option>Actividad Física 6-7 veces por semana</option>
          <option>Atleta</option>
        </Input>
      </FormGroup>
    </Form>
  </Container>
)
export default FormExample;