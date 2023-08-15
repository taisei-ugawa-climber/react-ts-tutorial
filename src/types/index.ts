// プロジェクトが小規模なのでindex.tsで定義、本来はサブディレクトリに分割
export type TodoType = {
    id: number;
    inputValue: string;
    checked: boolean;
};