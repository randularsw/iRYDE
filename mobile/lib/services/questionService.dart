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
    print(res);
    List data = jsonDecode(res.body);
    return data;
  }

  //delete an question
  Future<List> deleteQuestion(id) async {
    final res = await http.delete('$baseUrl/api/questions/$id');
    List data = jsonDecode(res.body);
    // print(data);
    return data;
  }

// Like a question
  Future<Map> likeQuestion(id, userId) async {
    //print(id);
    final res = await http
        .put('$baseUrl/api/questions/$id/like', body: {"userHandle": userId});
    print('1111111111111111111111111111111111111111111111111111');
    print(res);
    Map data = jsonDecode(res.body);
    return data;
  }

//add answer
  Future<Map> addAnswer(id, userId, userName, text) async {
    print('7777777777777777777777777777777777777777777777777777777777');
    print(id);
    print(userId);
    print(text);
    //print(id);
    final res = await http.put('$baseUrl/api/questions/$id/answer',
        body: {"userHandle": userId,"userName":userName, "text": text});
    print('1111111111111111111111111111111111111111111111111111');
    print(res);
    Map data = jsonDecode(res.body);
    return data;
  }
}
