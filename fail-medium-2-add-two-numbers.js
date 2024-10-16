var addTwoNumbers = function (l1, l2) {
  const output = new LinkedList();
  let temp = 0;

  while (l1.head || l2.head || temp) {
    let val1 = l1.head ? l1.head.val : 0;
    let val2 = l2.head ? l2.head.val : 0;

    let sum = val1 + val2 + temp;
    temp = Math.floor(sum / 10);
    output.add(sum % 10);

    if (l1.head) l1.head = l1.head.next;
    if (l2.head) l2.head = l2.head.next;
  }
  return output.head;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}


const l1 = new LinkedList();
l1.add(1);
l1.add(3);
console.log(l1);
const l2 = new LinkedList();
l2.add(3);
l2.add(8);
console.log(l2);

console.log(addTwoNumbers(l1, l2));
