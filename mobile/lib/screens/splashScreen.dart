import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:iRYDE/components/bottomNavigationBar.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/auth/loginPage.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:async';
import 'package:permission_handler/permission_handler.dart';

class SplashScreen extends StatefulWidget {
  static const String id = 'splash_screen';
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    proceed();
    super.initState();
  }

  Future<void> proceed() async {
    await PermissionHandler().requestPermissions(
      [PermissionGroup.camera, PermissionGroup.microphone],
    );
    // new Timer(new Duration(seconds: 2), () {
    checkUser();
    // });
  }

  void checkUser() async {
    try {
      var userInfo = Provider.of<UserModel>(context, listen: false);
      Map user = await userInfo.updateCurrentUser();
      // print(user);
      if (user != null) {
        Navigator.pushReplacementNamed(context, MyBottomNavigationBar.id);
      } else {
        Navigator.pushReplacementNamed(context, LoginPage.id);
      }
    } catch (err) {
      print(err);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: Image.asset(
              'images/logo.png',
              scale: 2.7,
            ),
          ),
          Center(
            child: Container(
              child: SpinKitThreeBounce(color: Color(0XFF172b4d)),
            ),
          ),
        ],
      ),
      color: Colors.white,
    );
  }
}
