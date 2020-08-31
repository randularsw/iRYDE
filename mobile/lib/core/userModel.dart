import 'package:flutter/foundation.dart';

class UserModel extends ChangeNotifier {
  bool isAuthenticated = false;
  Map user;

  Map getUser() => user;

  // updateItem() {
  //   _item++;
  //   notifyListeners();
  // }
}
