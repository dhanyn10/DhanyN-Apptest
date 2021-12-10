import React from "react";
import axios from "axios";

import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input } from 'reactstrap'
import { useParams } from "react-router";

export default function Display (){
    const { id } = useParams()
    let { firstName, lastName, photo } = ""
    let { age } = 0

    axios.get(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
    .then(res => {
        const fulldata = res.data.data
        localStorage.setItem('firstName', fulldata.firstName)
        localStorage.setItem('lastName', fulldata.lastName)
        localStorage.setItem('age', fulldata.age)
        localStorage.setItem('photo', fulldata.photo)
    })
    const setfn = (evt) => {
        firstName = evt
    }
    const setln = (evt) => {
        lastName = evt
    }
    const setAge = (evt) => {
        age = evt
    }
    const setPhoto = (evt) => {
        photo = evt
    }
    const updateData = () => {
        axios.put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
            firstName: firstName,
            lastName: lastName,
            age: age,
            photo: photo
        })
        localStorage.clear()
    }

    return(
        <Card>
            <CardHeader>Update Data</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Input placeholder={localStorage.getItem('firstName')} onChange={evt => setfn(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder={localStorage.getItem('lastName')} onChange={evt => setln(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="number" placeholder={localStorage.getItem('age')} onChange={evt => setAge(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder={localStorage.getItem('photo')} onChange={evt => setPhoto(evt.target.value)}/>
                    </FormGroup>
                    <Button onClick={updateData} >Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}