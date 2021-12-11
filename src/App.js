import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {
  Container
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
        <Container className='mt-4'>
          <Routes>
            <Route path="/" element={<Display/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/update/:id" element={<Update/>}/>
          </Routes>
        </Container>
      </div>
    );
  }
}
