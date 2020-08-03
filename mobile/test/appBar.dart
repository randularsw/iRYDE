// This class dosen't used for implementation

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class MyAppBar extends StatelessWidget implements PreferredSizeWidget {
  MyAppBar({@required this.appTitle, this.sideIcon, this.tabList});

  final String appTitle;
  final Icon sideIcon;
  final List<Widget> tabList;

  dynamic setSideIcon(sideIcon) {
    return sideIcon;
  }

  dynamic setTabList(List tabList) {
    return tabList;
  }

  @override
  Widget build(BuildContext context) {
    return AppBar(
      bottom: TabBar(tabs: this.tabList),
      title: Center(child: Text(this.appTitle)),
      actions: <Widget>[
        IconButton(
          //alignment: Alignment.centerLeft,
          //padding: EdgeInsets.only(right: 10.0),
          splashColor: Colors.white12,
          icon: Icon(
            FontAwesomeIcons.chevronLeft,
            size: 20.0,
          ),
          //icon: setSideIcon(this.sideIcon),
          onPressed: () {
            // navigate back
            Navigator.pop(context);
          },
        ),
      ],
    );
  }

  @override
  Size get preferredSize => new Size.fromHeight(kToolbarHeight);
}
