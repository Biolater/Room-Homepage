import { Accordion } from "../Accordion";
import Button from "../Button";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      header: "What is Bookmark?",
      panel:
        "Bookmark is a simple, yet powerful browser extension that allows you to save and organize your favorite websites in one place.",
    },
    {
      id: "item-2",
      header: "How can i request a new browser?",
      panel:
        "You can request a new browser by filling out the form on our website.",
    },
    {
      id: "item-3",
      header: "Is there a mobile app?",
      panel:
        "Yes, we have a mobile app available for both iOS and Android devices.",
    },
    {
      id: "item-4",
      header: "What about Chromium browsers?",
      panel:
        "You can add Bookmark as an extension to any browser that supports Chrome extensions.",
    },
  ];

  return (
    <section className="mt-20 md:mt-48">
      <div className="container text-center max-w-2xl">
        <div className="flex flex-col gap-2 items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-very-dark-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-grayish-blue md:text-lg text-balance">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <Accordion>
          {faqs.map(({ id, header, panel }) => (
            <Accordion.Item key={id} id={id}>
              <Accordion.Header>{header}</Accordion.Header>
              <Accordion.Panel>{panel}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Button className="mt-10">More Info</Button>
      </div>
    </section>
  );
};

export default FAQ;
