import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({lists,setNow,setLists,setAl,setItem}) => {
  return <div className="grocery-list">
    {lists.map(
      (item,index)=>{
        return (
          <div className="grocery-item">
            <p className="title">{item}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                onClick={() => {
                  setNow(index);
                  setItem(item)
                  //setitem直接控制输入框中的内容，这一步使编辑时显示被编辑对象的值
                }}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  // const newlists = lists.slice(0);
                  // newlists.splice(index, 1);
                  setLists(
                    lists.filter((item) => {
                      return lists.indexOf(item) != index;
                    })
                  );
                  setAl(4);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      }
    )}
  </div>
}

export default List
//lists.filter(item=>{indexOf(item)==index})
//删除列表中元素时使用filter函数！
