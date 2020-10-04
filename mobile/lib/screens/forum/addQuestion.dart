import 'package:flutter/material.dart';
import 'package:iRYDE/components/myRaisedButton.dart';
import 'package:iRYDE/services/questionService.dart';

class AddQuestion extends StatefulWidget {
  static const String id = 'add_question';

  @override
  _AddQuestionState createState() => _AddQuestionState();
}

class _AddQuestionState extends State<AddQuestion> {
  String _questionText;
  String _questionTitle;

  final questionService = QuestionService();
  final _formKey = GlobalKey<FormState>();

  Widget _buildQuestionTitle() {
    return Container(
      child: TextFormField(
        decoration:
            InputDecoration(labelText: 'Type your question title here..'),
        validator: (value) {
          if (value.isEmpty) {
            return 'Question title is empty!';
          }
          return null;
        },
        onSaved: (String value) {
          _questionTitle = value;
        },
      ),
    );
  }

  Widget _buildQuestionText() {
    return Container(
      child: TextFormField(
        // maxLines: 10,
        decoration: InputDecoration(labelText: 'Type your question here..'),
        validator: (value) {
          if (value.isEmpty) {
            return 'Question text is empty!';
          }
          return null;
        },
        onSaved: (String value) {
          _questionText = value;
        },
      ),
    );
  }

  void addQuestion() async {
    try {
      if (_formKey.currentState.validate()) {
        _formKey.currentState.save();

        Map question = {"title": _questionTitle, "text": _questionText};
        print(question);
        Map d = await questionService.addQuestion(question);
      }
    } catch (err) {
      print(err);
    }
  }

  // final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

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
      body: Container(
        margin: EdgeInsets.all(12),
        child: Form(
            key: _formKey,
            child: Container(
              margin: EdgeInsets.symmetric(horizontal: 20.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  _buildQuestionTitle(),
                  _buildQuestionText(),
                  SizedBox(
                    height: 20.0,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: <Widget>[
                      MyRaisedButton(
                        onPressed: () {
                          if (!_formKey.currentState.validate()) {
                            return;
                          }
                          _formKey.currentState.save();
                          print(_questionText);
                        },
                        buttonText: 'Preview',
                        formKey: _formKey,
                        questionText: _questionText,
                      ),
                      SizedBox(
                        width: 20.0,
                      ),
                      MyRaisedButton(
                        formKey: _formKey,
                        questionText: _questionText,
                        buttonText: 'Post',
                        onPressed: () {
                          addQuestion();
                        },
                      ),
                    ],
                  ),
                ],
              ),
            )),
      ),
    );
  }
}
