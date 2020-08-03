import 'package:flutter/material.dart';

class AddPost extends StatefulWidget {
  static const String id = 'add_post';

  @override
  _AddPostState createState() => _AddPostState();
}

class _AddPostState extends State<AddPost> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('Add Post'),
          margin: EdgeInsets.only(right: 58.0),
        )),
      ),
    );
  }
}
