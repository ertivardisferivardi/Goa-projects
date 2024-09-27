# def even_or_odd(number):
#     if number % 2 == 0:
#         return "Even"
#     else:
#         return "Odd"
    
# def accum(st):
#     parts = []
    
#     for i in range(len(st)):
#         char = st[i]
#         pparts = char.upper() + char.lower() * i
#         parts.append(pparts)
    
#     result = '-'.join(parts)
#     return result

# def find_it(seq):
#     for i in seq:
#         if seq.count(i) % 2 != 0:
#             return i

# def sum_two_smallest_numbers(numbers):
#     numbers.sort()
#     return numbers[0] + numbers[1]


# def solution(number):
#     res = 0
#     for i in range(number):
#         if i%3==0 or i%5==0:
#             res+=i
#     return res