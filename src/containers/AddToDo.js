import React, { useState } from'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index'

const AddTodo = () => {
    const [form] = Form.useForm();
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => setValue(e.target.value);

    const sendAction = () => {
        if(value !== '') {
            dispatch(addTodo(value));
            form.resetFields();
            setValue('');
        }
    };

    return(
        <>
            <Form layout="vertical" form={form}>
                <Form.Item label="To do" name="add" rules={[{ required: true, message: 'Por favor digite uma tarefa' }]}>
                    <Input type="text" value={value} onChange={handleChange} onPressEnter={sendAction} />
                </Form.Item>
            </Form>
            <div className="text-right">
                <Button type="primary" htmlType="submit" onClick={sendAction}>enviar</Button>
            </div>
        </>
    )
}

export default AddTodo;