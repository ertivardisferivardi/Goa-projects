# 1. Write an algorithm in pseudocode to count the number of capital letters in
# a file of text. How many comparisons does it do?
# What is the fewest number of increments it might do? What is the largest number?
# (Use N for the number of characters in the file when writing your answer.)

# 1.ტესტურ ფაილს მივანიჭე ოთხასოიანი სიტყვის მნიშვნელობა.
# აქედან გამომდინარე ფუნქცია გააკეტებს n შედარებას 
# ფუნქცია გააკეთებს 0 მატებას ცვლადში
# გააკეთებს n რაოდენობას



# def counting_capital_letters(L):
#     N = 0
#     for i in L:
#         if i.isupper():
#             N += 1
#     return N
# print(counting_capital_letters("LuKa"))


# 2. There is a set of numbers stored in a file, but we don’t know how many it
# contains. Write an algorithm in pseudocode to calculate the average of the
# numbers stored in this file. What type of operations does your algorithm
# do? How many of each of these operations does your algorithm do?


# ალგორითმმა შეასრულა 3 ოპერაცია
# შესრულდა სამი მინიჭება(=),ერთი გაყოფა(/) და ერთი ფუნქცია return   

# def average_nums (numbers):
#     totaly = sum(numbers)
#     n = len(numbers)
#     average = totaly / n
#     return average

# print(average_nums([1,2,3,4,5,6]))


# 3. Write an algorithm, without using compound conditional expressions, that
# takes in three integers and determines if they are all distinct. On average,
# how many comparisons does your algorithm do? Remember to examine all
# input classes.

# ალგორითმი შეასრულებს 3 შედარებას

# def are_distinct(a,b,c):
#     distinct = True
#     if a == b: 
#         distinct = False
#     elif a == c:
#         distinct = False
#     elif b == c:
#         distinct = False    

# 4. Write an algorithm that takes in three distinct integers and determines the
# largest of the three. What are the possible input classes that would have to
# be considered when analyzing this algorithm?
#  Which one causes your algorithm to do the most comparisons? 
# Which one causes the least? (If there is
# no difference between the most and least, rewrite the algorithm with simple
# conditionals and without using temporary variables so that the best case gets
# done faster than the worst case.)




