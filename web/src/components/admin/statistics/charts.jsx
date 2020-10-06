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
import { Pie, Bar, Line } from "react-chartjs-2";
import { getAllBookings } from "services/statisticsService";
import { getSB } from "services/statisticsService";
import { getVO } from "services/statisticsService";
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
      pie: {
        labels: ['SB', 'VO'],
        datasets: [
          {
            label: 'User Types',
            fill: false,
            lineTension: 0.5,
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            ],
            borderWidth: 2,
            data: [1, 1]
          }
        ]
      },
      bar: {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [1, 1, 1, 1, 1]
          }
        ]
      },
      line: {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [1, 1, 1, 1, 1]
          }
        ]
      }  
    }
    
  }
  componentDidMount(){
    // alert("hi")
    this.bookingdeatils()
    this.userTypes()
    this.userMonths()
  }

  async bookingdeatils() {
    try {
      var data = [0,0,0,0,0,0,0,0,0,0,0,0];
      const model = await getAllBookings();
      console.log(model.data);
      model.data.map((item) => {
        var d = new Date(item.date)
        // alert(d.getMonth())
        data[d.getMonth()] +=1
      })
      var bar= {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','September', 'October','November', 'December'],
        datasets: [
          {
            label: 'Bookings',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data:data
          }
        ]
      }
      this.setState({
        bar: bar,
        // type:type.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }

  async userMonths() {
    try {
      var data = [0,0,0,0,0,0,0,0,0,0,0,0];
      const sb = await getSB();
      console.log(sb.data);
      sb.data.map((item) => {
        var d = new Date(item.createdAt)
        // alert(d.getMonth())
        data[d.getMonth()] +=1
      })

      const vo = await getVO();
      console.log(vo.data);
      vo.data.map((item) => {
        var d = new Date(item.createdAt)
        // alert(d.getMonth())
        data[d.getMonth()] +=1
      })
      var line= {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','September', 'October','November', 'December'],
        datasets: [
          {
            label: 'Users',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data:data
          }
        ]
      }
      this.setState({
        line: line,
        // type:type.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
  }


  async userTypes() {
    try {
      var data = [0,0];
      const model1 = await getSB();
      console.log(model1.data.length);
      data[0]=model1.data.length

      const model2 = await getVO();
      console.log(model2.data.length);
      data[1]=model2.data.length
      var pie= {
        labels: ['SP', 'VO'],
        datasets: [
          {
            label: 'User Types',
            fill: false,
            lineTension: 0.5,
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            ],
            borderWidth: 2,
            data: data
          }
        ]
      }
      this.setState({
        pie: pie,
        // type:type.data,
      });
    } catch (err) {
      console.log("Error", err);
    }
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
                          <Pie
                            data={this.state.pie}
                            options={{
                              title:{
                                display:true,
                                text:'Users per month',
                                fontSize:20
                              },
                              legend:{
                                display:true,
                                position:'right'
                              }
                            }}
                            getDatasetAtEvent={(e) => console.log(e)}
                          />
                        </div>
                      </CardBody>
                    </Card>

                    <Label><h1>users created at bla bla</h1></Label>
                    <Card>
                      <CardBody>
                        <div className="chart">
                          {/* Chart wrapper */}
                          <Line
                            data={this.state.line}
                            options={{
                              title:{
                                display:true,
                                text:'Bookings per month',
                                fontSize:20
                              },
                              legend:{
                                display:true,
                                position:'right'
                              }
                            }}  
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
                            data={this.state.bar}
                            options={{
                              title:{
                                display:true,
                                text:'Bookings per month',
                                fontSize:20
                              },
                              legend:{
                                display:true,
                                position:'right'
                              }
                            }}  
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
