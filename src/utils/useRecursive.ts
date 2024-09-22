import { TreeNode } from 'src/types/treeNodeType';

export function findParentNodes(treeList: TreeNode[], id: string): TreeNode[] {
    const parentNodes: TreeNode[] = [];

    function findParent(node: TreeNode, childIds: string) {
        if (
            node.children &&
            node.children.some((child) => childIds.includes(child.id))
        ) {
            parentNodes.push(node);
        }
        if (node.children && node.children.length > 0) {
            for (const childNode of node.children) {
                findParent(childNode, childIds);
            }
        }
    }

    for (const rootNode of treeList) {
        findParent(rootNode, id);
    }
    return parentNodes;
}

/**
 * @description Find the top-level node containing the target id
 * @param treeList - Array of tree nodes
 * @param targetId - Target id to search for
 * @returns The top-level node or null
 */
export function findTopLevelNode(
    treeList: TreeNode[],
    targetId: string
): TreeNode | null {
    const nodesDict: { [key: string]: TreeNode } = {};
    treeList.forEach((node) => {
        nodesDict[node.id] = node;
    });

    const parentIds = new Set<string>();

    treeList.forEach((node) => {
        if (node.children) {
            node.children.forEach((child) => {
                parentIds.add(child.id);
            });
        }
    });

    const topLevelNodes = treeList.filter((node) => !parentIds.has(node.id));

    for (const topLevelNode of topLevelNodes) {
        if (findNodeInTree(topLevelNode, targetId, nodesDict)) {
            return topLevelNode;
        }
    }

    return null;
}

function findNodeInTree(
    node: TreeNode,
    targetId: string,
    nodesDict: { [key: string]: TreeNode }
): boolean {
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
