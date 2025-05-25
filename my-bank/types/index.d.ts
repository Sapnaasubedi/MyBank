export interface HeaderProps{
    type? :"title" | "greeting";
    title: string;
    subText: string;
    user? : string
}

export interface TotalBalanceBoxProps{
    accounts?:[];
    totalBanks: number;
    totalCurrentBalance: number;
}