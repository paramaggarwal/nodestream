import random
from time import sleep

# Open file for writing
f = open("logs.txt", "w");

while(1):
  for i in range(1,4000):
    ran = random.randint(1,100)
    f.write(str(ran) + '\t')
  f.write('\n')  
  f.flush()  
  sleep(3)
