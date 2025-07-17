import "./Header.css"

export function Header()
{
    return(
        <div>
            <div className="header">
               <div>#вседлядому</div>
               <div>#швидкотазручно</div>
               <div>#buy now</div>
               <div>#вседлядому</div>
               <div>#швидкотазручно</div>
               <div>#buy now</div>
               <div>#вседлядому</div>
               <div>#швидкотазручно</div>
               <div>#buy now</div>
            </div>
            <div className="div-flex">
               <div className="div-flex-group1">
                 <img  src="./Component 5.png"></img>
                 <img src="./Union.png"></img>
                 <img src="./Component 4.png"></img>
                 <img src="./Component 6.png"></img>
                 <img src="./Component 8.png"></img>
               </div>
               <div className="div-flex-group2">
                <img src="./Component 10 (1).png"></img>
                <img src="./Component 9 (1).png"></img>
               </div>
            </div>
            <div className="div-input">
                <input placeholder="Пошук"/>
            </div>
        </div>
    )
}