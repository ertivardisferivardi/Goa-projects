def pig_it(text):
    words = []
    for i in text.split():
        if i.isalpha():
            words.append(i[1: ] + i[0] + "ay") 
        else:
            words.append(i) 
    return " ".join(words)

def duplicate_count(text):
    txt = []
    count = 0
    for i in text.lower():
        txt.append(i)
        if txt.count(i) == 2:
            count += 1
    return count