import 'package:flutter/material.dart';

class Emergency extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _EmergencyState();
  }
}

class _EmergencyState extends State<Emergency> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("Emergency"),
    );
  }
}
