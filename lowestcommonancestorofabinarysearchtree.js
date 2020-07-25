//Objective is to find the lowest common ancestor of two nodes in a BST

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)

let p = new Node(14)
let q = new Node(16)


//O(n) solution that does a dfs traversal over the tree until the node's value
//is in between p and q
let root = tree.root

if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
} else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
} else {
    return root
}