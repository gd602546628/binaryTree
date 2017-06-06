/**
 * Created by gd on 2017/6/2/002.
 */


class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.deep = 0;
        this.parent = null;
        this.direction = null;//方向 ，1左，2右
        this.circleCenter = {//圆心
            x: 0,
            y: 0
        };
        this.top = {//顶点
            x: 0,
            y: 0
        };
        this.bottom = {
            x: 0,
            y: 0
        }
    }

    show() {
        console.log(this.data)
    }
}

class Bst {
    constructor() {
        this.root = null;
        this.level = 0;
    }

    insert(data, rootFn, leftFn, rightFn) {

        let n = new Node(data, null, null);

        if (this.root == null) {
            if (rootFn) {
                rootFn(n)
            }
            this.root = n;
        } else {
            let current = this.root;
            let parent = null;
            let deep = 0;
            while (true) {
                deep++;
                parent = current
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        n.direction = 1;
                        n.deep = deep;
                        n.parent = parent;
                        parent.left = n;
                        this.level = this.level < deep ? deep : this.level
                        if (leftFn) {
                            leftFn(n)
                        }
                        break
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        n.direction = 2;
                        n.deep = deep;
                        n.parent = parent;
                        parent.right = n;
                        this.level = this.level < deep ? deep : this.level
                        if (rightFn) {
                            rightFn(n)
                        }
                        break
                    }
                }
            }
        }
    }

    inOrder(node, fn) {//中序遍历
        if (node !== null) {
            this.inOrder(node.left);
            if (fn) {
                fn(node)
            }
            this.inOrder(node.right);
        }
    }

    preOrder(node, fn) {//先序遍历
        if (node !== null) {
            if (fn) {
                fn(node)
            }
            this.preOrder(node.left, fn);
            this.preOrder(node.right, fn);
        }
    }

    postOrder(node, fn) {//后续遍历
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            if (fn) {
                fn(node)
            }
        }
    }

    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left
        }
        return current
    }

    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current
    }

    find(data) {
        let current = this.root;

        while (current !== null) {
            if (current.data == data) {
                return current
            } else if (data < current.data) {
                current = current.left
            } else if (data > current.data) {
                current = current.right
            }
        }

        return null
    }

}




