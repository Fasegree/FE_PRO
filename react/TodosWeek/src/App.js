
import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/Addform/AddForm';
import Field from './components/Field/Field';
import dataOfWeek from './components/data_src/week_list'
import Filter from './components/Filter/Filter';



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
 
     localStorage.setItem('weekList', JSON.stringify(weekList))
     setDataWeekList(weekList)
     console.log('else render');
   }
  }, [])

// LS для фильтра
  const getLSFiltered = () => {
		return JSON.parse(localStorage.getItem('taskFilter'))
	}
	const setLSFiltered = (taskFiltered) => {
		 localStorage.setItem('taskFilter',JSON.stringify(taskFiltered))
	}
	const removeLSFiltered = () => {
		localStorage.removeItem('taskFilter')
	}	

  
  // console.log(dataOfWeek['Monday']);
  // console.log(Object.keys(dataOfWeek))
  return (
    <div >

      {/* Передаем либо объект со стандартынми(первоначальными) задачами либо с задачами, сохраненными  в LS */}
      <AddForm dataWeekList={storedData ?? weekList} setDataWeekList={setDataWeekList}/>
      <Filter 
      dataWeekList={storedData ?? weekList} 
      setDataWeekList={setDataWeekList}
      getLSFiltered={getLSFiltered}
      setLSFiltered={setLSFiltered}
      removeLSFiltered={removeLSFiltered}
      />
      <Field 
      dataWeekList={getLSFiltered() ?? storedData ?? weekList} 
      setDataWeekList={setDataWeekList}/>
    </div>
  );
}

export default App;
