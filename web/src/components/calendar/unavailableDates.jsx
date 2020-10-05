import React, { useState, Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";
import { UserContext } from "core/userContext";
import { add } from "services/unavailableDatesService";

class UnavailableDates extends Component {
  static contextType = UserContext;
  state = {
    selectedDate: null,
    user: {},
  };
  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      this.setState({ user: userData.user });
    } catch (err) {
      console.log("Error", err);
    }
  }

  async onChange(date) {
    try {
      this.setState({ selectedDate: date });
      console.log(this.state.user);
      console.log(date);
      const res = await add(this.state.user._id, {date:date});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.selectedDate}
          onChange={(e) => this.onChange(e)}
          minDate={new Date()}
          excludeDates={[subDays(new Date(), -9), subDays(new Date(), -5)]}
          showDisabledMonthNavigation
          placeholderText="Select Date"
          className="input-group-alternative p-2"
          // innerRef={register({ required: true })}
        />
      </div>
    );
  }
}

export default UnavailableDates;
