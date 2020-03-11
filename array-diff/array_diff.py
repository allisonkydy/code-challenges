'''
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
'''

def array_diff(a, b):
    # convert list b into a set - sets are faster for checking if a value is present
    b = set(b)
    # for each value in list a, include in result if not in set b
    result = [val for val in a if val not in b]
    
    return result