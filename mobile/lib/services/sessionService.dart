import 'package:http/http.dart' as http;
import 'package:iRYDE/core/globals.dart';
import 'dart:convert';

class SessionService {
  Future<Map> createSession(Map session) async {
    try {
      final res = await http.post('$baseUrl/api/sessions',
          headers: null, body: session);
      Map data = jsonDecode(res.body);
      // print(data);
      return data;
    } catch (err) {
      print(err);
    }
  }

  Future<Map> setSessionProvider(id, providerId) async {
    print(id);
    final res = await http
        .put('$baseUrl/api/sessions/$id', body: {"providerId": providerId});
    Map data = jsonDecode(res.body);
    // print(data);
    return data;
  }

  Future<Map> getSession(id) async {
    final res = await http.get('$baseUrl/api/sessions/$id');
    Map data = jsonDecode(res.body);
    // print(data);
    return data;
  }

  Future<Map> deleteSession(id) async {
    final res = await http.delete('$baseUrl/api/sessions/$id');
    Map data = jsonDecode(res.body);
    // print(data);
    return data;
  }
}
