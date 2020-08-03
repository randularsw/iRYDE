import 'package:flutter/material.dart';
import 'package:iRYDE/components/myRaisedButton.dart';

class AddPost extends StatefulWidget {
  static const String id = 'add_post';

  @override
  _AddPostState createState() => _AddPostState();
}

class _AddPostState extends State<AddPost> {
  String _postText;

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Widget _buildPostText() {
    return Container(
      child: TextFormField(
        decoration: InputDecoration(labelText: 'What\'s on your mind..'),
        validator: (String value) {
          if (value.isEmpty) {
            return 'Post is empty!';
          }
        },
        onSaved: (String value) {
          _postText = value;
        },
      ),
    );
  }

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
      body: Container(
        margin: EdgeInsets.all(12),
        child: Form(
            key: _formKey,
            child: Container(
              margin: EdgeInsets.symmetric(horizontal: 20.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  _buildPostText(),
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
                          print(_postText);
                        },
                        buttonText: 'Preview',
                        formKey: _formKey,
                        questionText: _postText,
                      ),
                      SizedBox(
                        width: 20.0,
                      ),
                      MyRaisedButton(
                        formKey: _formKey,
                        questionText: _postText,
                        buttonText: 'Post',
                        onPressed: () {
                          if (!_formKey.currentState.validate()) {
                            return;
                          }
                          _formKey.currentState.save();
                          print(_postText);
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
