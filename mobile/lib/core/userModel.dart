import 'package:flutter/foundation.dart';
import 'package:iRYDE/services/authService.dart';
import 'package:iRYDE/services/userService.dart';

class UserModel extends ChangeNotifier {
  bool isAuthenticated = false;
  Map user;
  final userService = UserService();
  final authService = AuthService();

  getUser() {
    // print(user);
    // return user['name'];
  }

  registerUser(data) async {
    try {
      Map u = await userService.register(data);
      if (u['_id'] != null) {
        print('u');
        user = u;
        print(user);
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
