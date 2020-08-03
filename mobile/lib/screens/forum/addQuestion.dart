import 'package:flutter/material.dart';

class AddQuestion extends StatefulWidget {
  static const String id = 'add_question';

  @override
  _AddQuestionState createState() => _AddQuestionState();
}

class _AddQuestionState extends State<AddQuestion> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('Add Question'),
          margin: EdgeInsets.only(right: 58.0),
        )),
      ),
    );
  }
}
