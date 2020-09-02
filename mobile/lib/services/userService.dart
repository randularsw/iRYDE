import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

class UserService {
  Future<Map> register(Map user) async {
    try {
      final res = await http.post('http://192.168.1.2:4000/api/users',
          headers: null, body: user);
      SharedPreferences prefs = await SharedPreferences.getInstance();
      if (res.headers['token'] != null) {
        prefs.setString('token', res.headers['token']);
      }
      Map data = jsonDecode(res.body);
      // print(data);
      return data;
    } catch (err) {
      print(err);
    }
  }
}
