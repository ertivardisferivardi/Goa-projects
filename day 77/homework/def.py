# # შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)
# def say_hello():
#   print("გამარჯობა")
# 2) შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა")
# (ვოიდ ფუნქცია)
# def say_name(name):
#     print("გამარჯობა, " + name)

# 3) შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  (ჩვეულებრივი ფუნქცია)
# def num(num):
#     print(num + 1)
# 4) შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია რომ გამოიტანოთ დაბრუნებულზე ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)
def negative_version(num):
    return -num
print(negative_version(44) + 1)

