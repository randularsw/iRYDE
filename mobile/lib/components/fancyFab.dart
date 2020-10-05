import 'package:flutter/material.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'package:flutter/rendering.dart';
import 'package:iRYDE/screens/forum/addQuestion.dart';
import 'package:iRYDE/screens/forum/addPost.dart';

class MyFancyFab extends StatefulWidget {
  @override
  _MyFancyFabState createState() => _MyFancyFabState();
}

class _MyFancyFabState extends State<MyFancyFab> {
  ScrollController scrollController;
  bool dialVisible = true;

  @override
  void initState() {
    super.initState();

    scrollController = ScrollController()
      ..addListener(() {
        setDialVisible(scrollController.position.userScrollDirection ==
            ScrollDirection.forward);
      });
  }

  void setDialVisible(bool value) {
    setState(() {
      dialVisible = value;
    });
  }

  Widget buildBody() {
    return ListView.builder(
      controller: scrollController,
      itemCount: 30,
      itemBuilder: (ctx, i) => ListTile(title: Text('Item $i')),
    );
  }

  Widget build(BuildContext context) {
    return Container(
      child: SpeedDial(
        // both default to 16
        marginRight: 18,
        marginBottom: 20,
        animatedIcon: AnimatedIcons.menu_close,
        animatedIconTheme: IconThemeData(size: 22.0),
        // this is ignored if animatedIcon is non null
        // child: Icon(Icons.add),
        visible: dialVisible,
        // If true user is forced to close dial manually
        // by tapping main button and overlay is not rendered.
        closeManually: false,
        curve: Curves.bounceIn,
        //overlayColor: Colors.black,
        overlayOpacity: 0.0,
        onOpen: () => print('OPENING DIAL'),
        onClose: () => print('DIAL CLOSED'),
        tooltip: 'Speed Dial',
        heroTag: 'speed-dial-hero-tag',
        backgroundColor: Color(0XFF172b4d),
        foregroundColor: Colors.white,
        elevation: 8.0,
        shape: CircleBorder(),
        children: [
          SpeedDialChild(
            child: Icon(Icons.question_answer),
            backgroundColor: Colors.blueGrey[300],
            label: 'Add Questions',
            labelStyle: TextStyle(fontSize: 12.0),
            onTap: () {
              Navigator.pushNamed(context, AddQuestion.id);
            },
          ),
          SpeedDialChild(
            child: Icon(Icons.add_comment),
            backgroundColor: Colors.blueGrey[300],
            label: 'Add Post',
            labelStyle: TextStyle(fontSize: 12.0),
            onTap: () {
              Navigator.pushNamed(context, AddPost.id);
            },
          ),
        ],
      ),
    );
  }
}
