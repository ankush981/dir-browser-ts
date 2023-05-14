import { SortOptions } from "../types";

export const config = {
    defaultPath: '.',
    validSortOptions: [
        SortOptions.NAME_ASC,
        SortOptions.NAME_DESC,
        SortOptions.SIZE_ASC,
        SortOptions.SIZE_DESC,
        SortOptions.DATE_MODIFIED_ASC,
        SortOptions.DATE_MODIFIED_DESC,
    ],
};