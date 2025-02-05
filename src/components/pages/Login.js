import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageLayout, Input, PasswordInput, Button, Spinner } from '../common';

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;

    .alt-text {
        text-align: center;
        margin: 10px 0;
    }
`;

let timeout;

export function Login() {
    const [formFields, setFormFields] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleInputChange = e => {
        e.persist();
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, []);

    return (
        <PageLayout>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                {loading ? <Spinner /> :
                <>
                    <Input
                        value={formFields.username}
                        onChange={handleInputChange}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <PasswordInput
                        value={formFields.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                </>
                }
                <Button large type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </Button>
                {!loading && 
                <>
                    <p className="alt-text">or</p>
                    <Button secondary type="button">
                        Register
                    </Button>
                </>
                }
            </Form>
        </PageLayout>
    );
};