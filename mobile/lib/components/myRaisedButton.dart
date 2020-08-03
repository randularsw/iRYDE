import 'package:flutter/material.dart';

class MyRaisedButton extends StatelessWidget {
  const MyRaisedButton({
    Key key,
    @required this.onPressed,
    @required this.buttonText,
    @required GlobalKey<FormState> formKey,
    @required String questionText,
  })  : _formKey = formKey,
        _questionText = questionText,
        super(key: key);

  final GlobalKey<FormState> _formKey;
  final String _questionText;

  final String buttonText;
  final Function onPressed;

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      color: Color(0XFF172b4d),
      child: Text(
        buttonText,
        style: TextStyle(color: Colors.white, fontSize: 14.0),
      ),
      onPressed: onPressed,
    );
  }
}
