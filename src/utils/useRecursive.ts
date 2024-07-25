


interface ListItem {
    ids?:string
    id: string;
    children?: ListItem[];
}

export function getObjById(list: ListItem[], id: string): ListItem | null {
    if (!Array.isArray(list)) {
        return null;
    }
    for (const item of list) {
        if (item.id === id) {
            return item;
        } else if (item.children) {
            const value = getObjById(item.children, id);
            if (value) {
                return value;
            }
        }
    }
    return null;
}

interface TreeNode {
    id: string;
    children?: TreeNode[];
}

export function findParentNodes(treeList: TreeNode[], childIds: string[]): TreeNode[] {
    const parentNodes: TreeNode[] = [];

    function findParent(node: TreeNode, childIds: string[]): void {
        if (node.children && node.children.some(child => childIds.includes(child.id))) {
            parentNodes.push(node);
        }
        if (node.children && node.children.length > 0) {
            for (const childNode of node.children) {
                findParent(childNode, childIds);
            }
        }
    }

    for (const rootNode of treeList) {
        findParent(rootNode, childIds);
    }

    return parentNodes;
}


interface TreeNode {
    id: string;
    children?: TreeNode[];
}


export function findTopLevelNode(treeList: TreeNode[], targetId: string): TreeNode | null {
    // 创建节点字典，以便通过ID查找节点
    const nodesDict: { [key: string]: TreeNode } = {};
    treeList.forEach(node => {
        nodesDict[node.id] = node;
    });

    // 创建集合，用于存储所有节点的父节点ID
    const parentIds = new Set<string>();

    // 遍历树列表，将所有节点的父节点ID添加到集合中
    treeList.forEach(node => {
        if (node.children) {
            node.children.forEach(child => {
                parentIds.add(child.id);
            });
        }
    });

    // 找到树中不存在于父节点集合中的节点，即顶层节点
    const topLevelNodes = treeList.filter(node => !parentIds.has(node.id));

    // 在顶层节点中找到目标节点
    for (const topLevelNode of topLevelNodes) {
        if (findNodeInTree(topLevelNode, targetId, nodesDict)) {
            return topLevelNode;
        }
    }

    return null;
}

/**
 * @description 递归查找目标节点
 * @param node 当前节点
 * @param targetId 目标节点ID
 * @param nodesDict 节点字典
 * @returns {boolean} 是否找到目标节点
 */
function findNodeInTree(node: TreeNode, targetId: string, nodesDict: { [key: string]: TreeNode }): boolean {
    // 递归地在节点及其子节点中查找目标节点
    if (node.id === targetId) {
        return true;
    }

    if (node.children) {
        for (const child of node.children) {
            if (findNodeInTree(child, targetId, nodesDict)) {
                return true;
            }
        }
    }

    return false;
}


interface TreeNode {
    id: string;
    checked?: boolean;
    children?: TreeNode[];
}

/**
 * @description 查询出checked为true的数据
 * @param tree 树形节点数组
 * @returns {TreeNode[]} 选中节点的数组
 */
export function filterChecked(tree: TreeNode[]): TreeNode[] {
    let result: TreeNode[] = [];
    tree.forEach(item => {
        if (item.checked) {
            result.push(item);
        }
        if (item.children && item.children.length > 0) {
            const childrenResult = filterChecked(item.children);
            result = result.concat(childrenResult);
        }
    });
    return result;
}

/**
 * @description 扁平化树形结构
 * @param tree 树形节点数组
 * @returns {TreeNode[]} 扁平化后的节点数组
 */
export function treeToArray(tree: TreeNode[]): TreeNode[] {
    return tree.reduce<TreeNode[]>((res, item) => {
        const { children, ...i } = item;
        return res.concat(i, children && children.length ? treeToArray(children) : []);
    }, []);
}

