"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.

A Node is defined as: 
 
    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):    
    # keep track of visited nodes
    visited = set()
    
    cur = head
    
    # traverse list
    while cur is not None: 
        # check if node has been visited
        if cur in visited:
            # if so, list contains a cycle
            return True
        else:
            # if not, add node to visited and keep traversing
            visited.add(cur)
            cur = cur.next
        
    # if we reach the end of the list, it does not contain a cycle
    return False