import React from "react";
import API from '../utils/API';

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
      chuckQuotes: "",
      designerQuotes: "",
      buddaQuotes: ""
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  handleChuckQuotes = event => {
    event.preventDefault();
    this.getChuck();
  };

  handleDesignerQuotes = event => {
    event.preventDefault();
    this.getDesigner();
  };

  handleBuddaQuotes = event => {
    event.preventDefault();
    this.getBudda();
  };

  getChuck = () => {
    API.getChuck()
      .then(res =>
        this.setState({
          chuckQuotes: res.data.value
        })
      )
      .catch(() =>
        this.setState({
          chuckQuotes: "Oops! An unexpected error occured. Please try again."
        })
      );
  };
  getDesigner = () => {
    API.getDesigner()
      .then(res =>
        this.setState({
          designerQuotes: res.data[0].content
        })
      )
      .catch(() =>
        this.setState({
          designerQuotes:
            "Oops! An unexpected error occured. Please try again."
        })
      );
  };
  getBudda = () => {
    API.getBudda()
      .then(res =>
        this.setState({
          buddaQuotes: res.data.slip.advice
        })
      )
      .catch(() =>
        this.setState({
          buddaQuotes:
            "Oops! An unexpected error occured. Please try again."
        })
      );
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
                      <CardTitle tag="h2">
                        Hi there! Welcome to our site where we have the
                        three great and wise advisors who hopefully would
                        help you to make better life decisions. Explore and
                        have fun!
                      </CardTitle>
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
                  <h5 className="card-category text-center FONT">
                    Chuck Norris
                  </h5>
                  <CardTitle tag="h4"></CardTitle>
                </CardHeader>
                <CardBody>
                  <img
                    src={require("../assets/img/Chuck.png")}
                    alt="Chuck"
                    className="characters-chuck"
                  />
                  ;
                  <div className="text-center">
                    <button
                      onClick={this.handleChuckQuotes}
                      type="button"
                      className="btn btn-danger Advise"
                    >
                      Advise
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category text-center FONT">
                    The Great Designer
                  </h5>
                  <CardTitle tag="h4">
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <img
                    src={require("../assets/img/Designer.png")}
                    alt="Designer"
                    className="characters-designer"
                  />
                  ;
                  <div className="text-center">
                    <button
                      onClick={this.handleDesignerQuotes}
                      type="button"
                      className="btn btn-danger Advise"
                    >
                      Advise
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category text-center FONT">
                    Peaceful Budda
                  </h5>
                  <CardTitle tag="h4"></CardTitle>
                </CardHeader>
                <CardBody>
                  <img
                    src={require("../assets/img/budda.png")}
                    alt="Budda"
                    className="characters-budda"
                  />
                  <div className="text-center">
                    <button
                      onClick={this.handleBuddaQuotes}
                      type="button"
                      className="btn btn-danger Advise"
                    >
                      Advise
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  {/* <h5 className="card-category text-center FONT">
                    The Great Designer
                  </h5> */}
                  <CardTitle tag="h4">
                    {this.state.chuckQuotes}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    {/* <button
                      // onClick={this.handleDesignerQuotes}
                      type="button"
                      className="btn btn-danger Advise"
                    >
                      Favorite
                    </button> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  {/* <h5 className="card-category text-center FONT">
                    The Great Designer
                  </h5> */}
                  <CardTitle tag="h4">
                    {this.state.designerQuotes}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    {/* <button
                      // onClick={this.handleDesignerQuotes}
                      type="button"
                      className="btn btn-danger Advise"
                    >
                      Favorite
                    </button> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  {/* <h5 className="card-category text-center FONT">
                    The Great Designer
                  </h5> */}
                  <CardTitle tag="h4">
                    {this.state.buddaQuotes}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    {/* <button
                      // onClick={this.handleDesignerQuotes}
                      type="button"
                      className="btn btn-danger Advise"
                    >
                      Favorite
                    </button> */}
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
