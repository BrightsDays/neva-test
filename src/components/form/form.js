import React, { useState } from 'react';
import './form.sass';
import Button from '../button';
import Select from '../select';
import Input from '../input';

const Form = () => {
  const [form, setForm] = useState('login');
  const [direction, setDirection] = useState('');
  const [time, setTime] = useState('');
  const [road, setRoad] = useState('');

  if (form === 'login') {
    return (
      <form className="form" method="post">

        <Select label="Направление"
                options={[
                    "из A в B",
                    "из B в A",
                    "из A в B и обратно в А"
                ]}
                action={e => {
                  setDirection(e.target.value);
                }} />

        <Select label="Время"
                options={[
                    "18:00(из A в B)",
                    "18:30(из A в B)",
                    "18:45(из A в B)"
                ]}
                action={e => {
                  setTime(e.target.value.match(/^.{0,5}/i));
                  setRoad((+e.target.value.match(/^.{0,2}/i) + 6) + e.target.value.match(/^.{4,5}/i));
                }} />

        <div></div>

        <Select label="Время обратное"
                options={[
                    "18:30(из B в A)",
                    "18:45(из B в A)",
                    "19:00(из B в A)"
                ]}
                disabled={true} />

        <Input label="взрослых билетов" 
               id="formName" 
               placeholder="0"
               action={e => {
                 
               }} />

        <Input label="детских билетов" 
               id="formPass" 
               placeholder="0"
               action={e => {
                 }} />

        <Button content="Посчитать" 
                action={e => {
                        e.preventDefault();
                        setForm('forgot');}
                }/>

        <Button content="Купить билеты" 
                arrow=">"
                disabled={true} />

      </form>
    );
  } else {

    return (
      <div className="form">
        <p>
          Вы выбрали 4 билета по маршруту {direction} стоимостью 4000р.<br />
          Это путешествие займет у вас 40 минут.<br />
          Теплоход отправляется в {time}, а прибудет в {road}.
        </p>

        <Button content="Посчитать" disabled={true} />

        <Button content="Купить билеты" 
                arrow=">" />
      </div>
    );
  } 
}

export default Form;