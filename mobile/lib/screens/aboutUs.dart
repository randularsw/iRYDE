import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iryde/components/drawer.dart';

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
        title: Center(child: Text('About Us')),
        actions: <Widget>[
          IconButton(
            //alignment: Alignment.centerLeft,
            //padding: EdgeInsets.only(right: 10.0),
            splashColor: Colors.white12,
            icon: Icon(
              FontAwesomeIcons.backspace,
              size: 20.0,
            ),
            onPressed: () {
              // navigate back
              Navigator.pop(context);
            },
          ),
        ],
      ),
      drawer: DrawerOption(),
    );
  }
}
