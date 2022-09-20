import React from 'react';

const Menu = ({items}) => {
  //子组件中的参数填属性名！！！
  return <div className="section-center">
    {items.map((item)=>{
      const {price,img,title,desc,id}=item;
    return (
      <article className="menu-item" key={id}>
        <img src={img} alt={title} className="photo"></img>

        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    )

    }
      )
    }
    
  </div>;
};

export default Menu;
