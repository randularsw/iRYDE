import 'package:flutter/material.dart';
import 'screens/bookings/bookingHomePage.dart';
import 'screens/forum/questionForum.dart';
import 'screens/emergency/emergencyHome.dart';
import 'screens/homePage.dart';
import 'screens/drawer/vehiclesPage.dart';
import 'components/bottomNavigationBar.dart';
import 'screens/drawer/profilePage.dart';
import 'screens/notifications/notificationPage.dart';
import 'screens/drawer/settingsBasic.dart';
import 'screens/drawer/aboutUs.dart';
import 'screens/forum/addQuestion.dart';
import 'screens/forum/addPost.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          primaryColor: Color(0XFF172b4d),
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
        AddQuestion.id: (context) => AddQuestion(),
        AddPost.id: (context) => AddPost(),
      },
      home: MyBottomNavigationBar(),
    );
  }
}
