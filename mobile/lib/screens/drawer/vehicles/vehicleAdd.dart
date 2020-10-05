import 'package:flutter/material.dart';
import 'package:iRYDE/services/userService.dart';

class VehicleAdd extends StatefulWidget {
  static const String id = 'vehicle_add';
  @override
  _VehicleAddState createState() => _VehicleAddState();
}

class _VehicleAddState extends State<VehicleAdd> {
  final userService = UserService();
  List serviceProviders;
  String id;

  @override
  void initState() {
    super.initState();
    getServiceProviders();
  }

  void getServiceProviders() async {
    try {
      var data = await userService.getServiceProviders();
      setState(() {
        serviceProviders = data;
        print(serviceProviders);
      });
    } catch (err) {
      print(err);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: <Widget>[
            Expanded(
              child: DropdownButtonHideUnderline(
                child: ButtonTheme(
                  alignedDropdown: true,
                  child: DropdownButton<String>(
                    value: id,
                    onChanged: (String newVal) {
                      setState(() {
                        id = newVal;
                        print(id);
                      });
                    },
                    hint: Text('Select A Brand'),
                    items:
                        serviceProviders?.map<DropdownMenuItem<String>>((item) {
                              return DropdownMenuItem(
                                child: Text(item['name']),
                                value: item['name'],
                              );
                            })?.toList() ??
                            [],
                  ),
                ),
              ),
            )
          ],
        )),
    );
  }
}
