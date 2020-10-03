import 'package:flutter/material.dart';
import 'package:iRYDE/screens/home/serviceProviderDetails/serviceProviderServices.dart';

class ServiceProviderDetails extends StatefulWidget {
  static const String id = 'service_provider_details';

  @override
  _ServiceProviderDetailsState createState() => _ServiceProviderDetailsState();
}

class _ServiceProviderDetailsState extends State<ServiceProviderDetails> {
  Map sp = {};
  @override
  void initState() {
    super.initState();
    // Future.delayed(Duration.zero, () {
    //   setState(() {
    //     sp = ModalRoute.of(context).settings.arguments;
    //   });
    //   print(sp);
    // });
  }

  @override
  Widget build(BuildContext context) {
    sp = ModalRoute.of(context).settings.arguments;
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Center(
            child: Container(
              child: Text(sp.containsKey('name') ? sp['name'] : ''),
              margin: EdgeInsets.only(right: 58.0),
            ),
          ),
          bottom: TabBar(
            tabs: [
              Tab(text: 'Services '),
              Tab(text: 'Promotions'),
            ],
          ),
        ),
        body: TabBarView(children: [
          ServiceProviderServices(sp:sp),
          Container(
            margin: EdgeInsets.only(left: 20, right: 20, top: 20, bottom: 50),
            height: 50.0,
            width: double.infinity,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(10),
                  topRight: Radius.circular(10),
                  bottomLeft: Radius.circular(10),
                  bottomRight: Radius.circular(10)),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.2),
                  spreadRadius: 3,
                  blurRadius: 5,
                  offset: Offset(0, 2), // changes position of shadow
                ),
              ],
            ),
          ),
        ]),
      ),
    );
  }
}
