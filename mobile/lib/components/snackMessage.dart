import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class SnackMessage extends StatelessWidget {
  SnackMessage({@required this.text});

  final String text;

  @override
  Widget build(BuildContext context) {
    return RaisedButton(onPressed: () {
      Scaffold.of(context).showSnackBar(
        (SnackBar(
          content: Padding(
            padding: const EdgeInsets.only(right: 20.0),
            child: Text(this.text),
          ),
          backgroundColor: Colors.blueGrey[700],
          
        )),
      );
    });
  }
}
