import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:iRYDE/components/drawer.dart';
import 'package:iRYDE/components/fancyFab.dart';
import 'package:iRYDE/services/questionService.dart';

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

  @override
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
            child: ListView(
              children: <Widget>[
                ListTile(
                  title: Text('Buh hah haa'),
                ),
                ListTile(
                  title: Text('Buh hah haa'),
                ),
                ListTile(
                  title: Text('Buh hah haa'),
                ),
                ListTile(
                  title: Text('Buh hah haa'),
                ),
              ],
            ),
          ),
          Container(
            child: ListView(
              children: <Widget>[
                ListTile(
                  title: Text('Buh hah haa'),
                ),
                ListTile(
                  title: Text('Buh hah haa'),
                ),
                ListTile(
                  title: Text('Buh hah haa'),
                ),
                ListTile(
                  title: Text('Buh hah haa'),
                ),
              ],
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
