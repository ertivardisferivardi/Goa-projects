def bumps(road):
    for i in road:
        if road.count("n") < 15 or road.count("n") == 15:
            return "Woohoo!"
    return "Car Dead"

def greet(name):
    return f"Hello {name.capitalize()}!"

def sum_even_numbers(seq): 
    listt = []
    for i in seq:
        if i % 2 == 0:
            listt.append(i)
    return sum(listt)  

def reverse(lst):
    empty_list = list()
    for i in lst:
        empty_list.insert(0, i)
    return empty_list

def averages(arr):
    if arr is None or len(arr) < 2:
        return []
    averages = []
    for i in range(len(arr) - 1):
        avg = (arr[i] + arr[i + 1]) / 2
        averages.append(avg)
    return averages
        
    def initialize_names(name):
    parts = name.split()
    Fname = parts[0]
    Lname = parts[-1]
    midname = []
    X = ' '
    if len(parts) <= 2:
        return name
    for i in parts[1:-1]:
        midname.append(i[0] + ".")
    Mname = " ".join(midname)
    return f"{Fname} {Mname} {Lname}"

def last_survivor(letters, coords):
    for x in coords:
        letters = letters[0:x] + letters[x+1:]
    return letters


def get_issuer(number):
    number = str(number)
    
    if len(number) == 15 and (number.startswith('34') or number.startswith('37')):
        return "AMEX"
    elif len(number) == 16 and number.startswith('6011'):
        return "Discover"
    elif len(number) == 16 and (number.startswith('51') or number.startswith('52') or number.startswith('53') or number.startswith('54') or number.startswith('55')):
        return "Mastercard"
    elif (len(number) == 13 or len(number) == 16) and number.startswith('4'):
        return "VISA"
    else:
        return "Unknown"

        def even_or_odd(s):
    even_sum = 0
    odd_sum = 0
    
    for i in s:
        digit = int(i)
        if digit % 2 == 0:
            even_sum += digit
        else:
            odd_sum += digit
            
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"