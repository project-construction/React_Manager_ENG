import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Button,
    Card,
    CardBody,
    CardTitle, Input, FormGroup, Form
} from "reactstrap";

const Writes = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async event => {
        const jwtToken = localStorage.getItem('token');

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({title, content}),
            mode: 'cors'

        };

        fetch('http://localhost:8080/notice/write', requestOptions)
            .then(response => response)
            .then(data => {
                console.log('submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting:', error);
            });

        navigate("/alerts");
    };

    return (
        <div>
            <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-2 mt-2">
                    <h2 className="flex-grow-1 m-0">&nbsp;Creating a Notice</h2>
                </CardTitle>
                <CardBody className="">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input
                                type="text"
                                id="title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                style={{ width: '100%' }}
                                placeholder="Title"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                id="content"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                style={{ width: '100%', minHeight: '500px' }}
                                placeholder="Content"
                                required
                            />
                        </FormGroup>
                        <Button type="submit" className="btn" color="secondary">Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Writes;
