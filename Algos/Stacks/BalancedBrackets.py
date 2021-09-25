 class Stack():
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        last = len(self.items) - 1
        return self.items[last]

    def size(self):
        return len(self.items)

 def par_checker(symbol_string):
      s = Stack()
       for symbol in symbol_string:
            if symbol == "(":
                s.push(symbol)
            else:
                if s.is_empty():
                    return False
                else:
                    s.pop()

        return s.is_empty()
