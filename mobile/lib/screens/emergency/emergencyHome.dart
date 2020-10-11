import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/components/snackMessage.dart';
import 'package:iRYDE/core/globals.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/emergency/call.dart';
import 'package:iRYDE/services/sessionService.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:agora_rtc_engine/rtc_engine.dart';

class EmergencyHome extends StatefulWidget {
  static const String id = 'emergency_home_page';

  @override
  _EmergencyHomeState createState() => _EmergencyHomeState();
}

class _EmergencyHomeState extends State<EmergencyHome> {
  bool isRequested = false;
  int limit = 30;
  final sessionService = SessionService();

  @override
  void initState() {
    checkSession();
    super.initState();
  }

  void checkSession() async {
    try {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      String sessionId = prefs.get('session');
      if (sessionId != null) {
        setState(() {
          isRequested = true;
        });
        // loop to check if a provider accepted
        int i = 1;
        Timer.periodic(const Duration(seconds: 2), (timer) {
          if (i == limit || isRequested == false) {
            timer.cancel();
            onCancel();
            return;
          }
          i++;
          getSession(sessionId);
        });
      }
    } catch (err) {
      print(err);
    }
  }

  void getSession(sessionId) async {
    try {
      print("checking for provider");
      var session = await sessionService.getSession(sessionId);
      // print(session);
      if (session['providerId'] != null && isRequested == true) {
        setState(() {
          isRequested = false;
        });
        if (isRequested == false) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => CallPage(
                channelName: sessionId,
                role: ClientRole.Broadcaster,
              ),
            ),
          );
        }
      }
    } catch (err) {
      print(err);
    }
  }

  void onRequest() async {
    try {
      setState(() {
        isRequested = true;
      });
      var userInfo = Provider.of<UserModel>(context, listen: false);
      Map user = userInfo.user;
      Map res =
          await sessionService.createSession({"requesterId": user['_id']});

      SharedPreferences prefs = await SharedPreferences.getInstance();
      prefs.setString('session', res['_id']);
      int i = 1;
      Timer.periodic(const Duration(seconds: 2), (timer) {
        if (i == limit || isRequested == false) {
          timer.cancel();
          onCancel();
          return;
        }
        i++;
        getSession(res['_id']);
      });
    } catch (err) {
      print(err);
    }
  }

  void onCancel() async {
    try {
      setState(() {
        isRequested = false;
      });
      SharedPreferences prefs = await SharedPreferences.getInstance();
      String sessionId = prefs.get('session');
      await sessionService.deleteSession(sessionId);
      prefs.remove('session');
    } catch (err) {
      print(err);
    }
  }

  @override
  void dispose() {
    setState(() {
      isRequested = false;
    });
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('Emergency'),
          margin: EdgeInsets.only(right: 58.0),
        )),
      ),
      drawer: DrawerOption(),
      // body: SnackMessage(
      //   text: 'We are here for you !',
      // ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              "Facing a trouble?",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
            ),
            Text("Request help from a user"),
            Container(
              // margin: EdgeInsets.symmetric(horizontal: 120.0),
              child: RaisedButton(
                color: primaryColor,
                textColor: Colors.white,
                onPressed: (!isRequested)
                    ? () {
                        onRequest();
                      }
                    : null,
                child: (isRequested == true)
                    ? Text('Requesting ')
                    : Text('Request'),
              ),
            ),
            if (isRequested == true)
              SpinKitRipple(
                color: primaryColor,
                size: 80,
              ),
            if (isRequested)
              GestureDetector(
                onTap: () => onCancel(),
                child: Text(
                  'Cancel',
                  style: TextStyle(
                      fontWeight: FontWeight.bold, color: Colors.black),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
