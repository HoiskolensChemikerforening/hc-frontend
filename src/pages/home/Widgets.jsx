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
        console.log(items);
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
      }
        else if (h == 1) {
        time = h.toString() + ' time siden';
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
                       {time}
                    </TextContainer>
                </WidgetContainer> 
                <WidgetContainer to="/bokskap">
                    <CompContainer><RiArchiveDrawerLine/></CompContainer>
                    <TextContainer>
                        Bokskap
                    </TextContainer>
                </WidgetContainer>
                <WidgetContainer to="/midler">
                    <CompContainer><RiHandCoinLine/></CompContainer>
                    <TextContainer>
                        Midler
                    </TextContainer>
                </WidgetContainer>
                <WidgetContainer to="/kontortilgang/søk">
                    <CompContainer><RiDoorOpenFill/></CompContainer>
                    <TextContainer>
                        Kontortilgang
                    </TextContainer>
                </WidgetContainer>
            </StaticContainer>
        </>
    )
  };

const StaticContainer = styled.div`
    position:fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 180px;
    height: 80%;
    margin-left: 50px;
`;

const WidgetContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 70px;
    //margin-bottom: 50px;
    padding: 5px;
    border-radius: 10px;

    background-color: var(--yellow-30);
    color: var(--gray-90);
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    
`;

const CompContainer = styled.div`
    font-size: 35px;
    width: 30%;
    display: flex;
    justify-content: center;
`;

const TextContainer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70%;
    margin: 0px;

    font-size: 16px;
    font-weight: 510;
    color: var(--gray-90);
`;

