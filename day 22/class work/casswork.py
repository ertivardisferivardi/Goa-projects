# დავალება: შექმენით range-ის კოპიო ფუნქცია - my_range. მას გადაეცემა start, end, step.
# ფუნქციაში შემდეგ შექმენით სია, სადაც გექნებათ start-სა და end-ს შორის არსებული რიცხვები,
# გაითვალისიწინეთ step. არ გამოიყენოთ range()

# def my_range(s):
    
#     nums = []

#     for i in s:                 ??????????????????
#         if i % 2 != 0:
#             nums.append(i)
#     print(nums)

# my_range([1,2,3,4,5,6,7,8,9,10])




# დავალება2: შექმენით ფუნქცია სახელად my_filter, რომელსაც გადაეცემა ერთი სია და სიმბოლო,
# რომელიც სიიდან ამოიშლება. საბოლოოდ დააბრუნეთ სია, სადაც არ იქნება არც ერთი ეს სიმბოლო


# def my_filter(name):

#     print(name[0],name[2],name[3])

# my_filter(["luka","levani","gio","nika"])


# დავალება3: შექმენით ფუნქცია, რომელსაც გადაეცემა სია.
# თქვენი დავალებაა, რომ ამ სიის დადებითი რიცხვების ნამრავლი დააბრუნოთ

# def multiply_positive_nums(list):
#     result = 1
#     for i in list:
#         if i > 0:
#             result *= i
#     print(result)

# multiply_positive_nums([5,-6,10,-9,2])




# დავალება4: შექმენით ფუნქცია სახელად greet,
# რომელსაც გამოძახებისას გადასცემთ მომხმარებლის სახელს - დაბეჭდავს 
# "Welcome მომხმარებლის სახელი აქ!".


# def greet(name):

#     print("Welcome",name)

# greet(input())


# დავალება5: შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი სია.
# ამ სიაში უნდა გაიგოთ კენტი რიცხვების ჯამი. 
# საბოლოოდ კი მიღებული შედეგი გამოიყენეთ ფუნქციის გარეთ, მიუმატეთ 5 და დაბეჭდეთ

# def odd_numbers_sum(numbers):

#     s = 0

#     for i in numbers:
#         if i % 2 != 0:
#             s += i                                    ????????????????
#     final_result = s + 5
#     return final_result
    
# odd_numbers_sum([1,2,3,4,5,6,7,8,9,10,11])
# print(final_result)










