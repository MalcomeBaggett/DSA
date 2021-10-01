class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  Add(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this;
  }

  Print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  Remove(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      return this;
    }
    let curr = this.head;
    while (curr) {
      if (curr.next.val === val) {
        let nextNode = curr.next.next;
        curr.next = nextNode;
        return this;
      }
      curr = curr.next;
    }
    return this;
  }
}

const List = new LinkedList();
List.Add(1);
List.Add(2);
List.Add(3);
List.Remove(2);
List.Print();
