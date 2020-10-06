import React, { Component } from "react";

import { Row, Card, CardHeader, CardBody, Container , Label} from "reactstrap";


import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import { Button, CardImg, CardTitle, CardText, Col } from "reactstrap";

import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        labels:["1","2","3"],
        datasets:[
          {
            label:"Videos mades",
            data: ["4","5","4"]
          },
          {
            label:"Videos ",
            data: ["4","5","9"]
          }
        ]
      }


    };

    
  }
  

  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  
  getChartData = canvas =>{
    const data =this.state.data;

    return data;
  }



//   state = {
//     items: [],
//   };

  render() {
    // const { items } = this.state;
    return (
      <>
        
        <Container className=" mt--6" fluid>
        
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                
                <CardBody>
                  <div style={{ minHeight: 400 }}>
                    {/* Page Content */}
                    
                    <Label> <h1>Users of the system</h1></Label>

                    <Card className="bg-default">
                      <CardBody>
                        <div className="chart">
                          {/* Chart wrapper */}
                          <Line
                            data={chartExample1.data1}
                            options={chartExample1.options}
                            getDatasetAtEvent={(e) => console.log(e)}
                          />
                        </div>
                      </CardBody>
                    </Card>
                    <Label><h1>Bookings of the Year</h1></Label>
                    <Card>
                      <CardBody>
                        <div className="chart">
                          {/* Chart wrapper */}
                          <Bar
                            data={chartExample2.data}
                            options={chartExample2.options}
                          />
                        </div>
                      </CardBody>
                    </Card>
                    

                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Charts;
