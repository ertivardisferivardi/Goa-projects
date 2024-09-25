# def twice_as_old(Age,age):
#     age_difference = Age - 2 * age      abs()-----გარდაქმნის დადებითად int-ს
#     return abs(age_difference)

# print(twice_as_old(42,14))


# def sum_strings(str1, str2):
#     return str(int(str1 or 0) + int(str2 or 0))


# def reverse_seq(n):
#     return list(range(n, 0, -1))

# def no_space(x):
#     x = x.replace(' ','')                new function ragaca.raplace("ragaca","ragac")
#     return x
# print(no_space("ahdfgfdhjsds ahgkdsvshh ahgsjg ahsgdadshd ahgs"))   


# def factorial(n):
#     result = 1
#     for i in range(1, n + 1):
#         result *= i
#     return result

# def divisors(n):
#     L=[]
#     for i in range(2,n):
#         if n % i == 0:
#             L.append(i)
#     if L == []:
#         return str(n)+" is prime"
#     else:
#         return L

# def divisors_count(n):
#     count = 0
#     for i in range(1, n + 1):
#         if n % i == 0:
#             count += 1
#     return count
# print(divisors_count(30))

# def capitals(word):
#     indices = []
#     for i, char in enumerate(word):
#         if char.isupper():
#             indices.append(i)
#     return indices
# print(capitals("coDEWaRs"))
# print('CODEWARS'.lower())

#ახალი ფუნქცია რომელიც აბრუნებს   სიას, რომელიც შეიცავს სტრიქონში ყველა uppercase ასოების ინდექსებს.


# def solve(s):
#     upper_count = 0
#     lower_count = 0
    
#     for char in s:
#         if char.isupper():                  ახალი ფუნქცია რაღაცა.upper() რომელიც ყველა ასოს ადიდებს
#             upper_count += 1                               
#         elif char.islower():
#             lower_count += 1
    
#     if upper_count > lower_count:
#         return s.upper()
#     return s.lower()





