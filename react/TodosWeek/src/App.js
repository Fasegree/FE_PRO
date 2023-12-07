
import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/Addform/AddForm';
import Field from './components/Field/Field';
import dataOfWeek from './components/data_src/week_list'



function App() {
  
  const [weekList, setDataWeekList] = useState(dataOfWeek)
  let storedData = JSON.parse(localStorage.getItem('weekList'))

  // Определяем есть ли задачи в хранилище localStorage  и рендерим карточки
  useEffect(() => {
    if(storedData){
   
      console.log('Render');
      console.log(storedData);
      setDataWeekList(storedData)
   } else{
 
     localStorage.setItem('weekList', JSON.stringify(dataOfWeek))
     console.log('else render');
   }
  }, [])
  
  // console.log(dataOfWeek['Monday']);
  // console.log(Object.keys(dataOfWeek))
  return (
    <div >

      {/* Передаем либо объект со стандартынми(первоначальными) задачами либо с задачами, сохраненными  в LS */}
      <AddForm dataWeekList={storedData ?? dataOfWeek} setDataWeekList={setDataWeekList}/>
      <Field 
      dataWeekList={storedData ?? dataOfWeek} 
      setDataWeekList={setDataWeekList}/>
    </div>
  );
}

export default App;
