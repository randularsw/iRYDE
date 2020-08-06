import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';

class NotificationPage extends StatefulWidget {
  static const String id = 'notification_page';

  @override
  _NotificationPageState createState() => _NotificationPageState();
}

class _NotificationPageState extends State<NotificationPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Center(
              child: Container(
            child: Text('Notifications'),
            margin: EdgeInsets.only(right: 58.0),
          )),

          // actions: <Widget>[
          //   IconButton(
          //     //alignment: Alignment.centerLeft,
          //     //padding: EdgeInsets.only(right: 10.0),
          //     splashColor: Colors.white12,
          //     icon: Icon(
          //       FontAwesomeIcons.backspace,
          //       size: 20.0,
          //     ),
          //     onPressed: () {
          //       // go back
          //       Navigator.pop(context);
          //     },
          //   ),
          // ],
        ),
        drawer: DrawerOption(),
        body: Container(
          child: ListView(
            children: <Widget>[
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
              ListTile(
                title: Text('Notifications.'),
              ),
            ],
          ),
        ));
  }
}
