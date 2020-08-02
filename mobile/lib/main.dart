import 'package:flutter/material.dart';
import 'screens/bookingHomePage.dart';
import 'screens/discussionForumHome.dart';
import 'screens/emergencyHome.dart';
import 'screens/homePage.dart';
import 'screens/vehiclesPage.dart';
import 'components/bottomNavigationBar.dart';
import 'screens/profilePage.dart';
import 'screens/notificationPage.dart';
import 'screens/settingsBasic.dart';
import 'screens/aboutUs.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.purple,
      scaffoldBackgroundColor: Colors.white),
      //initialRoute: HomePage.id,
      routes: {
        HomePage.id: (context) => HomePage(),
        BookingHome.id: (context) => BookingHome(),
        EmergencyHome.id: (context) => EmergencyHome(),
        DiscussionForumHome.id: (context) => DiscussionForumHome(),
        VehiclesHome.id: (context) => VehiclesHome(),
        ProfilePage.id: (context) => ProfilePage(),
        NotificationPage.id: (context) => NotificationPage(),
        SettingsGeneral.id: (context) => SettingsGeneral(),
        AboutUsPage.id: (context) => AboutUsPage(),
      },
      home: MyBottomNavigationBar(),
    );
  }
}

