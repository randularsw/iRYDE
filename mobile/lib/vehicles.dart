import 'package:flutter/material.dart';

class Vehicles extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _VehiclesState();
  }
}

class _VehiclesState extends State<Vehicles> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("Vehicles"),
    );
  }
}
