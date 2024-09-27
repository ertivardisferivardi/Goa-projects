def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    
    if sorted(test) != sorted(original):
        return False
    return True


    def basic_tests(num1, num2):
        return str(int(num1) + int(num2))

def flick_switch(lst):
    x = 'flick'
    cy = []
    flicks= True
    for i in lst:
        if i == x:
            flicks = not flicks
            cy.append(flicks)
        else:
            cy.append(flicks)
    return cy


def open_or_senior(data):
    x = []
    
    for i,char in data:
        if i >= 55  and char > 7:
            x.append('Senior')
        else:
            x.append('Open')
    return x


def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    
    if sorted(test) != sorted(original):
        return False
    return True