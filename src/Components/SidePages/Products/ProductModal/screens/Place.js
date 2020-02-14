import React from 'react';
import { Accordion, AccordionItem } from '../../../../Accordion';
import { Places } from '../Components';

const Place = ({ places }) => {
    return (
        <Places>
            Все доступные магазины
            <Accordion>
                {Object.keys(places).map(place => {
                    let totalCount = 0;
                    Object.keys(places[place]).forEach(size => {
                        Object.keys(places[place][size]).forEach(color => {
                            totalCount+= places[place][size][color]
                        })
                    });
                    return (
                        <AccordionItem key={place} title={`${place}: ${totalCount} шт.`}>
                            <div>
                                <Accordion>
                                    {
                                        Object.keys(places[place]).map(size => {
                                            let sizeCount = 0;
                                            Object.keys(places[place][size]).forEach(color => {
                                                sizeCount+= places[place][size][color]
                                            });
                                            return (
                                                <AccordionItem key={size} title={`${size}: ${sizeCount} шт.`}>
                                                    <div>
                                                        {
                                                            Object.keys(places[place][size]).map(color => (
                                                                <div key={color}>
                                                                    <div>{`${color}: ${places[place][size][color]}`}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </AccordionItem>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Places>
    );
};

export default Place;