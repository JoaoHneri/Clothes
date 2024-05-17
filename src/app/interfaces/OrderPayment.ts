export interface OrderPayment{
    title: string;
    quantity: number;
    unitPrice: number;
    _id: string;
    user_id: string;
    init_point?: string | undefined;
}