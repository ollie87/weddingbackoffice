export interface IType {
    id: number;
    name: string;
}

export const getType = (arrayType: IType[], typeId: number):IType | undefined => {
    return arrayType.find((type: IType) => type.id === typeId)
}
