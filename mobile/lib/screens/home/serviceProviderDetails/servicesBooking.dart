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
  List vehicles = [];
  String vehicle;
  Map selectedVehicle;
  final vehicleService = VehicleService();
  String h;
  List stateService;
 
  bool isTrue = false;
  final servicesService = ServicesService();
  List services;

  @override
  void initState() {
    getVehicles();
    getServices();
    super.initState();
  }

  void getServices() async {
    //print('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    try {
      var data = await servicesService.getServices('5f2f96be82e61e5274037800');
      setState(() {
        services = data;
      });
      stateServices(services);
      //print(services);
    } catch (err) {
      //print(err);
    }
  }

  void getVehicles() async {
    try {
      var data = await vehicleService.getVehicles(id);
      setState(() {
        vehicles = data;
      });
      //print(vehicles);
    } catch (err) {
      //print(err);
    }
  }

  void setvehicle(String id) {
    print(id);
    vehicles.map((e) {
          if (e['_id'] == id) {
            selectedVehicle = e;
          }
        }).toList() ??
        [];
  }

  void stateServices(List services) {
    services.map((e) {
      e['state'] = false;
    }).toList();

    stateService = services;
  }

  @override
  Widget build(BuildContext context) {
    //final List args = ModalRoute.of(context).settings.arguments;
    //stateServices(args);
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
                  items: vehicles.map<DropdownMenuItem<String>>((item) {
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
          Expanded(
            child: ListView(
              children: stateService.map((item) {
                return new CheckboxListTile(
                  title: new Text(item['servicename']),
                  value: item['state'],
                  onChanged: (bool value) {
                    setState(() {
                      item['state'] = value;
                    });
                  },
                );
              }).toList(),
            ),
          )
        ],
      )),
    );
  }
}
