import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const random = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { first, last } = person.name;
    const { number, name } = person.location.street;
    const { password } = person.login;
    const { large: image } = person.picture;
    const { age } = person.dob;
    const newPerson = {
      phone,
      email,
      password,
      age,
      image,
      number,
      age,
      name: `${first} ${last}`,
      street: `${number} ${name}`,
    };
    setPerson(newPerson);
    setShow("name");
    setValue(newPerson.name);
  };
  useEffect(random, []);
  //出现destroy is not a funciton错误的原因：不能把一个promise作为useeffect的返回值
  //解决方案：弃用隐式返回，在剪头函数返回处加上大括号，
  //具体见https://medium.com/geekculture/react-uncaught-typeerror-destroy-is-not-a-function-192738a6e79b

  const [person, setPerson] = useState({});
  const [show, setShow] = useState("name");
  const [value, setValue] = useState("");

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <div className="bcg-black block"></div>
          <div className="block">
            <div className="container">
              <img src={person.image}></img>
              {/* 当person是null时显示默认图像 */}
              <p className="user-title">{`My ${show} is`}</p>
              <p className="user-value">{value}</p>
              <div className="values-lists">
                <button
                  className="icon"
                  onMouseOver={() => {
                    setShow("email");
                    setValue(person.email);
                  }}
                >
                  <FaEnvelopeOpen />
                </button>
                <button
                  className="icon"
                  onMouseOver={() => {
                    setShow("name");
                    setValue(person.name);
                  }}
                >
                  <FaUser />
                </button>
                <button
                  className="icon"
                  onMouseOver={() => {
                    setShow("age");
                    setValue(person.age);
                  }}
                >
                  <FaCalendarTimes />
                </button>
                <button
                  className="icon"
                  onMouseOver={() => {
                    setShow("street");
                    setValue(person.street);
                  }}
                >
                  <FaMap />
                </button>
                <button
                  className="icon"
                  onMouseOver={() => {
                    setShow("phone");
                    setValue(person.phone);
                  }}
                >
                  <FaPhone />
                </button>
                <button
                  className="icon"
                  onMouseOver={() => {
                    setShow("password");
                    setValue(person.password);
                  }}
                >
                  <FaLock />
                </button>
              </div>
              <button
                className="btn"
                onClick={() => {
                  setPerson(random());
                }}
              >
                RANDOM USER
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
