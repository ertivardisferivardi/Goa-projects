
def fillable(stock, merch, n):
    return stock.get(merch, 0) >= n


def user_contacts(data):
    dictionary={}
    for t in data:
        if len(t)==1:
            dictionary[t[0]]=None
        elif len(t)==2:
            dictionary[t[0]]=t[1]
    return dictionary



def modes(data):
    frequency = {}
    for item in data:
        frequency[item] = frequency.get(item, 0) + 1
    max_freq = max(frequency.values())
    
    modes_list = []
    for item, freq in frequency.items():
        if freq == max_freq and max_freq > 1:
            modes_list.append(item)
    
    return sorted(modes_list)
