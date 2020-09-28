import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';

class NotificationPage extends StatefulWidget {
  static const String id = 'notification_page';

  @override
  _NotificationPageState createState() => _NotificationPageState();
}

class _NotificationPageState extends State<NotificationPage> {
  List notifications = [
    {"title": "xHellos srth ert roih rh iosf hfd"},
    {"title": "Hellos srth ert roih r"}
  ];
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
                  height: 80,
                  //color: Colors.amber[colorCodes[index]],
                  child: GestureDetector(
                    onTap: () => print(55),
                    child: Padding(
                      padding: const EdgeInsets.only(
                        bottom: 10.0,
                      ),
                      child: Container(
                        // width: MediaQuery.of(context).size.width,
                        // height: 50.0,
                        color: Colors.grey[200],
                        child: Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: Text(
                            notifications[index]["title"],
                            textAlign: TextAlign.center,
                            style: TextStyle(
                                // fontSize: 20.0,
                                ),
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
