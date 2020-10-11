import { Rating } from "@material-ui/lab";
import React, { Component } from "react";
import { getRates } from "services/rateService";

class AvgRating extends Component {
  state = {
    ratings: [],
    avgRate: 0,
  };
  async componentDidMount() {
    const { data: ratings } = await getRates(this.props.sp);
    this.setState({ ratings });
    this.getAverageRate();
  }

  getAverageRate() {
    let total = 0;
    if (this.state.ratings.length > 0) {
      this.state.ratings.map((r) => {
        total = total + r.rate;
      });
      let avgRate = total / this.state.ratings.length;
      this.setState({ avgRate });
    }
  }
  render() {
    return (
      <div>
        <Rating
          value={this.state.avgRate}
          size="small"
          readOnly
          precision={0.5}
        />
      </div>
    );
  }
}

export default AvgRating;
