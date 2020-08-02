import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/components/drawer.dart';
import 'package:iryde/screens/notificationPage.dart';

class VehiclesHome extends StatefulWidget {
  static const String id = 'vehicles_home_page';

  @override
  _VehiclesHomeState createState() => _VehiclesHomeState();
}

class _VehiclesHomeState extends State<VehiclesHome> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text('Vehicles')),
        actions: <Widget>[
          IconButton(
            //alignment: Alignment.centerLeft,
            //padding: EdgeInsets.only(right: 10.0),
            splashColor: Colors.white12,
            icon: Icon(
              FontAwesomeIcons.bell,
              size: 20.0,
            ),
            onPressed: () {
              // Navigate to notifications
              Navigator.pushNamed(context, NotificationPage.id);
            },
          ),
        ],
      ),
      drawer: DrawerOption(),
      body: Center(
        child: Text('This is Vehicles page'),
      ),
    );
  }
}
