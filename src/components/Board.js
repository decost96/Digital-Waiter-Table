import axios from 'axios';
import React from 'react';


// url de la api
const url ="https://jsonplaceholder.typicode.com/todos";
// const url = "http://192.168.100.14:8000/api/v1/dishes";

class Board extends React.Component{
 
    state={
      data:[]
    }
  
  peticionGet=()=>{
    axios.get(url).then(res=>{
      this.setState({data: res.data})
      console.log(res)
    })
  }

  componentDidMount(){
    this.peticionGet();
  }

  render(){
    return <div className="Board">
    <h1 className="titulo">Historial de Pedidos</h1>
    <div className="container-table100">
      <div className="wrap-table100">
        <div className="table100">
          <table>
            <thead>
              <tr className="table100-head">
                <th className="columnP">Mesa</th>
                <th className="columnP">Platillo</th>
                <th className="columnP">Cantidad</th>
                <th className="columnP">Fecha</th>
                <th className="columnP">Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(res=>{
                return(
                  <tr>
                  {/* aqui le hago el mapeo de la data de la api y la distribuyo en los diferentes campos */}
                  <td className="columnP">{res.userId}</td>
                  <td className="columnP">{res.id}</td>
                  <td className="columnP">{res.title}</td>
                  <td className="columnP">{res.completed}</td>
                  <td className="columnP">{res.userId}</td>
                  </tr>                
                )
              })}
       
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Board;
