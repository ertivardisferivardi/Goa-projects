





#1)  მომხმარებელს შემოატანინეთ ხუთი რიცხვი და ყველა შეიტანეთ სიაში.
# თქვენი დავალებაა, რომ დაბეჭდოთ ამ სიის ჯამი, არ გამოიყენოთ sum მეთოდი.


# nums = []

# for i in range(5):
#     num = int(input("enter a number: "))
#     nums.append(num)

# result= 0

# for num in nums:
#     result = result + num

# print(result)


#2) სიაში შეიტანეთ თქვენთვის სასურველი 10 რიცხვი.
# დაბეჭდეთ ამ სიაში არსებული ყველაზე დიდი რიცხვი,
# მინიშნება: გამოიყენეთ for ციკლი. არ გამოიყენოთ max მეთოდი.

num_list = [1,2,3,4,5,6,7,8,9,10]
greatest_num = num_list[0]
for number in num_list:
    if greatest_num < number:
        greatest_num = number
print(greatest_num)




#3) სიაში შეიტანეთ 30-იდან 50-ის ჩათვლით არსებული ყველა რიცხვი.
# შემდეგ დაითვალეთ ამ სიაში არსებული კენტი რიცხვები და დაბეჭდეთ მათი რაოდენობა.

# nums_list = []
# odd_nums = []
# for i in range(30,50 + 1):
#     nums_list.append(i)
#     if i % 2 != 0:
#         odd_nums.append(i)
# print(nums_list)
# print(odd_nums)
# print(sum(odd_nums))


#4) სიაში შეიტანეთ 10-იდან 50-ის ჩათვლით არსებული 4-ის ჯერადი რიცხვები.
# შემდეგ შეაბრუნეთ ეს სია და დაბეჭდეთ ის, test case: [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]

# nums = []
# for i in range(10, 50 + 1):
#     if i % 4 == 0:
#         nums.append(i)
# print(nums)

# reversed_nums = []

# for index in range(len(nums) - 1, -1, -1):
#     reversed_nums.append(nums[index])

# print(nums)
# print(reversed_nums)

# თქვენი დავალებაა, რომ სიაში შეიტანოთ 50-იდან 100-მდე არსებული ყველა რიცხვი.
#  შემდეგ გამოიყენეთ for ციკლი და დაბეჭდეთ ყველა ლუწი რიცხვი  მათი ინდექსებით.
#  test case: ["50 - 0", "52 - 3", "54 - 5", "56 - 7"]

# numbers = []

# for i in range(50, 100 + 1):
#     numbers.append(i)

# even_numbers = []
# for index in range(0, len(numbers)):
#     if numbers[index] % 2 == 0:
#         even_numbers.append (str(numbers[index]) + "-" + str(index))
# print(numbers)
# print(even_numbers)


