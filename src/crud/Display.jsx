import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import {Row, Col, CardText, Card} from 'reactstrap'

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
            <div>
                <Row>
                    {this.state.fulldata.map(
                        (fulldata, idx) => {
                            return <Col md="3">
                                        <Card className="mb-2" key={idx}>
                                            <img src={fulldata.photo} class="card-img-top img-app" alt=""/>
                                            <div class="card-body">
                                                <h5 class="card-title">{fulldata.firstName} {fulldata.lastName}</h5>
                                                <CardText>
                                                    <Row>
                                                        <Col className="d-grid" sm="6">
                                                            <Link className="btn btn-outline-success" to={`/update/${fulldata.id}`} color="success">Update</Link>
                                                        </Col>
                                                        <Col className="d-grid" sm="6">
                                                            <button className="btn btn-outline-danger" onClick={this.deleteData(fulldata.id)}>Delete</button>
                                                        </Col>
                                                    </Row>
                                                </CardText>
                                            </div>
                                        </Card>
                                    </Col>
                        })
                    }
                </Row>
                <Row>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link className='btn btn-success btn-lg' to={'/create'}>New Data</Link>
                    </div>
                </Row>
        </div>
        )
    }
}