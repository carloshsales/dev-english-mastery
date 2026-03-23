import type { Category } from "./Category";

export interface VocabularyTerm {
    id: string;
    term: string;
    definition: string;
    translation: string;
    example: string;
    category: Category;
    isMastered: boolean;
}