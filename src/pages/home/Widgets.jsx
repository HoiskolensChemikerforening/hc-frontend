import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { P } from "../../components/Text";
import { FiCoffee } from "react-icons/fi";
import { RiArchiveDrawerLine, RiHandCoinLine, RiDoorOpenFill } from "react-icons/ri";

export const Widgets = () => {

    useEffect(() => {
        fetchCoffeebutton();
      }, []);
    
      const [coffeeButton, setCoffeeButton] = useState("");
    
      const fetchCoffeebutton = async () => {
        const data = await fetch("http://localhost:8000/web_push/api/");
        const items = await data.json();
        console.log(items[0].date);
        setCoffeeButton(new Date(items[0].date));
      };

      const currentTime = new Date();
      const dateSincePushed = currentTime - coffeeButton;
      const sec = Math.floor(dateSincePushed/1000);
      const min = Math.floor(sec/60);
      const h = Math.floor(min/60);
      const day = Math.floor(h/24);
      let time;
      if (sec < 60) {
        time = sec.tostring() + ' s siden';
      } else if (min < 60) {
        time = min.toString() + ' min siden';
      } else if (h <24) {
        time = h.toString() + ' timer siden';
      } else {
        time = day.toString() + ' dager siden';
      }


  
    return (
        <>
            <StaticContainer>
                <WidgetContainer>
                    <CompContainer><FiCoffee/></CompContainer>
                    <TextContainer>
                        <P small style={{padding: "12px 0px 0px 0px "}}>Kaffeknappen ble trykket for {time}</P>
                    </TextContainer>
                </WidgetContainer> 
                <WidgetContainer to="/bokskap">
                    <CompContainer><RiArchiveDrawerLine/></CompContainer>
                    <TextContainer>
                        <P small>Bokskap</P>
                    </TextContainer>
                </WidgetContainer>
                <WidgetContainer to="/midler">
                    <CompContainer><RiHandCoinLine/></CompContainer>
                    <TextContainer>
                        <P small>Midler</P>
                    </TextContainer>
                </WidgetContainer>
                <WidgetContainer to="/kontortilgang/søk">
                    <CompContainer><RiDoorOpenFill/></CompContainer>
                    <TextContainer>
                        <P small>Kontortilgang</P>
                    </TextContainer>
                </WidgetContainer>
            </StaticContainer>
        </>
    )
  };


const WidgetContainer = styled(Link)`
    width: 100%;
    height: 80px;
    background-color: var(--yellow-30);
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: black;
    text-decoration: none;
    align-items: center;
    border-radius: 10px;
`;

const CompContainer = styled.div`
    font-size: 35px;
    width: 30%;
    display: flex;
    justify-content: center;
`;

const TextContainer = styled.div`
    width: 70%;
`;

const StaticContainer = styled.div`
    position: fixed;
    width: 200px;
`;