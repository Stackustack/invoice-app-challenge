import React, { useState } from "react";
import InvoiceDetails from "../../components/molecules/InvoiceDetails/InvoiceDetails";
import { useParams } from "react-router-dom";
import mockedInvoices from "../../assets/data.json";
import DeleteInvoiceModal from "../../components/organisms/DeleteInvoiceModal/DeleteInvoiceModal";
import Form from "../../components/organisms/Form/Form";

type Props = {};

const InvoiceDetailsPage = (props: Props) => {
  const { invoiceId } = useParams();
  const [isDeleteModalDisplayed, setIsDeleteModalDisplayed] =
    useState<boolean>(false);

  const [isEditOverlayDisplayed, setIsEditOverlayDisplayed] =
    useState<boolean>(false);

  const invoiceData = mockedInvoices.find((i) => {
    return i.id === invoiceId;
  });

  const handleHideDeleteModal = () => {
    setIsDeleteModalDisplayed(false);
  };

  const handleDeleteInvoice = () => {
    // TODO: Handle removing Invoice item from list of Invoices
    // TODO: Redirect to Home view (InvoiceList)
    console.log("REMOVING INVOICE", invoiceId);
    setIsDeleteModalDisplayed(false);
  };

  const handleDeleteInvoiceIntention = () => {
    setIsDeleteModalDisplayed(true);
  };

  return (
    <>
      {/* DELETE INVOICE MODAL */}
      {isDeleteModalDisplayed && (
        <DeleteInvoiceModal
          onClickHide={handleHideDeleteModal}
          onClickDelete={handleDeleteInvoice}
          invoiceId={invoiceId}
        />
      )}

      {/* EDIT FORM OVERLAY */}
      <Form
        isDisplayed={isEditOverlayDisplayed}
        draftInvoiceData={invoiceData}
        onClickDismissForm={() => {
          setIsEditOverlayDisplayed(false);
        }}
      />

      {/* MAIN INVOICE DETAILS */}
      <InvoiceDetails
        onOpenDeleteModal={handleDeleteInvoiceIntention}
        data={invoiceData ? invoiceData : null}
        onOpenEditOverlay={() => setIsEditOverlayDisplayed(true)}
      />
    </>
  );
};

export default InvoiceDetailsPage;
