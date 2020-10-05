import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/emergency/call.dart';
import 'package:iRYDE/services/notificationService.dart';
import 'package:agora_rtc_engine/rtc_engine.dart';
import 'package:iRYDE/services/sessionService.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

class NotificationPage extends StatefulWidget {
  static const String id = 'notification_page';

  @override
  _NotificationPageState createState() => _NotificationPageState();
}

class _NotificationPageState extends State<NotificationPage> {
  List notifications = [];

  final notificationService = NotificationService();
  final sessionService = SessionService();

  @override
  void initState() {
    getAllNotifications();
    super.initState();
  }

  void getAllNotifications() async {
    try {
      var data = await notificationService.getNotifications();
      setState(() {
        notifications = data;
      });
    } catch (err) {
      print(err);
    }
  }

  void onClick(notification) async {
    // set provider in session
    var userInfo = Provider.of<UserModel>(context, listen: false);
    Map user = userInfo.user;
    SharedPreferences prefs = await SharedPreferences.getInstance();
    if (prefs.get('session') != null) {
      print('Already in a session');
      return;
    }
    var s = await sessionService.setSessionProvider(
        notification['forId'], user['_id']);
    prefs.setString('session', notification['forId']);
    if (s['providerId'] == user['_id']) {
      // Navigator.pushNamed(context, CallPage.id);
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => CallPage(
            channelName: notification['forId'],
            role: ClientRole.Broadcaster,
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Center(
              child: Container(
            child: Text('Notifications'),
            margin: EdgeInsets.only(right: 58.0),
          )),
        ),
        drawer: DrawerOption(),
        body: Container(
          child: ListView.builder(
              padding: const EdgeInsets.all(10),
              itemCount: notifications?.length,
              itemBuilder: (BuildContext context, int index) {
                return Container(
                  // height: 80,
                  //color: Colors.amber[colorCodes[index]],
                  child: GestureDetector(
                    onTap: () => onClick(notifications[index]),
                    child: Padding(
                      padding: const EdgeInsets.only(
                        bottom: 10.0,
                      ),
                      child: Container(
                        color: Colors.grey[200],
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 15, vertical: 10),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Text(
                                notifications[index]["title"],
                                textAlign: TextAlign.start,
                                style: TextStyle(
                                    // fontSize: 20.0,
                                    ),
                              ),
                              SizedBox(
                                height: 5,
                              ),
                              Text(
                                notifications[index]["createdAt"],
                                textAlign: TextAlign.end,
                                style: TextStyle(
                                  fontSize: 10.0,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              }),
        ));
  }
}

// class NotificationTile extends StatelessWidget {
//   const NotificationTile({
//     Key key,
//   }) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.only(
//         left: 20.0,
//         right: 20.0,
//         bottom: 20.0,
//       ),
//       child: Container(
//         width: MediaQuery.of(context).size.width,
//         height: 20.0,
//         color: Colors.blue,
//         child: Padding(
//           padding: const EdgeInsets.all(10.0),
//           child: Text(
//             'Notification 1',
//             textAlign: TextAlign.center,
//             style: TextStyle(
//               fontSize: 20.0,
//             ),
//           ),
//         ),
//       ),
//     );
//   }
// }
