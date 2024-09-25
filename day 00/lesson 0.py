from turtle import *
#we want to paint the house
#step 1: draw a square 
begin_fill()
color("blue")
speed(30)
width(6)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
# end of square

#drawimg a door
begin_fill()

forward(75)
color("green")
left(90)
forward(100)  #height of the door
right(90)
forward(50)
right(90)
forward(100)

end_fill()
penup()
goto(200, 200)
pendown()

color("black")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)

end_fill()





#drawing a window
begin_fill()
color("red")
penup()
goto(30, 170)
pendown()
left(30)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
end_fill()
  
#adjusting the window

color("black")
right(180)

forward(50)
right(90)
forward(50)
right(90)

forward(50)
right(90)
forward(50)
right(90)

forward(25)
right(90)
forward(50)
penup()
goto(30, 145)
pendown()
left(90)
forward(50)


#drawing the 2nd window
begin_fill()
color("red")
penup()
goto(120, 170)
pendown()

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)
end_fill()

#adjusting the 2nd window

color("black")

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

forward(25)
right(90)
forward(50)
penup()
goto(120, 145)
pendown()
left(90)
forward(50)

#adjusting the 2nd door 
penup()
goto(75,0)
pendown()
left(90)
forward(100)
right(90)
forward(50)
right(90)
forward(100)
penup()
goto(85, 55)
pendown()
width(9)
forward(3)
penup()
goto(0, 0)
pendown()

width(6)
left(90)
forward(200)
left(90)
forward(200)

left(90)
forward(200)
left(90)
forward(200)

exitonclick()
