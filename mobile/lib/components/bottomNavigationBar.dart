import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/screens/homePage.dart';
import 'package:iRYDE/screens/forum/discussionForumHome.dart';
import 'package:iRYDE/screens/emergency/emergencyHome.dart';
import 'package:iRYDE/screens/notifications/notificationPage.dart';
import 'package:iRYDE/screens/bookings/bookingHomePage.dart';

class MyBottomNavigationBar extends StatefulWidget {
  @override
  _MyBottomNavigationBarState createState() => _MyBottomNavigationBarState();
}

class _MyBottomNavigationBarState extends State<MyBottomNavigationBar> {
  int _currentIndex = 0;
  final List<Widget> _children = [
    HomePage(),
    DiscussionForumHome(),
    EmergencyHome(),
    NotificationPage(),
    BookingHome(),
  ];

  void onTappedBar(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        elevation: 20.0,
        onTap: onTappedBar,
        currentIndex: _currentIndex,
        unselectedItemColor: Colors.blueGrey[300],
        selectedItemColor: Color(0XFF172b4d),
        items: [
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.warehouse),
            title: Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Text(
                '  Home',
                style: TextStyle(fontSize: 11.0),
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidComment),
            title: Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Text(
                'Forum',
                style: TextStyle(fontSize: 11.0),
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidDotCircle),
            title: Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Text(
                'Emergency',
                style: TextStyle(fontSize: 11.0),
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidBell),
            title: Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Text(
                'Notifications',
                style: TextStyle(fontSize: 11.0),
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(
              FontAwesomeIcons.solidCalendarCheck,
            ),
            title: Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Text(
                'Bookings',
                style: TextStyle(fontSize: 11.0),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
