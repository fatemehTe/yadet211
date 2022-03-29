import React, { useEffect, useState } from "react";
import CustomModal from "../modal/CustomModel";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import crown1 from './../../assets/images/crown1.png';
import crown2 from './../../assets/images/crown2.png';
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-circular-progressbar/dist/styles.css';
import './custom.css';

export default function CustomCircularProgressbar(props) {

  const [modalShow, setModalShow] = useState(false);
  const setModal = () => setModalShow(false)
  const [percentage, setpercentage] = useState(props.progress)
  //when set to -1 means Done with the circle and it should go to the moroor
  const [degree, setdegree] = useState(props.degree)
  const handlepercentage = (addingPercentage) => setpercentage(
    // percentage < 100 ?
    (percentage + addingPercentage)
    // :
    // (percentage)
  )

  useEffect(() => {
  
    if (props.stepProgress === props.step && props.active && props.addProgress === true) {
      if (percentage < 80) {
        setInterval(() => {
          handlepercentage(20)
        }, 500);
      }
      else if (percentage === 80 && degree + 1 <= props.maxDegree) {
        makeHundred()
        setdegree(degree + 1)
      }
      else if (percentage === 80 && degree + 1 === props.maxDegree) {
        setdegree(-1)
      }
    }
    //update the database
    createAsyncThunk('courses/updateCourses', async () => {
      try {
        const response = await axios.put("http://localhost:1337/courses/" + props.step + "",
          { progress: 0, degree: 0 });
        return response;

      } catch (error) {
        return error;
      }

    });

  }
    , [])

  async function makeHundred() {
    await setInterval(() => {
      handlepercentage(20)
    }, 500);
    setTimeout(nextDegree, 1000)
  }
  async function nextDegree() {
    await setInterval(() => {
      handlepercentage(-percentage)
    }, 500);
  }
  return (
    <div style={{ width: 110, height: 130 }}
      onClick={() => {
        if (modalShow === false) {
          setModalShow(true)
        }
      }
      }
    >
      <CircularProgressbarWithChildren
        value={percentage}
        styles={{
          root: {},
          path: {
            stroke: `rgba(255,255,0, ${percentage / 1})`,
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(0.4turn)',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: '#d6d6d6',
            // strokeLinecap: 'butt',
          },
          text: {
            fill: '#f88',
            fontSize: '16px',
          },
          background: true,
          background: {
            fill: '#3e98c7',
          },
        }}
      >
        <img className='img-style' src={props.active ? crown1 : crown2} alt="crown" />
        <img className='inner-img-style' src={props.active ? crown1 : crown2} alt="crown" />
        {props.active ?
          <div style={{ position: 'absolute', bottom: 3, right: 18, fontSize: 13, fontWeight: 'bold' }}>
            {degree}
          </div> : ''}

      </CircularProgressbarWithChildren>
      <div style={{ textAlign: 'center' }}>{props.text}</div>
      < CustomModal
        {...props}
        show={modalShow}
        onHide={setModal}
      />
    </div >
  )
}
