import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class ServiceProviderServices extends StatefulWidget {
  @override
  _ServiceProviderServicesState createState() =>
      _ServiceProviderServicesState();
}

class _ServiceProviderServicesState extends State<ServiceProviderServices> {
  @override
  Widget build(BuildContext context) {
    final Map args = ModalRoute.of(context).settings.arguments;

    print(args['name']);
    return Column(
      children: <Widget>[
        Container(
          margin: EdgeInsets.all(15),
          height: 150.0,
          decoration: BoxDecoration(
            color: Color(0XFF172b4d),
            borderRadius: BorderRadius.all(
              Radius.circular(10),
            ),
          ),
          child: Row(
            // mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Expanded(
                child: Center(
                  child: Text('image'),
                ),
              ),
              Expanded(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      args['name'],
                      style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Colors.white),
                    ),
                    Text(
                      args['city'],
                      style: TextStyle(
                        fontSize: 13,
                        color: Color(0xFFD3D3D3),
                      ),
                    ),
                    RatingBarIndicator(
                      rating: 2.5,
                      itemBuilder: (context, index) => Icon(
                        Icons.star,
                        color: Colors.amber,
                      ),
                      itemCount: 5,
                      itemSize: 20.0,
                      direction: Axis.horizontal,
                    ),
                    RaisedButton(
                      onPressed: () {},
                      textColor: Colors.white,
                      color: Color(0xff5e72e4),
                      child: Text('Book'),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
