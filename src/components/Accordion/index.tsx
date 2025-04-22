import React, {
  createContext,
  useContext,
  FC,
  useState,
  ReactNode,
  MouseEventHandler,
  isValidElement,
  cloneElement,
} from "react";

// Accordion Context
interface AccordionContextType {
  openItemId: string | null;
  onToggle: (id: string) => void;
}
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

// Accordion root
const Accordion: FC<{ children: ReactNode }> & {
  Item: FC<{ id: string; children: ReactNode }>;
  Header: FC<{ children: ReactNode }>;
  Panel: FC<{ children: ReactNode }>;
} = ({ children }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const handleToggle = (id: string) =>
    setOpenItemId(openItemId === id ? null : id);
  return (
    <AccordionContext.Provider value={{ openItemId, onToggle: handleToggle }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

// Accordion.Item
const Item: FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion.Item must be used within Accordion");
  const { openItemId, onToggle } = ctx;
  const isOpen = openItemId === id;
  // Inject isOpen/onClick into children
  return (
    <div id={id} className="border-b border-gray-100 last:border-b-0">
      {React.Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        // Type guard for AccordionHeader
        if ((child.type as any).displayName === "AccordionHeader") {
          return cloneElement(
            child as React.ReactElement<{ onClick?: () => void }>,
            { onClick: () => onToggle(id) }
          );
        }
        // Type guard for AccordionPanel
        if ((child.type as any).displayName === "AccordionPanel") {
          return cloneElement(
            child as React.ReactElement<{ isOpen?: boolean }>,
            { isOpen }
          );
        }
        return child;
      })}
    </div>
  );
};
Item.displayName = "AccordionItem";

// Accordion.Header
const Header: FC<{ children: ReactNode; onClick?: MouseEventHandler }> = ({
  onClick,
  children,
}) => (
  <header onClick={onClick} className="cursor-pointer font-semibold">
    {children}
  </header>
);
Header.displayName = "AccordionHeader";

// Accordion.Panel
const Panel: FC<{ children: ReactNode; isOpen?: boolean }> = ({
  isOpen,
  children,
}) =>
  isOpen ? <div className="transition-all max-h-screen">{children}</div> : null;
Panel.displayName = "AccordionPanel";

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

export { Accordion };
