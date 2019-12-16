import React from 'react';

// https://stackoverflow.com/questions/46039976/exporting-multiple-modules-in-react-js

function displayUser(userId) {
  return (<>
    <p>Name: {userId.firstName}<br />
    Last name: {userId.lastName}<br />
    ID: {userId.id}<br />
    </p>
  </>
  );
}

function DisplayRecord(props) {
  return (
    <div>
      <p>
        Event: {props.eventName}<br />
        Time: {props.time}<br />
      </p>
    </div>
  );
}

export {
  displayUser,
  DisplayRecord,
}

/*
export const displayUser = (userId) => {
  return (<>
    <p>Name: {userId.firstName}<br />
    Last name: {userId.lastName}<br />
    ID: {userId.id}<br />
    </p>
  </>
  );
}

// Move to different file
export const DisplayRecord = (props) => {
  return (
    <div>
      <p>Event: {props.eventName}</p>
      <p>Time: {props.time}</p>
    </div>
  );
}

//export default displayUser;
//export default DisplayRecord;
*/

// vim: et ts=2 sw=2 ai
