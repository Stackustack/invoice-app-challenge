interface IInvoiceAddress {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

interface IInvoiceItem {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

interface IInvoice {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: IInvoiceAddress;
    clientAddress: IInvoiceAddress;
    items: IInvoiceItem[];
    total: number;
}

export default IInvoice;