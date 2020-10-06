import 'package:http/http.dart' as http;
import 'package:iRYDE/core/globals.dart';
import 'dart:convert';

class QuestionService {
  //Add new question
  Future<Map> addQuestion(Map question) async {
    print(question);
    try {
      final res = await http.post('$baseUrl/api/questions',
          headers: null, body: question);

      Map data = jsonDecode(res.body);
      print(data);
      return data;
    } catch (err) {
      print(err);
    }
  }

  //Get all questions
  Future<List> getAllQuestions() async {
    final res = await http.get('$baseUrl/api/questions');
    List data = jsonDecode(res.body);
    return data;
  }

  //Get an specific question
  Future<List> getSpecificQuestion() async {
    final res = await http.get('$baseUrl/api/questions/:id');
    List data = jsonDecode(res.body);
    return data;
  }

  //Update question
  Future<List> updateQuestion() async {
    final res = await http.patch('$baseUrl/api/questions/:id');
    List data = jsonDecode(res.body);
    return data;
  }

  //delete an question
  Future<Map> deleteQuestion(id) async {
    final res = await http.delete('$baseUrl/api/questions/:id');
    Map data = jsonDecode(res.body);
    // print(data);
    return data;
  }
}
