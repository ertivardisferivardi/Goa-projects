def to_jaden_case(strings):
    rame = strings.split()
    lst = ''
    for char in rame:
        lst += char.capitalize() + ' '
        
    return lst[:-1]

def stray(arr):
    for i in arr:
        if arr.count(i)==1:
            return i
        
def dup(arry):
    sp = []
    
    for char in arry:
        x=''
        for i in range(len(char)):
            if  i == 0 or char[i]!=char[i-1]:
                x += char[i]
        sp.append(x)
    return sp


