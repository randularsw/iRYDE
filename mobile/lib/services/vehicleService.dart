import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:iRYDE/core/globals.dart';

class VehicleService {
  Future<List> getVehicles(userId) async {
    final res = await http.get('$baseUrl/vehicles/vo/' + userId);
    List data = jsonDecode(res.body);
    return data;
  }
}
