export interface IPaginationResult<PaginationEntity> {
    result: PaginationEntity;
    total: number;
    has_next: boolean;
    has_previous: boolean;
}

export interface IResponseCommon<Data> {
    message: string;
    status: number;
    code: number;
    data: Data;
}
