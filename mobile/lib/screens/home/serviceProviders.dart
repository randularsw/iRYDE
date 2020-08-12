import 'package:flutter/material.dart';
import 'package:iRYDE/services/userService.dart';

class ServiceProviders extends StatefulWidget {
  @override
  _ServiceProvidersState createState() => _ServiceProvidersState();
}

class _ServiceProvidersState extends State<ServiceProviders> {
  final userService = UserService();
  List serviceProviders;
  @override
  void initState() {
    super.initState();
    getServiceProviders();
  }

  void getServiceProviders() async {
    try {
      var data = await userService.getServiceProviders();
      print(serviceProviders);
      setState(() {
        serviceProviders = data;
      });
    } catch (err) {
      print(err);
    }
  }

  @override
  Widget build(BuildContext context) {
    return serviceProviders != null
        ? Container(
            padding: EdgeInsets.all(4.0),
            child: GridView.builder(
                itemCount: serviceProviders?.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2),
                itemBuilder: (BuildContext context, int index) {
                  return Card(
                    child: Hero(
                      tag: index,
                      child: Material(
                        child: InkWell(
                          onTap: () {
                            print('object');
                          },
                          child: GridTile(
                              footer: GestureDetector(
                                behavior: HitTestBehavior.opaque,
                                child: GridTileBar(
                                  backgroundColor: Colors.black45,
                                  title: Text(
                                    serviceProviders[index]['name'],
                                    style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold),
                                  ),
                                  subtitle:
                                      Text(serviceProviders[index]['city']),
                                  trailing: Row(
                                    children: <Widget>[
                                      Container(
                                        child: Icon(
                                          Icons.star,
                                          color: Color(0xFFD4AF37),
                                        ),
                                      ),
                                      Text(
                                        '5.1',
                                        style: TextStyle(color: Colors.white),
                                      )
                                    ],
                                  ),
                                ),
                              ),
                              child: Image.asset(
                                'images/spPhoto.png',
                                fit: BoxFit.cover,
                              )),
                        ),
                      ),
                    ),
                  );
                }),
          )
        : Container();
  }
}

// return Container(child: FutureBuilder(builder: (context, snapshot) {
//       print(snapshot.data.length);
//       return snapshot.hasData
//           ?
//           : Center(
//               child: CircularProgressIndicator(),
//             );
//     }));
