
import random
def Domath(x, y, operation):
    if operation == "მიმატება":
        return x + y
    elif operation == "გამოკლება":
        return x - y
    elif operation == "გამრავლება":
        return x * y
    elif operation == "გაყოფა":
        if y % x !=0 or x % y !=0:
            return "Error: ტექნიკური გაუმართაობა! ხელახლა სცადეთ"               # ტესტსი N1 'მათემატიკური ოპერაციები'
        elif y == 0 or x == 0:
            return "Error: ტექნიკური გაუმართაობა! ხელახლა სცადეთ"

operations = ["მიმატება", "გაყოფა", "გამრავლება", "გამოკლება"]
x = random.randint(1, 100)
y = random.randint(1, 100)
operation = random.choice(operations)

result = Domath(x, y, operation)

print("რ ა ნ დ ო მ ი  მ ნ ი შ ვ ნ ე ლ ო ბ ე ბ ი: x =", x, ", y =", y)
print("მ ა თ ე მ ა ტ ი კ უ რ ი  ო პ ე რ ა ც ი ა:", operation)
print("შ ე დ ე გ ი:", result)
