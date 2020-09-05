import 'package:flutter/material.dart';
import 'package:iRYDE/screens/drawer/vehicles/vehicleAdd.dart';
import 'package:iRYDE/screens/home/serviceProviderDetails/serviceProviderDetails.dart';
import 'package:iRYDE/screens/home/serviceProviderDetails/servicesBooking.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/auth/loginPage.dart';
import 'package:iRYDE/screens/splashScreen.dart';
import 'package:provider/provider.dart';
import 'screens/bookings/bookingHomePage.dart';
import 'screens/forum/questionForum.dart';
import 'screens/emergency/emergencyHome.dart';
import 'screens/home/homePage.dart';
import 'screens/drawer/vehiclesPage.dart';
import 'components/bottomNavigationBar.dart';
import 'screens/drawer/profilePage.dart';
import 'screens/notifications/notificationPage.dart';
import 'screens/drawer/settingsBasic.dart';
import 'screens/drawer/aboutUs.dart';
<<<<<<< HEAD
import 'screens/forum/addQuestion.dart';
import 'screens/forum/addPost.dart';
=======
import 'screens/auth/loginPage.dart';
import 'screens/auth/registerPage.dart';
>>>>>>> develop

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
          tabBarTheme: TabBarTheme(
            labelColor: Colors.white,
            unselectedLabelColor: Colors.grey[500],
          ),
          primaryColor: Color(0XFF172b4d),
          scaffoldBackgroundColor: Colors.white),
<<<<<<< HEAD

      //initialRoute: HomePage.id,
=======
      initialRoute: SplashScreen.id,
>>>>>>> develop
      routes: {
        SplashScreen.id: (context) => SplashScreen(),
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
<<<<<<< HEAD
        AddQuestion.id: (context) => AddQuestion(),
        AddPost.id: (context) => AddPost(),
=======
        ServiceProviderDetails.id: (context) => ServiceProviderDetails(),
        VehicleAdd.id : (context) => VehicleAdd(),
        ServiceBooking.id :(context) => ServiceBooking(),
>>>>>>> develop
      },
      // home: MyBottomNavigationBar(),
    );
  }
}
