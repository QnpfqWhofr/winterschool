import './TodoItem.css';

const TodoItem = ({id,isDone,content,stdate,endate,onUpdate,onDelete}) => {
    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return <div className="TodoItem">
        <input onChange={onChangeCheckBox} readOnly checked={isDone} type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(stdate).toLocaleDateString()}부터</div>
        <div className="date">{!endate ? "" : `${new Date(endate).toLocaleDateString()}까지`}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>;
}

export default TodoItem;