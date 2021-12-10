import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import {Row, Col, CardText, Card, Button} from 'reactstrap'

export default class Display extends React.Component{

    state = {
        fulldata: []
    }

    componentDidMount() {
        axios.get("https://simple-contact-crud.herokuapp.com/contact")
        .then(res => {
            const fulldata = res.data.data
            this.setState({fulldata})
        })
    }

    deleteData = (id) => {
        axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
        .then(res => {
            console.log(res)
        })
    }
    render(){
        return(
            <Row>
                {this.state.fulldata.map(
                    (fulldata, idx) => {
                        return <Col md="4">
                                    <Card className="mb-2" key={idx}>
                                        <img src={fulldata.photo} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{fulldata.firstName} {fulldata.lastName}</h5>
                                            <CardText>
                                                <Row>
                                                    <Col sm="6">
                                                        <Link className="btn btn-success" to={`/update/${fulldata.id}`} color="success">Update</Link>
                                                    </Col>
                                                    <Col sm="6">
                                                        <Button onClick={this.deleteData(fulldata.id)} color="danger">Delete</Button>
                                                    </Col>
                                                </Row>
                                            </CardText>
                                        </div>
                                    </Card>
                                </Col>
                    })
                }
            </Row>
        )
    }
}