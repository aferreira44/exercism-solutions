"""Given a year, report if it is a leap year."""

def is_leap_year(year):
    """Verify if the given year is a leap year."""
    if year % 4 == 0 and year % 100 == 0:
        return year % 400 == 0
    else:
        return year % 4 == 0
