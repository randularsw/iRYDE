import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/components/fancyFab.dart';
import 'package:iRYDE/services/questionService.dart';
import 'package:provider/provider.dart';
import 'package:iRYDE/core/userModel.dart';

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

  final questionService = QuestionService();

  @override
  void initState() {
    getAllQuestions();
    super.initState();
  }

  void getAllQuestions() async {
    try {
      var data = await questionService.getAllQuestions();
      setState(() {
        questions = data;
      });
    } catch (err) {
      print(err);
    }
  }

  void onClick(question) async {
    // set provider in session
    var userInfo = Provider.of<UserModel>(context, listen: false);
    Map user = userInfo.user;
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
                                Text(
                                  questions[index]["createdAt"],
                                  textAlign: TextAlign.end,
                                  style: TextStyle(
                                    fontSize: 10.0,
                                  ),
                                ),
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
