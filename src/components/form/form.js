import React, { useState, useEffect } from 'react';
import './form.sass';
import Button from '../button';
import Select from '../select';
import Input from '../input';
import calcTime from '../calculate/calcTime';

const Form = () => {
  const [form, setForm] = useState('order');
  const [direction, setDirection] = useState('из A в B');
  const [timeThere, setTimeThere] = useState('900');
  const [timeBack, setTimeBack] = useState('960');
  const [tickets, setTickets] = useState('0');
  const [childTickets, setChildTickets] = useState('0');
  const [price, setPrice] = useState('');

  const thereOptionsValue = [
    {'option': `${calcTime(900)}(из A в B)`, 'value': '900', 'status': ''},
    {'option': `${calcTime(930)}(из A в B)`, 'value': '930', 'status': ''},
    {'option': `${calcTime(945)}(из A в B)`, 'value': '945', 'status': ''},
    {'option': `${calcTime(960)}(из A в B)`, 'value': '960', 'status': ''},
    {'option': `${calcTime(975)}(из A в B)`, 'value': '975', 'status': ''},
    {'option': `${calcTime(1080)}(из A в B)`, 'value': '1080', 'status': ''},
  ];
  const [thereOptions] = useState(thereOptionsValue);

  const backOptionsValue = [
    {'option': `${calcTime(930)}(из B в A)`, 'value': '930', 'status': ''},
    {'option': `${calcTime(945)}(из B в A)`, 'value': '945', 'status': ''},
    {'option': `${calcTime(960)}(из B в A)`, 'value': '960', 'status': ''},
    {'option': `${calcTime(975)}(из B в A)`, 'value': '975', 'status': ''},
    {'option': `${calcTime(995)}(из B в A)`, 'value': '995', 'status': ''},
    {'option': `${calcTime(1130)}(из B в A)`, 'value': '1130', 'status': ''},
    {'option': `${calcTime(1135)}(из B в A)`, 'value': '1135', 'status': ''},
  ];
  const [backOptions, setBackOptions] = useState(backOptionsValue);

  useEffect(() => calcPrice(), [direction, tickets, childTickets]);

  const calcPrice = () => {
    setPrice(
      direction === "из A в B и обратно в А" ?
      (+childTickets + +tickets)*1200 :
      (+childTickets + +tickets)*700
    );
  };

  useEffect(() => disableOptions(), [timeThere, direction]);

  const disableOptions = () => {
    for (let i in backOptionsValue) {
      if (direction === 'из A в B и обратно в А' && +timeThere + 50 >= +backOptionsValue[i].value) {
        backOptionsValue[i].status = 'disabled';
        setBackOptions(backOptionsValue);
      } else {
        backOptionsValue[i].status = '';
        setBackOptions(backOptionsValue);
      }
    }
  };

  const onSubmit = () => {
    console.log(direction,timeThere,timeBack);
  };

  if (form === 'order') {

    return (
      <form className="form" method="post">

        <Select label="Направление"
                options={[
                  {'option': "из A в B", 'status': ''},
                  {'option': "из B в A", 'status': ''},
                  {'option': "из A в B и обратно в А", 'status': ''},
                ]}
                action={e => {
                  setDirection(e.target.value);
                }} />

        <Select label="Время"
                id="timeThere"
                options={ thereOptions }
                action={e => {
                  setTimeThere(e.target.value);
                }}
                disabled={(direction === 'из A в B' || direction === 'из A в B и обратно в А') ? '' : true } />

        <Select label="Тип билета"
                id="ticketType"
                options={[
                  {'option': 'Льготный', 'status': ''},
                  {'option': 'Групповой', 'status': ''},
                ]}
                disabled={true} />

        <Select label="Время обратное"
                id="timeBack"
                options={ backOptions }
                action={e => {
                  setTimeBack(e.target.value.match(/^.{0,5}/i));
                }}
                disabled={(direction === 'из B в A' || direction === 'из A в B и обратно в А') ? '' : true } />

        <Input label="взрослых билетов" 
               id="adult"
               action={e => {
                setTickets(e.target.value);
               }}
               value={tickets} />

        <Input label="детских билетов" 
               id="child" 
               value={childTickets}
               action={e => {
                setChildTickets(e.target.value);
               }} />

        <Button content="Посчитать"
                disabled={ price === 0 ? true : '' }
                action={e => {
                  e.preventDefault();
                  setForm('info');}
                } />

        <Button content="Купить билеты" 
                arrow=">"
                disabled={true} />

      </form>
    );
  } else {

    return (
      <div className="form">
        <p>
          Вы выбрали {+childTickets + +tickets} билетов по маршруту {direction} стоимостью {price}р.<br />
          Это путешествие займет у вас {direction === 'из A в B и обратно в А' ? (100 + (+timeBack - (+timeThere + 50))) : 50} минут.<br />
          Теплоход отправляется в {direction === 'из B в A' ? calcTime(+timeBack) : calcTime(+timeThere)},
           а прибудет в {direction === 'из B в A' ? calcTime(+timeBack + 50) : calcTime(+timeThere + 50)}.<br />
          {direction === 'из A в B и обратно в А' ? `Обратно поедем в ${calcTime(+timeBack)}, вернемся в ${calcTime(+timeBack + 50)}`  : ''}
        </p>

        <Button content="Изменить"
                action={e => {
                  e.preventDefault();
                  setForm('order');}
                } />

        <Button content="Купить билеты" 
                arrow=">"
                action={e => {
                  e.preventDefault();
                  onSubmit();}
                } />
      </div>
    );
  }
}

export default Form;