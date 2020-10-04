import 'package:http/http.dart' as http;
import 'dart:convert';

class VehicleService {
  Future<List> getVehicles(userId) async {
    final res =
        await http.get('http://192.168.1.102:4000/vehicles/vo/' + userId);
    List data = jsonDecode(res.body);
    return data;
  }
}
