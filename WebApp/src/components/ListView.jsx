import React from 'react'
import clientData from '../data/clientData.json'
import { useState } from 'react'
 
const ListView = () => {
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState("");
 
    const selectPage=(selectedPage)=>{
        if(selectedPage > 0 && selectedPage <= clientData.length / 5 && selectedPage !== page){
            setPage(selectedPage);
        }
    }
 
  return (
    <div className='listbox'>
        <input className='search-box' placeholder='Search by Name' type="text" onChange={(e)=>{setSearch(e.target.value)}} />
        <br/>
        {clientData.filter((item)=>{
            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
        }).slice(page * 5 -5, page * 5).map((item)=>(
            <div className='list-item'>
                <div className='list-item-line'>
                    <div className='item-name'>{item.name}</div>
                    <button className='report-btn'>View Reports</button>
                </div>
           
                <div className='list-item-line'>
                    <p className='item-status'>Status: {item.status}</p>
                    <p>Order Number: {item.orderNumber}</p>
                    <p>Address: {item.address}</p>
                </div>
               
                <div className='list-item-line-2'>Report Type: {item.reportType}</div>
            </div>
        ))}
        {clientData.length > 0 &&
        <div className='pagination'>
            <span onClick={()=>selectPage(page-1)}>⬅️</span>
            {[...Array(clientData.length / 5)].map((_,i) =>{
                return <span key={i} className={page===i+1 ? "pagination-selected" : ""} onClick={()=>{selectPage(i+1)}}>{i+1}</span>
            })}
            <span onClick={()=>selectPage(page+1)}>➡️</span>
 
        </div>
        }
 
    </div>
  )
}
 
export default ListView