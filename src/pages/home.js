import React from 'react';
import {HeaderContainer} from '../containers/header';
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer';
import {FaqsContainer} from '../containers/faqs';
import {Feature, OptFrom} from '../components';

export default function Home() {
    return (
        <>
            <HeaderContainer> 
                <Feature>
                    <Feature.Title>
                        Unlimted films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptFrom>
                        <OptFrom.Input placeholder="Email address"/>
                        <OptFrom.Button>Try it now</OptFrom.Button>
                        <OptFrom.Break/>
                        <OptFrom.Text>
                            Ready to watch? Enter your email to create or restart your membrship
                        </OptFrom.Text>
                    </OptFrom>
                </Feature>
               
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/> 
        </>
    );
};