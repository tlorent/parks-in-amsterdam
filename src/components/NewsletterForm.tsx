/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-template */
import React, { FC } from 'react';
import { Formik, Form, useField } from 'formik';
import styled from 'styled-components/macro';
import * as yup from 'yup';
import Title from './atoms/Title';
import Button from './atoms/Button';
import Body from './atoms/Body';

interface InputProps {
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
    id?: string;
}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    'form-name': string;
}

const formValidation = yup.object().shape({
    firstName: yup.string().required('Fill in your first name'),
    lastName: yup.string().required('Fill in your last name'),
    email: yup
        .string()
        .email('Invalid email')
        .required('Fill in your email'),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const encode = (data: any) => {
    return Object.keys(data)
        .map(
            // eslint-disable-next-line arrow-parens
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const Input: FC<InputProps> = ({ name, label, id }, ...props) => {
    const [field, { error, touched }] = useField(name);
    return (
        <>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <StyledInput
                {...field}
                {...props}
                error={!!error && touched}
                id={id}
            />
            {touched && error ? <Error>{error}</Error> : null}
        </>
    );
};

const NewsLetterForm: FC = () => (
    <Container>
        <StyledTitle size="small" withBorder>
            Stay in the loop
        </StyledTitle>
        <Body size="small">
            Want to know when new parks get added? Subscribe to our newsletter.
        </Body>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={formValidation}
            onSubmit={(values, { setSubmitting }) => {
                fetch('/?no-cache=1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: encode({
                        'form-name': 'newsletter',
                        ...values,
                    }),
                })
                    .then(() => {
                        setSubmitting(false);
                    })
                    .catch(error => {
                        setSubmitting(false);
                    });
            }}
        >
            {({ isSubmitting }) => (
                <Form
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    name="newsletter"
                    method="POST"
                    action="/"
                >
                    <HiddenField id="bot-field" htmlFor="bot-field">
                        Don’t fill this out if you are human:
                        <input
                            type="hidden"
                            name="form-name"
                            value="newsletter"
                        />
                    </HiddenField>
                    <FormBox>
                        <Input
                            label="First name"
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            id="firstName"
                        />
                    </FormBox>
                    <FormBox>
                        <Input
                            name="lastName"
                            type="lastName"
                            label="Last name"
                            id="lastName"
                        />
                    </FormBox>
                    <FormBox>
                        <Input
                            name="email"
                            type="email"
                            label="Email"
                            id="email"
                        />
                    </FormBox>
                    <FormBox>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            name="submit"
                        >
                            Subscribe!
                        </Button>
                    </FormBox>
                </Form>
            )}
        </Formik>
    </Container>
);

const StyledInput = styled.input<{ error: boolean }>`
    padding: 8px;
    border-radius: 3px;
    box-shadow: ${({ error }) => error ? '0 0 0 2px red' : '0 0 0 2px #DCE2E3'};
    border: none;
    min-width: 250px;
    padding: 8px 16px;
    font-size: 13px;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
    padding: 50px 25px;
`;

const StyledLabel = styled.label`
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 14px;
`;

const FormBox = styled.div`
    margin: 16px auto;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 400px;
`;

const Error = styled.p`
    color: red;
    font-size: 11px;
    font-weight: 500;
    margin: 0;
    margin-top: 8px;
`;

const StyledTitle = styled(Title)`
    margin-bottom: 40px;
`;

const HiddenField = styled.label`
    display: none;
`;

export default NewsLetterForm;
