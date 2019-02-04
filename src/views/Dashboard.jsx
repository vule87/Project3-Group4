import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import "assets/css/characters.css";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" lg="12">
                      <CardTitle tag="h2">Hi there! Welcome to our site where we have the three great and wise advisors who hopefully would help you to make better life decisions. Explore and have fun!</CardTitle>
                      <CardBody>Vu & AJ</CardBody>
                    </Col>
                    
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category text-center FONT">Chuck Norris</h5>
                  <CardTitle tag="h4">

                    763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <img src={require("../assets/img/Chuck.png")} alt="Chuck" className="characters-chuck"/>;
                  <div className="text-center">
                    <button type="button" className="btn btn-danger Advise">Advise</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category text-center FONT">The Great Designer</h5>
                  <CardTitle tag="h4">
                    3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <img src={require("../assets/img/Designer.png")} alt="Designer" className="characters-designer"/>;
                  <div className="text-center">
                    <button type="button" className="btn btn-danger Advise">Advise</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category text-center FONT">Peaceful Budda</h5>
                  <CardTitle tag="h4">
                    12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <img src={require("../assets/img/budda.png")} alt="Budda" className="characters-budda"/>
                  <div className="text-center">
                    <button type="button" className="btn btn-danger Advise">Advise</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
