import React from 'react';
import faqsData  from '../fixtures/faqs.json'; 
import {Accordion, OptFrom} from '../components';

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Frequently Aked Questions</Accordion.Title>
            {faqsData.map(item => 
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}
            <Accordion.Item/>
            <OptFrom>
                <OptFrom.Input placeholder="Email address"/>
                <OptFrom.Button>Try it now</OptFrom.Button>
                <OptFrom.Break/>
                <OptFrom.Text>
                    Ready to watch? Enter your email to create or restart your membrship
                </OptFrom.Text>
            </OptFrom>
        </Accordion>   
    );
}