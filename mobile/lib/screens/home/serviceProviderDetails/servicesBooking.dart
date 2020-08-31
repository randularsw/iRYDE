import 'package:flutter/material.dart';
import 'package:iRYDE/services/servicesService.dart';
import 'package:iRYDE/services/vehicleService.dart';

class ServiceBooking extends StatefulWidget {
  static const String id = 'services_booking';
  @override
  _ServiceBookingState createState() => _ServiceBookingState();
}

class _ServiceBookingState extends State<ServiceBooking> {
  String id = "5f4a404c7e0d58425c2dcb1f";
  List vehicles;
  String vehicle;
  List selectedVehicle;
  final vehicleService = VehicleService();

  @override
  void initState() {
    getVehicles();
    super.initState();
  }

  void getVehicles() async {
    try {
      var data = await vehicleService.getVehicles(id);
      setState(() {
        vehicles = data;
      });
      print(vehicles);
    } catch (err) {
      print(err);
    }
  }

  void setvehicle(String id) {
    print(id);
    vehicles.map((e) {
      if (e['_id'] == id) {
        selectedVehicle = e;
      }
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          child: Column(
        children: <Widget>[
          //select vehicle
          Expanded(
            child: DropdownButtonHideUnderline(
              child: ButtonTheme(
                alignedDropdown: true,
                child: DropdownButton<String>(
                  value: vehicle,
                  onChanged: (String newVal) {
                    setState(() {
                      vehicle = newVal;
                    });
                    setvehicle(newVal);
                  },
                  hint: Text('Select Vehicle'),
                  items: vehicles?.map<DropdownMenuItem<String>>((item) {
                        return DropdownMenuItem(
                          child: Text(item['brand'] +
                              ' ' +
                              item['model'] +
                              ' ' +
                              item['vehicleNo']),
                          value: item['_id'],
                        );
                      })?.toList() ??
                      [],
                ),
              ),
            ),
          ),
          // Expanded(child: null)
        ],
      )),
    );
  }
}
