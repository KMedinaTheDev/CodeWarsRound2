# UnLucky Days

*Description:*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

## Solved Using:

1. JavaScript

## My Solution:
This kata states that the parameter will be an integer. We know that there are 12 months in a year and each month can only have 1 day with the date 13th, so we loop. While looping we check if the 13th of that month is a Friday. 

*NOTE:*
Using the Date constructor allows us to check for
for months, where 0 corresponds to January, 1 to February, (and so on), and then we can check the days, where 0 represents Sunday, which is why we can use `5` for Fridays. 
