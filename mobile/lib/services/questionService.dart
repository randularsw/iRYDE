import 'package:http/http.dart' as http;
import 'dart:convert';

class QuestionService {
  Future<Map> addQuestion(Map question) async {
    print(question);
    try {
      final res = await http.post('http://192.168.1.5:4000/api/questions',
          headers: null, body: question);

      Map data = jsonDecode(res.body);
      print(data);
      return data;
    } catch (err) {
      print(err);
    }
  }

  Future<List> getAllQuestions() async {
    final res = await http.get('http://192.168.1.5:4000/api/questions');
    List data = jsonDecode(res.body);
    return data;
  }
}
