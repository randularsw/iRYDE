import 'package:http/http.dart' as http;
import 'dart:convert';

class UserService {
  Future<Map> register(Map user) async {
    final res = await http.post('http://192.168.1.102:4000/api/users',
        headers: null, body: user);
    Map data = (jsonDecode(res.body));
    // print(data);
    return data;
  }

  Future<List> getServiceProviders() async {
    final res = await http.get('http://192.168.1.102:4000/api/users/sp');
    List data = jsonDecode(res.body);
    return data;
  }
}
