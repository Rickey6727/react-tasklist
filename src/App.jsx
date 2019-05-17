import React from 'react';
import Sample from '/Users/ririki-nakabayashi/react-works/src/images/sample.png';

const App = ()=>(
  <div>
    <div style={styles.header}><p style={styles.headerIcon}>≡</p></div>
    <div style={styles.body}>
      <h1 style={styles.title}>React Works</h1>
      <div style={styles.linkBox}>
        <a href="#" style={styles.link}>
          <div style={styles.linkBoxImage}>
            <img src={Sample} style={styles.linkImg} />
          </div>
          <div style={styles.linkBoxCaption}>
            タスクリストReact, node.js, MySQL
          </div>
        </a>
      </div>
      <div style={styles.linkBox}>
        <div style={styles.linkBoxImage}>
          <img src={Sample} style={styles.linkImg} />
        </div>
        <div style={styles.linkBoxCaption}>
          タスクリストReact, node.js, MySQL
        </div>
      </div>
      <div style={styles.linkBox}>
        <div style={styles.linkBoxImage}>
          <img src={Sample} style={styles.linkImg} />
        </div>
        <div style={styles.linkBoxCaption}>
          タスクリストReact, node.js, MySQL
        </div>
      </div>
      <div style={styles.linkBox}>
        <div style={styles.linkBoxImage}>
          <img src={Sample} style={styles.linkImg} />
        </div>
        <div style={styles.linkBoxCaption}>
          タスクリストReact, node.js, MySQL
        </div>
      </div>
      <div style={styles.linkBox}>
        <div style={styles.linkBoxImage}>
          <img src={Sample} style={styles.linkImg} />
        </div>
        <div style={styles.linkBoxCaption}>
          タスクリストReact, node.js, MySQL
        </div>
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
    float:'left'
  },
  linkBoxImage: {
    width:'300px',
    height:'220px'
  },
  linkBoxCaption: {
    width:'300px',
    height:'50px',
    fontSize:'10px',
    fontWeight:'100',
    paddingTop:'15px',
    border:'none'
  },
  linkImg: {
    width:'300px',
    height:'220px',
    objectFit:'cover'
  },
  link: {
    border:'none'
  }
}

export default App;