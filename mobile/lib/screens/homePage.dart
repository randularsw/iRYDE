import 'package:iryde/screens/notificationPage.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/components/drawer.dart';

class HomePage extends StatefulWidget {
  static const String id = 'home_page';

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      initialIndex: 1,
      child: Scaffold(
        appBar: AppBar(
            bottom: TabBar(
              tabs: [
                Tab(text: 'Services'),
                Tab(text: 'Home'),
                Tab(text: 'Promotions'),
              ],
            ),
            title: Center(child: Text('Home')),
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
            ]),
        body: TabBarView(children: [
          Icon(FontAwesomeIcons.bus),
          Icon(FontAwesomeIcons.home),
          Icon(FontAwesomeIcons.businessTime),
        ]),

        drawer: DrawerOption(),

        //bottomNavigationBar: MyBottomNavigationBar(),
      ),
    );
  }
}
