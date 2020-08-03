import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/screens/notificationPage.dart';
import 'package:iRYDE/components/snackMessage.dart';

class EmergencyHome extends StatefulWidget {
  static const String id = 'emergency_home_page';

  @override
  _EmergencyHomeState createState() => _EmergencyHomeState();
}

class _EmergencyHomeState extends State<EmergencyHome> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('Emergency'),
          margin: EdgeInsets.only(right: 58.0),
        )),

        // actions: <Widget>[
        //   IconButton(
        //     //alignment: Alignment.centerLeft,
        //     //padding: EdgeInsets.only(right: 10.0),
        //     splashColor: Colors.white12,
        //     icon: Icon(
        //       FontAwesomeIcons.bell,
        //       size: 20.0,
        //     ),
        //     onPressed: () {
        //       // Navigate to notifications
        //       Navigator.pushNamed(context, NotificationPage.id);
        //     },
        //   ),
        // ],
      ),
      drawer: DrawerOption(),
      body: SnackMessage(
        text: 'We are here for you !',
      ),
    );
  }
}
