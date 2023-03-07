import React from 'react';
import SideBar from '../../Components/Sidebar';


function Dashboard() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "90%",
    },
  };
  
  return (
    <>
    <div style={styles.contentDiv}>
      <SideBar></SideBar>
      <div style={styles.contentMargin}>
        <h1 style={{ padding: "0%" }}>This is Content Area</h1>
      </div>
    </div>
    </>
  );
}

export default Dashboard