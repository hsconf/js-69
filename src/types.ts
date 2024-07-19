export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    summary: string;
    image: string;
}

export interface ApiShows {
    score: number
    show: Show
}