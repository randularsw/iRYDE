import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'emergency.dart';
import 'vehicles.dart';
import 'bookings.dart';
import 'home.dart';
import 'forum.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  int _currentIndex = 0;
  final tabs = [
    Home(),
    Forum(),
    Emergency(),
    Vehicles(),
    Bookings(),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFF172b4d),
          title: Text('My App'),
          actions: <Widget>[
            IconButton(
              icon: Icon(FontAwesomeIcons.solidBell),
              onPressed: () {
                // do something
              },
            ),
            IconButton(
              icon: Image.network(
                'https://cdn2.vectorstock.com/i/1000x1000/94/51/young-woman-avatar-icon-flat-style-vector-12459451.jpg',
              ),
              onPressed: () {
                // do something
              },
            ),
          ],
        ),
        body: tabs[_currentIndex],
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,

          type: BottomNavigationBarType.fixed,
          backgroundColor: Color(0xFF172b4d),
          // fixedColor: Colors.white,
          selectedItemColor: Color(0xFFf4f5F7),
          unselectedItemColor: Color(0xFFafb7c4),
          // iconSize: 30,
          // selectedFontSize: 10,
          items: [
            BottomNavigationBarItem(
              icon: Icon(FontAwesomeIcons.home),
              title: Text('Home'),
            ),
            BottomNavigationBarItem(
              icon: Icon(FontAwesomeIcons.solidComments),
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
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
        ),
      ),
    );
  }
}
