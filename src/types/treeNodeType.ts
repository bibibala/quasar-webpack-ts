export interface TreeNode {
    id: string;
    parent: string;
    name: string;
    type: number;
    lazy: boolean;
    showType: number;
    elementId?: string;
    elementType: number;
    children: TreeNode[] | null;
}

export interface LazyLoadParams {
    node: TreeNode;
    key: string;
    done: (data: Array<any>) => void;
}
