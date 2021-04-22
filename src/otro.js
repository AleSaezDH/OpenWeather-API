import React, {useEffect} from 'react'

function Otro() {

    let categoryName = 'tops'

    useEffect(()=>{
        fetch('otro.json')
          .then((response) => response.json())
          .then((myJson) => {
              if (categoryName === undefined){
              setProductListTops(myJson.tops)
              setProductListCalzas(myJson.calzas)
              } else if(categoryName === "tops") {
                  setProductListTops(myJson.tops)
              } else if (categoryName === "calzas"){
                  setProductListCalzas(myJson.calzas)
              }
          }
          )
          .catch((e) => console.log(e))
      },[categoryName])
    return (
        <div>
            
        </div>
    )
}

export default Otro
