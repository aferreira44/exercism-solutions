def is_isogram(string):
    string = string.lower()

    for i in range(len(string)):

        if not string[i].isalpha():
            break

        if (list(string).count(string[i]) > 1):
            return False
        
    return True