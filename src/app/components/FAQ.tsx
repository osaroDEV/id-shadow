import { Card } from '@/components/ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
import { RecordCircleIcon } from './icons/Icons'


const AccordionComponent = () => {
  return (
    <Card className='p-6'>
            <div className='flex items-center gap-2'>
              <h2 className='text-lg font-semibold text-black self-start mt-3 ml-2'>
                Frequently Asked Questions
              </h2>
              <div className='w-full max-w-md mx-auto p-4 flex flex-col gap-4'>
                <div>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem
                      value='item-1'
                      className='border rounded-lg bg-gray-50'
                    >
                      <AccordionTrigger className='flex gap-2 px-4 hover:no-underline'>
                        <div className='flex items-center gap-2 flex-1'>
                          <RecordCircleIcon />
                          <span className='text-base font-normal'>
                            Lorem ipsum dolor sit amet.
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='px-4 pb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt ullam eum laudantium dolor ab at deleniti
                        exercitationem fugit minima eligendi vitae excepturi
                        sapiente, commodi sed? Molestiae aliquam saepe autem
                        recusandae.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem
                      value='item-1'
                      className='border rounded-lg bg-gray-50'
                    >
                      <AccordionTrigger className='flex gap-2 px-4 hover:no-underline'>
                        <div className='flex items-center gap-2 flex-1'>
                          <RecordCircleIcon />
                          <span className='text-base font-normal'>
                            Lorem sit amet consectetur, adipisicing.
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='px-4 pb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt ullam eum laudantium dolor ab at deleniti
                        exercitationem fugit minima eligendi vitae excepturi
                        sapiente, commodi sed? Molestiae aliquam saepe autem
                        recusandae.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem
                      value='item-1'
                      className='border rounded-lg bg-gray-50'
                    >
                      <AccordionTrigger className='flex gap-2 px-4 hover:no-underline'>
                        <div className='flex items-center gap-2 flex-1'>
                          <RecordCircleIcon />
                          <span className='text-base font-normal'>
                            Lorem ipsum dolor sit ametendi vitae.
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='px-4 pb-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consectetur amet architecto distinctio fuga id at. Culpa odit itaque quod similique iste soluta illum veritatis cumque saepe, inventore distinctio provident veniam dolore tempore doloremque. Explicabo.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </Card>
  )
}

export default AccordionComponent