# user_budget = int(input("User balance: "))
# print(input("What do you want to purchase: "))
# item_value = int(input("Prise of the item: "))
# if user_budget > item_value:
#     print(input("Confirm purchase: "))
#     print("offer purchased")
# else:
#     print("Sorry,payment is not possible due to insufficient balance")    



# password = "black/cat"
# attempt = 1
# user_password = input("Enter password: ")
# lock = "system blocked"
# while user_password != password and attempt <= 5:
#     user_password = input("Enter password: ")

#     if password == user_password:
#         print("you have acsses on you account")
    
#     else:
#         print("Inccorect try again")
#         print("attempt")
#         print(attempt)
#         attempt += 1
#         if attempt > 5:
#             print("Out of attempts")
#             print(lock)


# start = int(input("please enter the start value: "))
# end = int(input("please enter the end value: "))
# step = int(input("please enter the step value: "))

# for i in range(start,end + 1,step):
#     print(i)

# print("Value the triangle sides")
# s1 = int(input("Enter first side of the triangle: "))
# s2 = int(input("Enter second side of the triangle: "))
# s3 = int(input("Enter third side of the triangle: "))
# print("Game started")

# while s1 + s2 < s3 and s1 + s3 < s2 and s2 + s3 < s1:
#     s1 = int(input("Enter first side of the triangle: "))
#     s2 = int(input("Enter second side of the triangle: "))
#     s3 = int(input("Enter third side of the triangle: "))
#     if s1 + s2 > s3 and s1 + s3 < s2 and s2 + s3 < s1:
#         print("Congrats you did it")
#     else:
#         print("Try again")

# operation = input("Please enter operation (+,-,*,/,): ")
# num1 = int(input("Enter first number: "))
# num2 = int(input("Enter second number: "))

# if operation == '+':
#     print(num1 + num2)
# elif operation == '-':
#     print(num1 - num2)
# elif operation == '*':
#     print(num1 * num2)
# elif operation == '/':
#     print(num1 / num2)
# else:
#     print("Invalid operation")

# num = int(input("Enter a number: "))

# while num % 2 != 0 and num % 3 != 0:
#     num = int(input("Confirm a number: "))
#     if num % 2 == 0 and num % 3 == 0:
#         print(num)
#     else:
#         print("try again")
#         num = int(input("Enter a number: "))


# user_age = int(input("Enter your age: "))
# if user_age >= 18:
#     print("You can participate in elections")
#     print("I belive that your decision will change the world")
# else:
#     print("You can not participate in elections")
#     print("Go sleep kid")