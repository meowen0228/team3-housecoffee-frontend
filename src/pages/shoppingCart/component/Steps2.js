import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import './steps.css';


function Steps2(){

  return(
    <>
            <div class="paytext">
            <p>結帳</p>
        </div>
        <div class="steps">
            <div class="step stepCompleted">
            <div class="stepText2">
                    確認商品</div>
            </div>
            <div class="stepLine "></div>
            <div class="step">
                <div class="stepText1">填寫資料</div>
            </div>
            <div class="stepLine"> </div>
            <div class="step ">
            <div class="stepText2">購物完成</div>
            </div>
        </div>
        {/* <!-- 手機版 --> */}
        <div class="mSteps">
            <div class=" mStep2">
            <div class="mStepNum2">1</div>
            <div class="mStepText2">訂單確認</div>
            </div>

            <div class="mStepLine "></div>
            <div class="mStep1 ">
                <div class="mStepNum1">2</div>
                <div class="mStepText1">資料填寫</div>
            </div>
            <div class="mStepLine "></div>

            <div class="mStep2  ">
            <div class="mStepNum2">3</div>
            <div class="mStepText2">購物完成</div>
            </div>
        </div>
     
      
  </>
  );
}

export default Steps2