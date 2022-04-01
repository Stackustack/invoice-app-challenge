import * as Y from 'yup'
import dayjs from 'dayjs'

export const initialValues = {
    senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
    },
    clientsName: "",
    email: "",
    clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
    },
    createdAt: dayjs().format("YYYY-MM-DD"),
    paymentTerms: 30,
    description: "",
}

// FOR TESTING PURPOSE - TO REMOVE WHEN FINISHED
export const draftInvoiceData = {
    senderAddress: {
        street: "Bursztynowa 10",
        city: "Plewiska",
        postCode: "62-064",
        country: "",
    },
    clientsName: "",
    email: "",
    clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
    },
    createdAt: new Date(),
    paymentTerms: "",
    projectDescription: "",
};

export const validationSchema = Y.object({
    senderAddress: Y.object({
        street: Y.string().required('- All fields are required.'),
        city: Y.string().required('- All fields are required.'),
        postCode: Y.string().required('- All fields are required.'),
        country: Y.string().required('- All fields are required.'),
    }),
    // billTo: Y.object({
    //     clientsName: Y.string().required(),
    //     email: Y.string().required(),
    //     street: Y.string().required(),
    //     city: Y.string().required(),
    //     postCode: Y.string().required(),
    //     country: Y.string().required(),
    // }),
    // date: Y.string().required(),
    // paymentTerms: Y.string().required(),
    // projectDescription: Y.string().required(),
})