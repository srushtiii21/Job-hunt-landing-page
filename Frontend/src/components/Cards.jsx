import React from 'react';
import data from "../../public/list.json"; // Adjust the path as necessary

function Card() {
  return (
  <>
   <div className="flex flex-wrap justify-between">
      {data.map(item => (
        <div key={item.id} className="card w-1/5 bg-base-100 shadow-xl p-2">
          <figure>
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
             
            </div>
          </div>
        </div>
      ))}
    </div>
  <div className="flex flex-wrap justify-between gap-4 p-4" >
  <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"></span>
    <p>Find opportunities for every stage of <br />your freelance career</p>
    <p>Seize control of your schedule, location,<br /> and how you work.</p>
    <p>Explore different ways to earn and <br />diversify your income streams.</p>
  </div>

  </>
   
  );
}

export default Card;
