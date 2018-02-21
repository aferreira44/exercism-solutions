def reverse(input):
    output = ''
    for i in range(len(input), 0, -1):
        output += input[i-1]
    return output