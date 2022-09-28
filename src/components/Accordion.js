import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function SiteAccordion(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <h4 className="accordion-title">Store automation</h4>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <p className="accordion-text">Simple intuitive interface</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <h4 className="accordion-title">
              Full control over the goods and the store
            </h4>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <p className="accordion-text">
              Minimizing the amount of "manual" work;
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <h4 className="accordion-title">Effective sales management</h4>
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <p className="accordion-text">
              Significant savings in time and effort required for the operation
              of the store.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            <h4 className="accordion-title">Extracting maximum profit</h4>
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <p className="accordion-text">
              Maximum expansion of the range of products sold
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            <h4 className="accordion-title">
              Absolutely safe and legal business{" "}
            </h4>
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <p className="accordion-text">
              Getting rid of theft by unscrupulous personnel.
            </p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SiteAccordion;
