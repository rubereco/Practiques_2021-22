from time import time
number = ["af","ab","ak","ad","aa","m","ñ","n","p","ar","ae"]
contador = len(number)-1
v = 0
tiempo = time()
for x in range(contador):
    for i in range(contador-x):
        if number[i] > number[i+1]:
            number[i],number[i+1] = number[i+1],number[i]

print(time() - tiempo)
print(number)