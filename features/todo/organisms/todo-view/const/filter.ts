export const FILTER_TYPES = {
    UNDONE: 'undone',
    DONE: 'done',
    ALL: 'all',
} as const;


type FilterTypes = typeof FILTER_TYPES;
type FilterTypeKeys = keyof FilterTypes;
export type FilterTypeValues = FilterTypes[FilterTypeKeys];
// type FilterTypeValues = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];

export const LABEL_TEXT = {
    UNDONE: "未完了",
    DONE: "完了",
    ALL: "全て"
} as const;

type LabelText = typeof LABEL_TEXT;
type LabelTextKeys = keyof LabelText;
export type LabelTextValues = LabelText[LabelTextKeys]; 

export type FilterInput = {
  labelText: LabelTextValues;
  value: FilterTypeValues;
};

