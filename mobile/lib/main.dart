import 'package:flutter/material.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/auth/loginPage.dart';
import 'package:provider/provider.dart';
import 'screens/bookings/bookingHomePage.dart';
import 'screens/forum/discussionForumHome.dart';
import 'screens/emergency/emergencyHome.dart';
import 'screens/homePage.dart';
import 'screens/drawer/vehiclesPage.dart';
import 'components/bottomNavigationBar.dart';
import 'screens/drawer/profilePage.dart';
import 'screens/notifications/notificationPage.dart';
import 'screens/drawer/settingsBasic.dart';
import 'screens/drawer/aboutUs.dart';
import 'screens/auth/loginPage.dart';
import 'screens/auth/registerPage.dart';

void main() => runApp(
      ChangeNotifierProvider(
        create: (context) => UserModel(),
        child: MyApp(),
      ),
    );

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          primaryColor: Color(0XFF172b4d),
          scaffoldBackgroundColor: Colors.white),
      initialRoute: LoginPage.id,
      routes: {
        LoginPage.id: (context) => LoginPage(),
        RegisterPage.id: (context) => RegisterPage(),
        MyBottomNavigationBar.id: (context) => MyBottomNavigationBar(),
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
      // home: MyBottomNavigationBar(),
    );
  }
}
