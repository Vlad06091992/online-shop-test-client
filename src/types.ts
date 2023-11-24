export type ThemeColors = 'black' | 'blue' | 'green' | 'purple' | 'gray' | 'white'

export type ColorOptionsType = {
    color:ThemeColors,
    title:string
}[]

export type ProductType = {
    id: number;
    name: string;
    price: number;
    image: string;
    colors: ThemeColors[];
    popularity: number;
    desc: string;
};
