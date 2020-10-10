def convert(number):
    result = ''

    if number % 3 == 0:
        result += 'Pling'

    if number % 5 == 0:
        result += 'Plang'

    if number % 7 == 0:
        result += 'Plong'

    return result if result != '' else str(number)