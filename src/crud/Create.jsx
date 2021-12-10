import React from "react";
import axios from "axios";

import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input } from 'reactstrap'

export default class Display extends React.Component{

    state = {
        fulldata: [],
        firstName: '',
        lastName: '',
        age: 0,
        photo: ''
    }

    componentDidMount() {
        axios.get("https://simple-contact-crud.herokuapp.com/contact")
        .then(res => {
            const fulldata = res.data.data
            this.setState({fulldata})
        })
    }

    createFirstName(evt) {
        this.setState({
            firstName: evt.target.value
        })
    }
    createLastName(evt) {
        this.setState({
            lastName: evt.target.value
        })
    }
    createAge(evt) {
        this.setState({
            age: evt.target.value
        })
    }
    createPhoto(evt) {
        this.setState({
            photo: evt.target.value
        })
    }

    postData = () => {
        axios.post('https://simple-contact-crud.herokuapp.com/contact', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            photo: this.state.photo
        })
    }
    render(){
        return(
            <Card>
                <CardHeader>Create</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Input placeholder="firstName" onChange={evt => this.createFirstName(evt)}/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="LastName" onChange={evt => this.createLastName(evt)}/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="age" type="number" onChange={evt => this.createAge(evt)}/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="photo" onChange={evt => this.createPhoto(evt)}/>
                        </FormGroup>
                        <Button onClick={this.postData} type="submit">Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}