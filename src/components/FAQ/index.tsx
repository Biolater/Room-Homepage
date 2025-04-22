import { Accordion } from "../Accordion";
import Button from "../Button";

const FAQ = () => {
  return (
    <section className="mt-20 md:mt-48">
      <div className="container text-center">
        <div className="flex flex-col gap-2 items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-very-dark-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-grayish-blue md:text-lg text-balance">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        {/* Accordion usage remains the same; prop errors will be fixed in Accordion implementation */}
        <Accordion>
          <Accordion.Item id="item-1">
            <Accordion.Header>
              What is your cancellation policy?
            </Accordion.Header>
            <Accordion.Panel>
              Yes, you can cancel your subscription at any time.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item id="item-2">
            <Accordion.Header>
              Do you offer technical support?
            </Accordion.Header>
            <Accordion.Panel>
              Absolutely! You can reach out to our support team 24/7 via email.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Button>More Info</Button>
      </div>
    </section>
  );
};

export default FAQ;
