import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'

/**
 * Accordion primitives matching shadcn/ui (Base UI) composition.
 * Styled via .ui-accordion* classes in styles/accordion.css — not Tailwind —
 * so the frozen desktop layout is unaffected.
 */
function Accordion({ className = '', ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={`ui-accordion ${className}`.trim()}
      {...props}
    />
  )
}

function AccordionItem({ className = '', ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={`ui-accordion__item ${className}`.trim()}
      {...props}
    />
  )
}

function AccordionTrigger({ className = '', children, ...props }) {
  return (
    <AccordionPrimitive.Header className="ui-accordion__header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={`ui-accordion__trigger ${className}`.trim()}
        {...props}
      >
        {children}
        <ChevronIcon className="ui-accordion__chevron" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className = '', children, ...props }) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="ui-accordion__panel"
      {...props}
    >
      <div className={`ui-accordion__content ${className}`.trim()}>{children}</div>
    </AccordionPrimitive.Panel>
  )
}

function ChevronIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
