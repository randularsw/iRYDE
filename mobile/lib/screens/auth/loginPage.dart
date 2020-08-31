import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:iRYDE/components/bottomNavigationBar.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/auth/registerPage.dart';
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

  bool visiblePassword = false;

  final _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();
    checkUser();
  }

  void checkUser() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    final tk = prefs.getString('token');
    if (tk != null) {
      Navigator.pushReplacementNamed(context, MyBottomNavigationBar.id);
    }
  }

  void loginUser() async {
    try {
      if (_formKey.currentState.validate()) {
        _formKey.currentState.save();

        Map user = {"email": email, "password": password};
        var itemInfo = Provider.of<UserModel>(context, listen: false);
        Map d = await itemInfo.loginUser(user);
        if (d != null) {
          Navigator.pushReplacementNamed(context, MyBottomNavigationBar.id);
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
      body: Center(
        child: Container(
          child: Column(
            children: <Widget>[
              Expanded(
                flex: 6,
                child: Form(
                  key: _formKey,
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
                              child: const Icon(FontAwesomeIcons.solidEnvelope),
                            ),
                          ),
                          keyboardType: TextInputType.emailAddress,
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter your email';
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
              Expanded(
                flex: 1,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text('Still not a user? '),
                    GestureDetector(
                      onTap: () {
                        Navigator.pushReplacementNamed(
                            context, RegisterPage.id);
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
      ),
    );
  }
}
