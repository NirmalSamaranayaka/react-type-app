import React, {FC, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './component/Person';
import { HairColor } from './Emum';
import IncrementDecrement from './component/Hooks/UseState/IncrementDecrement';
import InputDataBind from './component/Hooks/UseState/InputDataBind';
import EffectHookDataLoading from './component/Hooks/UseEffect/PageLoadData';
import InputForcusRef from './component/Hooks/UseRef/InputForcus';
import LayoutEffectTutorial from './component/Hooks/UseLayoutEffect/PageCallingSequence';
import ImparativeHandler from './component/Hooks/Imparative/ImparativeHandle';
import ContextHandler from './component/Hooks/UseContext/ContextHandler';
import MemoHandler from './component/Hooks/UseMemo/MemoHandler';
import IncrementDecrementNumber from './component/Hooks/Reducer/IncrementDecrementNumber';

interface AppContextInterface{
  name:string;
  age:number;
  country:string;
}
const AppContext = createContext<AppContextInterface | null >(null)

const App:FC =() => {

  const name:string ="Nirmal Samaranayaka";
  const age:number =34;

  const contextValue:AppContextInterface={
    name :"Nadee",
    age:32,
    country:"SL"
  }

  const getName =(name:string):number=>{
    if(name ==="Nirmal"){
      return 20;
    }else{
       return 0;
    }
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name} | {age} | {getName("Nirmals")}
        </p>
        <Person name="Nadeesha" age={32} email="ncs889@gmail.com" hairColor={HairColor.Blonde}></Person>
       
        <h1>--- Use State Example--- </h1>
        <IncrementDecrement></IncrementDecrement>
        <InputDataBind></InputDataBind>

        <h1>--- Use Reducer Example--- </h1>
        <IncrementDecrementNumber></IncrementDecrementNumber>

        <h1>--- Use Effect Example--- </h1>
        <EffectHookDataLoading></EffectHookDataLoading>

        <h1>--- Use Ref Example--- </h1>
        <InputForcusRef></InputForcusRef>

        <h1>--- Use Layout Effect--- </h1>
        <LayoutEffectTutorial></LayoutEffectTutorial>

        <h1>--- Use Imparative --- </h1>
        <ImparativeHandler></ImparativeHandler>

        <h1>--- Use Context --- </h1>
        <ContextHandler></ContextHandler>

        <h1>--- Use Memo --- </h1>
        <MemoHandler></MemoHandler>
      </header>
    </div>
    </AppContext.Provider>
  );
}

export default App;
