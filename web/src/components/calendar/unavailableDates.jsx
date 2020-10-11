import React, { useState, Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";
import { UserContext } from "core/userContext";
import { add } from "services/unavailableDatesService";
import { getUnavailableDates } from "services/unavailableDatesService";

class UnavailableDates extends Component {
  static contextType = UserContext;
  state = {
    selectedDate: null,
    user: {},
    unavailableDates: [],
    daysDiff: [],
  };
  async componentDidMount() {
    try {
      const userData = await this.context.currentUser();
      this.setState({ user: userData.user });
      console.log(this.context.state.user?._id);
      const { data: unavailableDates } = await getUnavailableDates(
        this.context.state.user?._id
      );
      //get unavailable dates
      this.setState({ unavailableDates: unavailableDates[0]?.dates });
      //console.log(this.state.unavailableDates);
      this.state.unavailableDates.map((d) => {
        const unavailable = new Date(d.date);
        //console.log(unavailable);
        const today = new Date().toISOString();
        const diff =
          new Date(unavailable).getTime() - new Date(today).getTime(); // Gives difference between 2 days
        const diffDates = Math.round(diff / (1000 * 3600 * 24)); // convert it to np of days format
        this.state.daysDiff.push(diffDates);
      });
    } catch (err) {
      console.log("Error", err);
    }
  }

  async onChange(date) {
    try {
      this.setState({ selectedDate: date });
      console.log(this.state.user);
      console.log(date);
      const res = await add(this.state.user._id, { date: date });
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
          excludeDates={this.state.daysDiff?.map((i) => {
            const d = new Date();
            d.setDate(d.getDate() + i);
            console.log(89, this.state.unavailableDates);
            return d;
          })}
          showDisabledMonthNavigation
          className="input-group-alternative p-2"
          // innerRef={register({ required: true })}
          inline
        />
      </div>
    );
  }
}

export default UnavailableDates;
