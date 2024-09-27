def remove_exclamation_marks(s):
    return s.replace("!","")

def reverse(st):
    stt = st.split()
    reversed_stt = stt[::-1]
    return ' '.join(reversed_stt)

    def distinct(seq):
        result = []
        for item in seq:
            if item not in result:
                result.append(item)

    return result

def is_isogram(string):
    string = string.lower()
    for i in string:
        if string.count(i)>1:
            return False
    return True

    def remove_duplicate_words(s):
        ss = s.split()
        sing_word = []
        for i in ss:
            if i not in sing_word:
                sing_word.append(i)
        return " ".join(sing_word)

    def bouncing_ball(h, bounce, window):
        if h < 0 or (bounce < 0 or bounce > 1) or window > h:
            return -1 
        count = 0
        while h > window:
            h *= bounce
            count += 2
            
        return count -1  