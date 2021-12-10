import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {
  Container,
  Card, CardText

} from 'reactstrap'

import { Routes, Route} from 'react-router-dom'

import Display from './crud/Display';
import NavbarTop from './NavbarTop';
import Create from './crud/Create'
import Update from './crud/Update'


export default class App extends  React.Component{
  render() {
    return (
      <div>
        <NavbarTop/>
        <Container>
          <Card className="mt-4">
            <CardText>
              <Routes>
                <Route path="/" element={<Display/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/update/:id" element={<Update/>}/>
              </Routes>
            </CardText>
          </Card>
        </Container>
      </div>
    );
  }
}
