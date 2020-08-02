import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/screens/homePage.dart';
import 'package:iryde/screens/discussionForumHome.dart';
import 'package:iryde/screens/emergencyHome.dart';
import 'package:iryde/screens/vehiclesPage.dart';
import 'package:iryde/screens/bookingHomePage.dart';

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
    VehiclesHome(),
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
        selectedItemColor: Colors.purpleAccent[400],
        items: [
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.home),
            title: Text('Home'),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidComment),
            title: Text('Forum'),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidDotCircle),
            title: Text('Emergency'),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.car),
            title: Text('Vehicles'),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.calendarMinus),
            title: Text('Bookings'),
          ),
        ],
      ),
    );
  }
}
