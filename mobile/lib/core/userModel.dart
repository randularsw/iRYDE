import 'package:flutter/foundation.dart';
import 'package:iRYDE/services/authService.dart';
import 'package:iRYDE/services/userService.dart';

class UserModel extends ChangeNotifier {
  bool isAuthenticated = false;
  Map user;
  final userService = UserService();
  final authService = AuthService();

  updateCurrentUser() async {
    Map u = await authService.currentUser();
    if (u != null) {
      user = u;
      // print(user);
      isAuthenticated = true;
      notifyListeners();
      return user;
    }
  }

  registerUser(data) async {
    try {
      Map u = await userService.register(data);
      if (u['_id'] != null) {
        user = u;
        // print(user);
        isAuthenticated = true;
        notifyListeners();
        return user;
      }
    } catch (err) {
      print(err);
    }
  }

  loginUser(data) async {
    try {
      Map u = await authService.login(data);
      if (u['_id'] != null) {
        user = u;
        // print(user);
        isAuthenticated = true;
        notifyListeners();
        return user;
      }
    } catch (err) {
      print(err);
    }
  }

  logoutUser() {
    authService.logout();
    isAuthenticated = false;
    user = null;
  }
}
