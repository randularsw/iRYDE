import 'package:iryde/screens/settingsBasic.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/screens/profilePage.dart';
import 'package:iryde/screens/aboutUs.dart';

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
            accountName: Text('yashanmick'),
            accountEmail: Text('yashanmick@gmail.com'),
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
                FontAwesomeIcons.userCircle,
              )),

          ListTile(
              onTap: () {
                Navigator.pushNamed(context, SettingsGeneral.id);
              },
              title: Text('Settings'),
              leading: Icon(
                FontAwesomeIcons.circle,
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
                FontAwesomeIcons.exclamationCircle,
              )),

          ListTile(
              title: Text('Sign Out'),
              leading: Icon(
                FontAwesomeIcons.signOutAlt,
              )),

          ListTile(
              onTap: () => Navigator.of(context).pop(),
              title: Text('Close'),
              leading: Icon(
                FontAwesomeIcons.windowClose,
              )),
        ],
      ),
    );
  }
}
