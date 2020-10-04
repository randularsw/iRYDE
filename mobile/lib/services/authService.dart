import 'package:http/http.dart' as http;
import 'package:jwt_decoder/jwt_decoder.dart';
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:iRYDE/core/globals.dart';

class AuthService {
  Future<Map> login(Map user) async {
    try {
      final res = await http.post('$baseUrl/api/users/login',
          headers: null, body: user);
      SharedPreferences prefs = await SharedPreferences.getInstance();
      if (res.headers['token'] != null) {
        prefs.setString('token', res.headers['token']);
      }
      Map data = jsonDecode(res.body);
      return data;
    } catch (err) {
      print(err);
    }
  }

  Future<Map> currentUser() async {
    try {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      String token = prefs.get('token');
      if (token != null) {
        Map<String, dynamic> decodedToken = JwtDecoder.decode(token);
        final res = await http.get(
          '$baseUrl/api/users/${decodedToken["_id"]}',
          headers: null,
        );
        Map data = jsonDecode(res.body);
        // print(data);
        return data;
      }
    } catch (err) {
      print(err);
    }
  }

  logout() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.remove('token');
  }
}
