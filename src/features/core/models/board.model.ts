export interface BoardCell {
    id: string
    src: string
    coordinates: {
        column: number
        rows: number
    }
}

export interface Board {
    cells: BoardCell[][]
    totalRows: number
    totalColumns: number
}
