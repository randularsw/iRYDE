import React, { Component } from "react";
import authService from "../services/authService";
import userService from "../services/userService";

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  loginUser = async (data) => {
    try {
      const user = await authService.login(data);
      if (user._id) {
        const isAuthenticated = true;
        this.setState({ isAuthenticated, user });
      }
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  updateUser = async (data) => {
    try {
      // console.log(data);
      const user = await userService.editUser(data);
      if (user._id) {
        this.setState({ user });
      }
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  uploadPhoto = async (data) => {
    try {
      // console.log(data);
      const user = await userService.addPhoto(data);
      if (user._id) {
        this.setState({ user });
      }
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  doPayment = async (data) => {
    try {
      // console.log(data);
      const user = await userService.addPayment(data);
      if (user._id) {
        this.setState({ user });
      }
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  currentUser = async () => {
    try {
      if (!this.state.isAuthenticated) {
        const { data: user } = await authService.getCurrentUser();
        const isAuthenticated = true;
        this.setState({ isAuthenticated, user });
      }
      return this.state;
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  getUserOnPageLoad = async () => {
    try {
      const { data: user } = await authService.getCurrentUser();
      const isAuthenticated = true;
      this.setState({ isAuthenticated, user });
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  logoutUser = () => {
    authService.logout();
    const isAuthenticated = false;
    const user = null;
    this.setState({ isAuthenticated, user });
  };

  registerUser = async (data) => {
    const user = await userService.addUser(data);
    if (user._id) {
      const isAuthenticated = true;
      this.setState({ isAuthenticated, user });
    }
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          login: this.loginUser,
          logout: this.logoutUser,
          register: this.registerUser,
          currentUser: this.currentUser,
          getUserOnPageLoad: this.getUserOnPageLoad,
          updateUser: this.updateUser,
          uploadPhoto: this.uploadPhoto,
          doPayment: this.doPayment,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
