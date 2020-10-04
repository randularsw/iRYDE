import 'package:http/http.dart' as http;
import 'dart:convert';

class ServicesService {
  Future<List> getServices(userId) async {
    //print(userId);
    final res =
        await http.get('http://192.168.1.102:4000/services/sp/' + userId);
    List data = jsonDecode(res.body);
    //print(data);
    return data;
  }
}
