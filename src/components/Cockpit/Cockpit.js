import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('saved data to cloud ');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js ] cleanup work in useEffect');
    };

  }, []
    // [props.persons]
  );
  useEffect(() => {
    console.log('[Cockpit.js ] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js ] cleanup work in 2nd useEffect');
    };
  });
  const assignedclasses = [];
  let btnClass = '';
  if (props.showPersons) {

    btnClass = classes.Red;

  }
  if (props.personsLength <= 2) {
    assignedclasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedclasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedclasses.join(' ')}>It is really working!</p>
      <button ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle persons</button>

      <button onClick={authContext.login}>Login</button>

    </div>
  );

}
export default React.memo(cockpit);