import React, { useState } from 'react';
import '../App.css';

 const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [items,setItems] = useState([]);
    const addItem = () =>{
        if(!inputData){

        }else{
        setItems([...items, inputData]);
        setInputData('')
    }
}

const deleteItem = (id) =>{
    const updateditems = items.filter((elem , index)=>{
        return index !== id;
    });
    setItems(updateditems);
}

const removeAll = () => {
    setItems([]);
}

    return (
        <>
            <div className="main-div">
                <div className="child-div">
             
                    <figure>
                    <img src="https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-512.png" alt="img" />
                    <h1 id="heading">Personal Shopping List</h1>
                        <figcaption >Add Your items Here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Add items ... "
                        value={inputData} 
                            onChange={(e)=>setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                    {items.map((elem,index)=>{
                        return(
                        <div className="eachItem" key={index}>
                            <h3>{elem}</h3>
                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(index)}></i>
                        </div>
                        )
                    })
                    }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Todo;
