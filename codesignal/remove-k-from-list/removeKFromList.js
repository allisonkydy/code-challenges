// CodeSignal

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    // keep track of prev and current nodes
    let prev = null;
    let cur = l;

    // while current node is not null
    while (cur !== null) {

        // check if current value equals k
        if (cur.value === k) {

            // if so, remove from list
            if (prev !== null) {
                prev.next = cur.next;
            } else {
                l = cur.next;
            }

        } else {
            prev = cur;
        }

        cur = cur.next;
    }

    return l;
}
