RIGHT = 0
DOWN = 1

num_possibilities = 0

def find_path(size, position=(0,0), current_path=[]):
    global num_possibilities
    grid_size = size-1
    row, column = position

    if row < size:
        find_path(size, (row+1,column), current_path+[RIGHT])
    
    if column < size:
        find_path(size, (row,column+1), current_path+[DOWN])

    if row == size and column == size:
        num_possibilities += 1
        #print(num_possibilities)



# Print all the possibilities in a beautiful way        
def print_possibilities(possibility):
    for path in possibilities:
            print()
            for direction in path:
                    if direction:
                            print("↓", end="")
                    else:
                            print("→", end="")
