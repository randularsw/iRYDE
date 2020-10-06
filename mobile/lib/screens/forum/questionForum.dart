import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/components/fancyFab.dart';
import 'package:iRYDE/components/myRaisedButton.dart';
import 'package:iRYDE/services/questionService.dart';
import 'package:provider/provider.dart';
import 'package:iRYDE/core/userModel.dart';
import 'package:iRYDE/screens/forum/addQuestion.dart';

enum SelectedPage {
  pageOne,
  pageTwo,
}

class DiscussionForumHome extends StatefulWidget {
  static const String id = 'discussion_forum_home';

  @override
  _DiscussionForumHomeState createState() => _DiscussionForumHomeState();
}

class _DiscussionForumHomeState extends State<DiscussionForumHome> {
  SelectedPage selectedPage;
  List questions = [];
  String answerText;
  final _formKey = GlobalKey<FormState>();

  final questionService = QuestionService();

  @override
  void initState() {
    getAllQuestions();
    super.initState();
  }

  void onClick(question) async {
    // set provider in session
    var userInfo = Provider.of<UserModel>(context, listen: false);
    Map user = userInfo.user;
  }

  void getAllQuestions() async {
    try {
      var data = await questionService.getAllQuestions();

      print(data);
      setState(() {
        questions = data;
      });
    } catch (err) {
      print(err);
    }
  }

  void likeQuestion(id) async {
    try {
      var userInfo = Provider.of<UserModel>(context, listen: false);
      Map user = userInfo.user;

      print(user);
      Map data = await questionService.likeQuestion(id, user['_id']);
      if (data != null) {
        getAllQuestions();
      }
    } catch (err) {
      print(err);
    }
  }

  void addAnswer(id) async {
    try {
      if (_formKey.currentState.validate()) {
        _formKey.currentState.save();
        var userInfo = Provider.of<UserModel>(context, listen: false);
        Map user = userInfo.user;
        print(user);
        Map data = await questionService.addAnswer(id, user['_id'], answerText);
      }
    } catch (err) {
      print(err);
    }
  }

  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          bottom: TabBar(
            tabs: [
              Tab(text: 'Discussion'),
              Tab(text: 'Posts'),
            ],
          ),
          title: Center(
              child: Container(
            child: Text('Social Hub'),
            margin: EdgeInsets.only(right: 58.0),
          )),

          //   actions: <Widget>[
          //   IconButton(
          //     //alignment: Alignment.centerLeft,
          //     //padding: EdgeInsets.only(right: 10.0),
          //     splashColor: Colors.white12,
          //     icon: Icon(
          //       FontAwesomeIcons.bell,
          //       size: 20.0,
          //     ),
          //     onPressed: () {
          //       // Navigate to notifications
          //       Navigator.pushNamed(context, NotificationPage.id);
          //     },
          //   ),
          // ]
        ),
        body: TabBarView(children: [
          Container(
            child: ListView.builder(
                padding: const EdgeInsets.all(10),
                itemCount: questions?.length,
                itemBuilder: (BuildContext context, int index) {
                  return Container(
                    // height: 80,
                    //color: Colors.amber[colorCodes[index]],
                    child: GestureDetector(
                      onTap: () => onClick(questions[index]),
                      child: Padding(
                        padding: const EdgeInsets.only(
                          bottom: 10.0,
                        ),
                        child: Container(
                          color: Colors.grey[200],
                          child: Padding(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 15, vertical: 10),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    GestureDetector(
                                      onTap: () {
                                        likeQuestion(questions[index]["_id"]);
                                      },
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.start,
                                        children: <Widget>[
                                          Icon(
                                            Icons.favorite,
                                            color: Colors.blueGrey,
                                            size: 24.0,

                                            // semanticLabel:
                                            //     'Text to announce in accessibility modes',
                                          ),
                                          Text(
                                            '  ${questions[index]["likeCount"]}',
                                            textAlign: TextAlign.end,
                                            style: TextStyle(
                                              fontSize: 10.0,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Text(
                                      questions[index]["createdAt"],
                                      textAlign: TextAlign.end,
                                      style: TextStyle(
                                        fontSize: 10.0,
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: 5,
                                ),
                                Text(
                                  questions[index]["title"],
                                  textAlign: TextAlign.start,
                                  style: TextStyle(
                                    fontSize: 15.0,
                                  ),
                                ),
                                SizedBox(
                                  height: 5,
                                ),
                                Text(
                                  questions[index]["text"],
                                  textAlign: TextAlign.start,
                                  style: TextStyle(
                                    fontSize: 15.0,
                                  ),
                                ),
                                SizedBox(
                                  height: 5,
                                ),
                                ExpansionTile(
                                  key: GlobalKey(),
                                  title: Text(
                                    'Answers',
                                    style: TextStyle(
                                      fontSize: 12.0,
                                    ),
                                  ),
                                  children: <Widget>[
                                    // Container(
                                    //     child: ListView.builder(
                                    //   padding: const EdgeInsets.all(10),
                                    //   itemCount:
                                    //       questions[index]["answers"]?.length,
                                    //   itemBuilder:
                                    //       (BuildContext context, int idx) {
                                    //     return Container(
                                    //         child: Column(
                                    //       children: <Widget>[
                                    //         Text(
                                    //           questions[index]["answers"][idx]
                                    //               ["text"],
                                    //           textAlign: TextAlign.end,
                                    //           style: TextStyle(
                                    //             fontSize: 10.0,
                                    //           ),
                                    //         ),
                                    //       ],
                                    //       crossAxisAlignment:
                                    //           CrossAxisAlignment.stretch,
                                    //     ));
                                    //   },
                                    // )),
                                    Form(
                                      key: _formKey,
                                      child: Container(
                                        child: TextFormField(
                                          // maxLines: 10,
                                          decoration: InputDecoration(
                                              labelText:
                                                  'Type your answer here..'),
                                          validator: (value) {
                                            // if (value.isEmpty) {
                                            //   return 'Please enter your email';
                                            // }
                                            // if (emailError ==
                                            //     "Email doesn't exist") {
                                            //   String err = emailError;
                                            //   emailError = null;
                                            //   return err;
                                            // }
                                            return null;
                                          },
                                          onSaved: (value) {
                                            answerText = value;
                                          },
                                        ),
                                      ),
                                    ),
                                    RaisedButton(
                                      onPressed: () {
                                        addAnswer(questions[index]["_id"]);
                                      },
                                      child: Text("Post"),
                                    )
                                  ],
                                )
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                }),
          ),
          Container(
            child: ListView(
              children: <Widget>[],
            ),
          ),
        ]),
        // floatingActionButton: FloatingActionButton(
        //   onPressed: () {},
        //   child: Icon(
        //     FontAwesomeIcons.penAlt,
        //   ),
        // ),
        floatingActionButton: MyFancyFab(),
        floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
        drawer: DrawerOption(),
        //bottomNavigationBar: MyBottomNavigationBar(),
      ),
    );
  }
}
