import React from 'react';
import Sample from '/Users/ririki-nakabayashi/react-works/src/images/sample.png';

const App = ()=>(
  <div>
    <div style={styles.header}><p style={styles.headerIcon}>≡</p></div>
    <div style={styles.body}>
      <h1 style={styles.title}>React Works</h1>
      <div style={styles.linkBox}>
          <div style={styles.linkBoxImage}>
            <img src={Sample} style={styles.linkImg} />
          </div>
          <div style={styles.linkBoxCaption}>
            タスクリスト (React, node.js, MySQL)
          </div>
        <a href="/taskList" style={styles.link}>
          <button style={styles.linkBoxButton}>VIEW >></button>
        </a>
      </div>
    </div>
  </div>
);

const styles = {
  header: {
    fontSize:'30px',
    width:'70px',
    height:'100%',
    position:'fixed',
    left:'0',
    top:'0',
    backgroundColor:'#232323'
  },
  headerIcon: {
    color:'#01d8ff',
    textAlign:'center',
    width:'100%',
    top:'50%',
    position:'absolute',
    margin:'0'
  },
  body: {
    marginLeft:'120px',
    color:'#e0e0e0e0'
  },
  title: {
    margin:'100px 0'
  },
  linkBox: {
    width:'300px',
    height:'300px',
    marginRight: '30px',
    float:'left'
  },
  linkBoxImage: {
    width:'300px',
    boxShadow: '1px 1px 2px #1f1f1f',
    height:'220px'
  },
  linkBoxCaption: {
    width:'300px',
    height:'20px',
    fontSize:'10px',
    fontWeight:'100',
    paddingTop:'10px',
    border:'none'
  },
  linkImg: {
    width:'300px',
    height:'220px',
    objectFit:'cover'
  },
  link: {
    border:'none'
  },
  linkBoxButton: {
    color:'#e0e0e0e0',
    backgroundImage: 'linear-gradient(-90deg, #185B67, #432E52)',
    border:'none',
    width:'90%',
    height:'40px',
    margin:'0px 5%',
    boxShadow: '1px 1px 2px #1f1f1f',
    fontWeight: '400'
  }
}

export default App;