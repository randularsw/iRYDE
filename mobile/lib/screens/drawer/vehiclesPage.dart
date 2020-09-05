import 'package:flutter/material.dart';
<<<<<<< HEAD
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
=======
import 'package:iRYDE/screens/drawer/vehicles/vehicleAdd.dart';
>>>>>>> develop

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
        title: Center(
            child: Container(
          child: Text('Vehicles'),
          margin: EdgeInsets.only(right: 58.0),
        )),
        // actions: <Widget>[
        //   IconButton(
        //     //alignment: Alignment.centerLeft,
        //     //padding: EdgeInsets.only(right: 10.0),
        //     splashColor: Colors.white12,
        //     icon: Icon(
        //       FontAwesomeIcons.chevronLeft,
        //       size: 20.0,
        //     ),
        //     onPressed: () {
        //       // Navigate to notifications
        //       Navigator.pop(context);
        //     },
        //   ),
        // ],
      ),
      //drawer: DrawerOption(),
      body: Center(
          //child: Text('This is Vehicles page'),
          child: new Form(
        
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            
          ],
        ),
      )),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.pushNamed(context, VehicleAdd.id);
          // Add your onPressed code here!
        
        },
        child: Icon(Icons.add),
        backgroundColor: Color(0XFF172b4d),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Add your onPressed code here!
        },
        child: Icon(FontAwesomeIcons.ghost),
        backgroundColor: Color(0XFF172b4d),
      ),
    );
  }
}
