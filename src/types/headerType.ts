interface BaseColumn {
    name: string;
    label: string;
    field: string | ((row: any) => any);
    align?: 'left' | 'right' | 'center';
    sortable?: boolean;
    sort?: (a: any, b: any, rowA: any, rowB: any) => number;
    required?: boolean;
    headerClasses?: string;
}

interface StyledColumn extends BaseColumn {
    style: string;
}

export type ColumnType = BaseColumn | StyledColumn;
