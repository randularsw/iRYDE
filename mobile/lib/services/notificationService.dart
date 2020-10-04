import 'package:http/http.dart' as http;
import 'package:iRYDE/core/globals.dart';
import 'dart:convert';

class NotificationService {
  Future<List> getNotifications() async {
    try {
      final res = await http.get('$baseUrl/api/notifications');
      List data = jsonDecode(res.body);
      // print(data);
      return data;
    } catch (err) {
      print(err);
    }
  }

  // Future<List> getSessions() async {
  //   final res = await http.get('$baseUrl/api/users/sp');
  //   List data = jsonDecode(res.body);
  //   return data;
  // }
}
