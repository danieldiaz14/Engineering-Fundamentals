class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }

    contains(value) {

        if (value < this.value) { // if the value we're looking for is less than current value then check left bst
            if (this.left === null) { // at this point we know the value isn't equal to current so if the left pointer is empty then there is nothing left to check and therefore is false
                return false; // return false since we do not contain the value
            } else {
                return this.left.contains(value); // the value is less than the current value and we have a left sub tree. check the left sub tree
            }
        } else if (value > this.value) { // the value we're looking for is greater than current so check the right bst
            if (this.right === null) { // at this point we know the value isn't equal to the current value. So if the right poitner is empty then there is nothing left to check and therefore is false
                return false; // return false
            } else {
                this.right.contains(value); // since they're not equal check the next one
            }
        } else { // we found the value we're looking for
            return true;
        }
    }
    
    getMinValue() {

        let current = this; // assign the variable to the current value;

        while (current.left !== null) { // keep going as long as you're not pointing to nothing
            current = current.left; // keep going left. Why left? BSTs will have all values left less than root and all values right greater than root
        }
        
        return current.value;
    }

    remove(value, parentNode = null) {

        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else { // value is equal to currentValue
            const isNotLeafNode = this.left !== null && this.right !== null;
            if (isNotLeafNode) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parentNode === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.right = this.right.left;
                    this.left = this.right.right;
                } else {
                    // do nothing...
                }
            } else if (parentNode.left === this) {
                parentNode.left = this.left !== null ? this.left : this.right;
            } else if (parentNode.right === this) {
                parentNode.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }
}

const myTree = new BST(10); // root is 10

myTree.insert(5); // 5 < 10 ? yes. so 10.left = new BST(5)
myTree.insert(15); // 15 > 10 ? yes. so 10.right = new BST(15);
/*
    10
   /  \
  5    15
*/

myTree.remove(15); // 15 is a leaf node. Leaf node being a node with no children. Easy case just delete this node.

/*
    10
   /  
  5    
*/

myTree.remove(5) // 5 is a leaf node. Leaf node is a node with no childrne. easy case just delete this node.

/*
    10
   /  \
null  null
*/
