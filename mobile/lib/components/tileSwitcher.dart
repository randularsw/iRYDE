import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class TileSwitcher extends StatelessWidget {
  TileSwitcher({@required this.onPress, @required this.colour});

  final Function onPress;
  final Color colour;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPress,
      child: Container(
        color: colour,
        child: Icon(
        FontAwesomeIcons.minus,
        size: 50.0,
        
      ),
      ),
    );
  }
}
