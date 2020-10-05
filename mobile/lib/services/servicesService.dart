import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:iRYDE/core/globals.dart';

class ServicesService {
  Future<List> getServices(userId) async {
    //print(userId);
    final res = await http.get('$baseUrl/services/sp/' + userId);
    List data = jsonDecode(res.body);
    //print(data);
    return data;
  }
}
