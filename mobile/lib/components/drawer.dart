// import 'package:iRYDE/screens/drawer/settingsBasic.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/auth/loginPage.dart';
import 'package:iRYDE/screens/drawer/profilePage.dart';
import 'package:iRYDE/screens/drawer/aboutUs.dart';
import 'package:iRYDE/screens/drawer/vehiclesPage.dart';
import 'package:provider/provider.dart';

class DrawerOption extends StatelessWidget {
  const DrawerOption({
    Key key,
  }) : super(key: key);

  onLogout(context) {
    var userInfo = Provider.of<UserModel>(context, listen: false);
    userInfo.logoutUser();
    Navigator.pushNamed(context, LoginPage.id);
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: <Widget>[
          UserAccountsDrawerHeader(
            onDetailsPressed: () {
              Navigator.pushNamed(context, ProfilePage.id);
            },
            arrowColor: Color(0XFF172b4d),
            accountName: Text('sisiranga'),
            accountEmail: Text('sisirox@gmail.com'),
            currentAccountPicture: CircleAvatar(
              backgroundColor: Colors.blueGrey[100],
              child: Text('Hi'),
            ),
          ),
          Consumer<UserModel>(builder: (context, data, child) {
            return UserAccountsDrawerHeader(
              onDetailsPressed: () {
                Navigator.pushNamed(context, ProfilePage.id);
              },
              accountName: Text(data.user['name']?.toString() ?? ''),
              accountEmail: Text(data.user['email']?.toString() ?? ''),
              currentAccountPicture: CircleAvatar(
                backgroundColor: Colors.purpleAccent,
                child: Text('Hi'),
              ),
            );
          }),

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
              onTap: () {
                onLogout(context);
              },
              title: Text('Logout'),
              leading: Icon(
                FontAwesomeIcons.signOutAlt,
              )),
        ],
      ),
    );
  }
}
