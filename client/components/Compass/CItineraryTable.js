import React, { Component } from "react";
import "../../css/compass.css";
import '../../css/Main.css';
import {useTable} from 'react-table';
import CBtn from "./CBtn";
import {FaGoogleDrive} from 'react-icons/fa';

class CItineraryTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="justify-content-center">

      <table className="table-itinerary" style={{width:"100%"}}>
        <thead className='table-headers'>
          <th scope="col" style={{width:"15%"}}>Day</th>
          <th scope="col"style={{width:"10%"}}>Time</th>
          <th scope="col"style={{width:"60%"}}>Description</th> 
          <th scope="col" style={{width:"15%"}}>Link</th>
        </thead>
        <tbody className="table-rows">
          <tr >
            <td>Sat July 18</td>
            <td>09:00<br/>to<br/>10:00</td>
            <td><b>Opening Ceremonies</b><br/><b>Keynote: </b>Dr. Laura Jana<br/>Case opens at 09:30 (below)</td>
            <td><CBtn href="/compass" txt="Stream" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
            
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>10:00<br/>to<br/>11:00</td>
            <td><b>Panel #1:</b><br/>Denys Linkov, Devin Golets</td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/92526474729" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>11:30<br/>to<br/>12:30</td>
            <td><b>Workshop #1: Whats your story?</b><br/>Dr. Prasa Gopee-Ramanan</td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/94449879979" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>13:30<br/>to<br/>14:30</td>
            <td><b>Panel #2:</b><br/>Stephanie Nuesi, Dr. Nigmendra Narain, Gabriella Pannicia</td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/94652183788" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>14:45<br/>to<br/>15:45</td>
            <td><b>Workshop #2:</b><br/>Dr. Nigmendra Narain</td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/94652183788" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>14:45<br/>to<br/>15:45</td>
            <td><b>Workshop #3:</b><br/>Wonsulting - Jonathan Javier, Jerry Lee</td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/96646299861" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>17:00<br/>to<br/>18:00</td>
            <td><b>Workshop #4:</b><br/>Dr. Laura Jana</td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/98473783224" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
          {/* <tr>
            <td>Sat July 18</td>
            <td>17:00</td>
            <td><b>Crisis #1</b></td>
            <td></td>
          </tr>
          <tr>
            <td>Sat July 18</td>
            <td>21:00</td>
            <td><b>Crisis #2</b></td>
            <td></td>
          </tr> */}
          <tr>
            <td>Sun July 19</td>
            <td>08:00</td>
            <td><b>Submission Deadline</b><br/>(Below)</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>Sun July 19</td>
            <td>13:30</td>
            <td>
            <b>Top 3 + Honorable Mentions<br/>Closing Ceremonies</b>
            </td>
            <td><CBtn href="https://westernuniversity.zoom.us/j/92192671822" txt="Zoom" newTab={true} style={{margin:0,padding:0}} styleTxt={{margin:0,paddingTop:'7px', height:'40px',width:'100px',fontSize:"large"}}/></td>
          </tr>
        </tbody>
      </table>
        <p className="compass-desc-small" style={{fontSize:"medium",marginTop:"0px"}}>*All times are in EST</p>
      </div>
    );
  }
}

export default CItineraryTable;
