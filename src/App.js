import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  //tabpane
  TabContent, TabPane, Nav, NavItem, NavLink, CardTitle

} from 'reactstrap'
import classnames from 'classnames'

import Display from './crud/Display';
import Create from './crud/Create'


export default class App extends  React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <CardTitle>Contact</CardTitle>
                {/* tab pane */}
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Lists
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      New
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Display/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Create/>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
                {/* tab pane */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
