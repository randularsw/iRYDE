import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/components/drawer.dart';

class SettingsGeneral extends StatefulWidget {
  static const String id = 'settings_general';

  @override
  _SettingsGeneralState createState() => _SettingsGeneralState();
}

class _SettingsGeneralState extends State<SettingsGeneral> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text('General Settings')),
        actions: <Widget>[
          IconButton(
            //alignment: Alignment.centerLeft,
            //padding: EdgeInsets.only(right: 10.0),
            splashColor: Colors.white12,
            icon: Icon(
              FontAwesomeIcons.backspace,
              size: 20.0,
            ),
            onPressed: () {
              // Navigate to notifications
              Navigator.pop(context);
            },
          ),
        ],
      ),
      drawer: DrawerOption(),
      body: Center(
        child: Text('General Settings'),
      ),
    );
  }
}
