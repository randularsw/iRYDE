import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/components/bottomNavigationBar.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/auth/registerPage.dart';
import 'package:iRYDE/services/questionService.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LoginPage extends StatefulWidget {
  static const String id = 'login_page';

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String email;
  String password;

  String emailError;
  String passwordError;

  bool visiblePassword = false;

  final _formKey = GlobalKey<FormState>();

  void loginUser() async {
    try {
      if (_formKey.currentState.validate()) {
        _formKey.currentState.save();

        Map user = {"email": email, "password": password};
        var itemInfo = Provider.of<UserModel>(context, listen: false);
        Map d = await itemInfo.loginUser(user);
        if (d['_id'] != null) {
          Navigator.pushReplacementNamed(context, MyBottomNavigationBar.id);
        } else {
          setState(() {
            if (d['data'] == "Email doesn't exist") {
              emailError = d['data'];
            } else if (d['data'] == "Invalid password") {
              passwordError = d['data'];
            }
          });
        }
      }
    } catch (err) {
      print(err);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Container(
          child: Text('Login'),
        )),
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Expanded(
              flex: 6,
              child: Form(
                key: _formKey,
                child: Center(
                  child: SingleChildScrollView(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Container(
                          margin: EdgeInsets.symmetric(horizontal: 50),
                          child: TextFormField(
                            decoration: const InputDecoration(
                              labelText: 'Email',
                              icon: const Padding(
                                padding: const EdgeInsets.only(top: 15.0),
                                child:
                                    const Icon(FontAwesomeIcons.solidEnvelope),
                              ),
                            ),
                            keyboardType: TextInputType.emailAddress,
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'Please enter your email';
                              }
                              if (emailError == "Email doesn't exist") {
                                String err = emailError;
                                emailError = null;
                                return err;
                              }
                              return null;
                            },
                            onSaved: (value) {
                              email = value;
                            },
                          ),
                        ),
                        Container(
                          margin: EdgeInsets.symmetric(horizontal: 50),
                          child: TextFormField(
                            obscureText: !visiblePassword,
                            decoration: const InputDecoration(
                              labelText: 'Password',
                              icon: const Padding(
                                padding: const EdgeInsets.only(top: 15.0),
                                child: const Icon(FontAwesomeIcons.key),
                              ),
                            ),
                            keyboardType: TextInputType.visiblePassword,
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'Please enter your password';
                              }
                              if (passwordError == "Invalid password") {
                                String err = passwordError;
                                passwordError = null;
                                return err;
                              }
                              return null;
                            },
                            onSaved: (value) {
                              password = value;
                            },
                          ),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        RaisedButton(
                          color: Color(0XFF172b4d),
                          textColor: Colors.white,
                          onPressed: () {
                            loginUser();
                          },
                          child: Text('Login'),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            Expanded(
              flex: 1,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text('Still not a user? '),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushReplacementNamed(context, RegisterPage.id);
                    },
                    child: Text(
                      'Register',
                      style: TextStyle(
                          fontWeight: FontWeight.bold, color: Colors.blue),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
