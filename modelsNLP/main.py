#1 - Cleaning Text Steps
    #1 - create a text file and take test from it
    #2 - convert the letter into lowercase 
    #3 - remove punctuations like .,!? (Hi! This is mick.)

import string
from collections import Counter
import matplotlib.pyplot as plt




#read text
text = open('read.txt', encoding='utf=8').read()
#print(text)

#convert to lovercase
lower_case = text.lower()
#print(string.punctuation)
#print(lower_case)

#removing punctuations
clean_text = lower_case.translate(str.maketrans('','',string.punctuation))
#clean_text = lower_case.translate(str.maketrans('l,o,i','x,y,z',string.punctuation))
    #str1 : Specifies the list of characters that need to be replaced.
    #str2 : Specifies the list of characters with which the characters need to be replaced.
    #str3 : Specifies the list of characters that needs to be deleted.
    #
    #Returns : Returns the translation table which specifies the conversions that can be used




tokenized_words = clean_text.split() 




#3 - stop words
#words that does not add any meaning to the sentence




stop_words = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself",
              "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself",
              "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these",
              "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do",
              "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while",
              "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before",
              "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again",
              "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each",
              "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than",
              "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]