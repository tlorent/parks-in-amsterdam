import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Layout from '../components/Layout';
import Title from '../components/atoms/Title';
import Body from '../components/atoms/Body';
import NewsLetterForm from '../components/NewsletterForm';

const About: FC = () => (
    <>
        <Layout>
            <Container>
                <Title>About Parks in Amsterdam</Title>
                <div>
                    <Body>
                        This website was created to help you find the best
                        nature spots in Amsterdam. Our city can be quite
                        overwhelming sometimes, so it is crucial to find some
                        trees and relax in nature.
                    </Body>
                </div>
                <AboutImage src="assets/about.svg" alt="Two men in the park" />
                <NewsLetterForm />

                {/* <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">
                            Your Name: <input type="text" name="name" />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="email">
                            Your Email: <input type="email" name="email" />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="role[]">
                            Your Role:
                            <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="message">
                            Message: <textarea name="message" />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form> */}
            </Container>
        </Layout>
    </>
);

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    > div {
        max-width: 400px;
        margin: 0 auto;
    }
`;

const AboutImage = styled.img`
    max-width: 250px;
    margin-top: 32px;
    margin-bottom: 40px;
`;

export default About;
