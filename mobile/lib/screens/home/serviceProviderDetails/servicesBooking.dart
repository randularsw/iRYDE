import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/services/servicesService.dart';
import 'package:iRYDE/services/vehicleService.dart';

class ServiceBooking extends StatefulWidget {
  static const String id = 'services_booking';
  // String something;
  // ServiceBooking(this.something);
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
  List stateService = [];
  String date = 'Select Date';

  bool isTrue = false;
  final servicesService = ServicesService();
  List services;
  DateTime _date = DateTime.now();

  @override
  void initState() {
    getVehicles();
    getServices();
    super.initState();
  }

  void getServices() async {
    try {
      var data = await servicesService.getServices('5f2f96be82e61e5274037800');
      setState(() {
        services = data;
      });
      stateServices(services);
    } catch (err) {
      print(err);
    }
  }

  void getVehicles() async {
    try {
      var data = await vehicleService.getVehicles(id);
      setState(() {
        vehicles = data;
      });
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
        }).toList() ??
        [];
  }

  void stateServices(List services) {
    services.map((e) {
      e['state'] = false;
    }).toList();

    stateService = services;
  }

  Future<Null> selectDate(BuildContext context) async {
    final DateTime picked = await showDatePicker(
      context: context,
      initialDate: _date,
      firstDate: DateTime.now().subtract(Duration(days: 0)),
      lastDate: DateTime(2050),
    );

    if (picked != null && picked != _date) {
      setState(() {
        _date = picked;
        print(_date.toString());
        date = _date.toString();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('Online Service Booking'),
          margin: EdgeInsets.only(right: 58.0),
        )),
      ),
      body: Container(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          //select vehicle
          SizedBox(
            height: 30,
          ),
          Container(
            margin: EdgeInsets.symmetric(horizontal: 35),
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
          SizedBox(
            height: 30,
          ),
          Container(
              margin: EdgeInsets.symmetric(horizontal: 50),
              child: Text(
                'Select Services',
                style: TextStyle(color: Colors.grey[600]),
              )),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 35),
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
                  }).toList() ??
                  [],
            ),
          ),
          Container(
            margin: EdgeInsets.symmetric(horizontal: 50),
            child: RaisedButton(
              onPressed: () {
                selectDate(context);
              },
              color: Colors.grey[100],
              child: Text('$date'),
            ),
          )
          //Text(widget.something),
        ],
      )),
    );
  }
}
