import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


const INITIAL_STATE= [
  {id:1, baslik:"Alisveris Yap",tamamlandı: false},
  {id:2, baslik:"fatura ode",tamamlandı: true}
]

export default function App() {
  const [liste ,setliste] =useState(INITIAL_STATE);
  const [yenibaslik ,setyenibaslik] =useState("");
  const addNew =title => {
    setliste([...liste,{id: Date.now(),baslik:yenibaslik, tamamlandı:false}]);
  } 
const markCompleted =id =>{
  setliste(liste.map(e1 => e1.id===id ? {...e1, tamamlandı: !e1.tamamlandı} :e1 ))
}
const clearcompleted=() =>{
  setliste(liste.filter(item => !item.tamamlandı))
}

  return (
    <div className="App">
     <h1>Yapılacaklar listesi</h1>
     <div className="ekleme_formu">
       <input value={yenibaslik} onChange={(e)=>setyenibaslik(e.target.value)} placeholder="listeye ekle" />
       <button onClick={()=>
        {
          addNew(yenibaslik);
          setyenibaslik("");
        
        }
        } >Ekle</button>
     </div>
     <div className="liste">
       {liste.map((item, index)=>(
       <div 
       key={index}
       onClick={()=>markCompleted(item.id)}
       className={item.tamamlandı ? "yapıldı" : " "}>{item.baslik}</div>))}
      { /*<div>yapılacak</div>
       <div className="yapıldı">yapıldı</div>*/}
     </div>
     <button onClick={()=> clearcompleted()} className="temizle">yapılacakları temizle</button>
    </div>
  );
}


