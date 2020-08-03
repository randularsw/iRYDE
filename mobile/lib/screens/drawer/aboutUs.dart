import 'package:flutter/material.dart';

class AboutUsPage extends StatefulWidget {
  static const String id = 'about_us_page';

  @override
  _AboutUsPageState createState() => _AboutUsPageState();
}

class _AboutUsPageState extends State<AboutUsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('About Us'),
          margin: EdgeInsets.only(right: 58.0),
        )),
        // actions: <Widget>[
        //   IconButton(
        //     //alignment: Alignment.centerLeft,
        //     //padding: EdgeInsets.only(right: 10.0),
        //     splashColor: Colors.white12,
        //     icon: Icon(
        //       FontAwesomeIcons.chevronLeft,
        //       size: 20.0,
        //     ),
        //     onPressed: () {
        //       // navigate back
        //       Navigator.pop(context);
        //     },
        //   ),
        // ],
      ),
      //drawer: DrawerOption(),
    );
  }
}
