import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/screens/home/serviceProviders.dart';

class HomePage extends StatefulWidget {
  static const String id = 'home_page';

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      initialIndex: 0,
      child: Scaffold(
        appBar: AppBar(
          bottom: TabBar(
            tabs: [
              Tab(text: 'Service Providers'),
              Tab(text: 'Active Promotions'),
            ],
          ),
          title: Center(
              child: Container(
            child: Text('Home'),
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
          // ]),
        ),
        body: TabBarView(children: [
          ServiceProviders(),
          Icon(FontAwesomeIcons.businessTime),
        ]),

        drawer: DrawerOption(),

        //bottomNavigationBar: MyBottomNavigationBar(),
      ),
    );
  }
}
