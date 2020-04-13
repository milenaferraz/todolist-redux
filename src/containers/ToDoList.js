  
import React from 'react';
import { List, Avatar } from 'antd';
import { useSelector } from 'react-redux';

const ToDoList = () => {
    const {todoList} = useSelector(state => state.todoState);

    return(
        <>
            {todoList &&
                <List dataSource={todoList} 
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/UXamdIxYSkXfoVo.jpg" />}
                            title="tarefa"
                            description={item} />
                    </List.Item>
                )} >
                </List>
            }
        </>
    )
}

export default ToDoList;