""" Sean's solution """

def countingValleys(n, s):
  # what happens in the situation when the string doesn't 
  # have us reach sea level again? 

  # keep a dict of elevation changes associated with { U: 1, D: -1 } 

  # s is a string of Us and Ds 
  # keep track of the height 
  height = 0
  # keep track of number of valleys 
  valleys = 0
  # have a variable that keeps track of the previous step 

  # loop through the string s 
  for step in s:
    # depending on whether we see a U or a D 
    if step == 'U':
    # update the height counter accordingly 
      height += 1
      # if the height counter returns to 0
      if height == 0:
        valleys += 1
    else:
      height -= 1

      # how do we know that we reached a height of 0 as a result of 
      # climbing down from a hill vs climbing up from a valley? 
      # keep track of the most recent step we took, so that we know if 
      # we climbed up from a valley 
      # increment our valleys counter 

  return valleys