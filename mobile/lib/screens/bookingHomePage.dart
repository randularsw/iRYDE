import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/components/drawer.dart';
import 'package:iryde/screens/notificationPage.dart';

class BookingHome extends StatefulWidget {
  static const String id = 'booking_home_page';

  @override
  _BookingHomeState createState() => _BookingHomeState();
}

class _BookingHomeState extends State<BookingHome> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          bottom: TabBar(
            // isScrollable: true,
            tabs: [
              Tab(text: 'Ongoing'),
              Tab(text: 'Pending'),
              Tab(text: 'Past'),
            ],
          ),
          title: Center(child: Container(child: Text('Bookings'), margin: EdgeInsets.only(right: 58.0),)),
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
        body: TabBarView(children: [
          Icon(FontAwesomeIcons.heartbeat),
          Icon(FontAwesomeIcons.questionCircle),
          Icon(FontAwesomeIcons.questionCircle),
        ]),
        drawer: DrawerOption(),
      ),
    );
  }
}
