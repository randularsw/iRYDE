import 'package:http/http.dart' as http;
import 'dart:convert';

class UserService {
  Future<Map> register(Map user) async {
    final res = await http.post('http://192.168.1.4:4000/api/users',
        headers: null, body: user);
    print(res.headers['token']);
    Map data = jsonDecode(res.body);
    // print(data);
    return data;
  }
}
