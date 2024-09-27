# def update_light(current):
#     if current == "green":
#         return "yellow"
#     elif current == "yellow":
#         return "red"
#     return "green" 



# def find_difference(a, b):
#     a_multiply = a[0] * a[1] * a[2]
#     b_multiply = b[0] * b[1] * b[2]
#     return abs(a_multiply - b_multiply)
# print(find_difference([2,3,4],[3,4,5] ))


# def arithmetic(a, b, operator):
#     assembly = a + b
#     subtract = a - b
#     multiply = a * b
#     divided = a / b
    
#     if operator == "add":
#         return assembly
#     elif operator == "subtract":
#         return subtract
#     elif operator == "multiply":
#         return multiply
#     return divided


# def in_asc_order(arr):
#     return arr == sorted(arr)



# def show_sequence(n):
#     if n < 0:
#         return str(n) + "<0"
#     elif n == 0:
#         return "0=0"
#     else:
#         sum = 0
#         list = []
#         for i in range(n+1):
#             sum += i
#             list.append(str(i))
#         return  "+".join(list) + " = " + str(sum)

# def to_weird_case(words):
#     modified_words = []
#     for letter in words.split():
#         modified_letters = ""
#         for i,char in enumerate(letter):
#             if i % 2 == 0 or i == 0:
#                 modified_letters += char.upper()
#             else:
#                 modified_letters += char.lower()
#         modified_words.append(modified_letters)            
#     return " ".join(modified_words)

# def data_reverse(data):
#     segments = []
#     for i in range(0, len(data), 8):
#         segment = data[i:i+8]
#         segments.append(segment)

#     reversed_segments = []
#     for segment in reversed(segments):
#         reversed_segments.append(segment)

#     reversed_data = []
#     for segment in reversed_segments:
#         for bit in segment:
#             reversed_data.append(bit)

#     return reversed_data