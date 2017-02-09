"use strict";

class listNode {
    constructor(value) {
        this._value = value;
        this._next = null;
    }

    get value() {
        return this._value;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }

    get first() {
        return this._head.value;
    }

    get last() {
        return this.at(this._length - 1);
    }

    get length() {
        return this._length;
    }

    append(...list) {
        for (let l of list) {
            let node = new listNode(l);
            let current;
            if (this._length === 0) {
                this._head = node;
            } else {
                current = this._head;

                while (current._next) {
                    current = current._next;
                }

                current._next = node;
            }
            this._length++;
        }
        return this;
    }

    prepend(...list) {
        list = list.reverse();
        for (let l of list) {
            let old = this._head,
                node = new listNode(l);

            this._head = node;
            this._head._next = old;

            this._length += 1;
        }

        return this;
    }
    insert(index, ...list) {
        if (index === 0) {
            this.prepend(...list);
        } else {
            let i = 0,
                current = this._head,
                previous;

            while (i++ < index) {
                previous = current;
                current = current._next;
            }

            for (const l of list) {
                let node = new listNode(l);
                previous._next = node;
                node._next = current;

                previous = node;

                this._length += 1;
            }
        }

        return this;
    }

    at(index, value) {
        if (value === undefined || value === null) {
            let currentList = this.toArray();
            return currentList[index];
        } else {
            this.removeAt(index);
            this.insert(index, value);
        }
    }

    removeAt(index) {
        if (index > -1 && index < this._length) {
            var current = this._head,
                previous,
                i = 0;

            if (index === 0) {
                this._head = current._next;
            } else {
                while (i++ < index) {
                    previous = current;
                    current = current._next;
                }

                previous._next = current._next;
            }

            this._length--;

            return current._value;

        } else {
            return null;
        }
    }

    toArray() {
        let arr = [];
        for (let i of this) {
            arr.push(i);
        }
        return arr;
    }

    toString() {
        return this.toArray().join(" -> ");
    }

    *[Symbol.iterator]() {
        let node = this._head;

        while (node !== null) {
            yield node._value;
            node = node._next;
        }
    }
}

module.exports = LinkedList;

const list = new LinkedList();
list.append(1, 2, 3).append(4);
// list should contain 1, 2, 3 and 4

list.append(4, 5, 6).prepend(1, 2, 3);
// should contain 1, 2, 3, 4, 5, 6 in that order


list.append(1, 4, 5).insert(1, 2, 3);
// list should contain 1, 2, 3, 4, 5


list.append(1, 2, 3, 4, 5, 6);
console.log(list.at(2)); // 3


list.at(2, 'gosho');
console.log(list.at(2)); // gosho


const removed = list.append(1, 2, 3, 4, 5).removeAt(1);
// removed should be 2
// the list should contain 1, 3, 4, 5


const arr = list.toArray();
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr instanceof Array); // true


console.log(list.toString()); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

