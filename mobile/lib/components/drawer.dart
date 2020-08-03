import 'package:iRYDE/screens/drawer/settingsBasic.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/screens/drawer/profilePage.dart';
import 'package:iRYDE/screens/drawer/aboutUs.dart';
import 'package:iRYDE/screens/drawer/vehiclesPage.dart';

class DrawerOption extends StatelessWidget {
  const DrawerOption({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: <Widget>[
          UserAccountsDrawerHeader(
            onDetailsPressed: () {
              Navigator.pushNamed(context, ProfilePage.id);
            },
            accountName: Text('sisiranga'),
            accountEmail: Text('sisirox@gmail.com'),
            currentAccountPicture: CircleAvatar(
              backgroundColor: Colors.purpleAccent,
              child: Text('Hi'),
            ),
          ),
          ListTile(
              onTap: () {
                Navigator.pushNamed(context, ProfilePage.id);
              },
              title: Text('Profile'),
              leading: Icon(
                FontAwesomeIcons.solidUser,
              )),

          ListTile(
              onTap: () {
                Navigator.pushNamed(context, VehiclesHome.id);
              },
              title: Text('Vehicles'),
              leading: Icon(
                FontAwesomeIcons.car,
              )),
          // Divider(
          //   color: Colors.black,
          // ),
          ListTile(
              onTap: () {
                Navigator.pushNamed(context, AboutUsPage.id);
              },
              title: Text('About Us'),
              leading: Icon(
                FontAwesomeIcons.infoCircle,
              )),

          ListTile(
              title: Text('Sign Out'),
              leading: Icon(
                FontAwesomeIcons.signOutAlt,
              )),
        ],
      ),
    );
  }
}
