import React from "react";
import { Link } from "react-router-dom";


fetch('http://ussr-coins.ru/api/category/read.php')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        console.log(data.records)
      });
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  

  });


  export const Category = () => {
    return (
        <ul>
        {Date.records?.map(date => (
          <li key={date.id}>
              <Link to={`/post/${date.id}`}>
                  {date.name}
              </Link>
              {date.description}
          </li>
        ))}
        </ul>
    );
  }