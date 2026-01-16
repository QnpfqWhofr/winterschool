import './List.css';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

const List = ({todos, onUpdate,onDelete}) => {
    const [search,setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search==="") {
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()))
    };

    const getfinishedData = () => {
        return todos.filter((todofinished)=>!todofinished.isDone)
    }

    const filteredTodos = getFilteredData();

    return <div className="List">
        <div className="list">
            <h4>Todo List 🌱</h4>
            <h5>{getfinishedData().length}개 남음</h5>
        </div>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
            {filteredTodos.map((todo)=> {
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
            })}
        </div>
    </div>;
}

export default List;