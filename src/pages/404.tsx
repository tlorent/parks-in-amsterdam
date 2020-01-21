import React, { FC } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Button from '../components/atoms/Button';

const FourOFour: FC = () => (
    <>
        <Layout>
            <h2 style={{ fontSize: '40px' }}>
                Oops. This page does not exist.
            </h2>
            <Link to="/parks" style={{ color: '#000' }}>
                <Button variant="primary">Want to see the parks?</Button>
            </Link>
        </Layout>
    </>
);

export default FourOFour;
