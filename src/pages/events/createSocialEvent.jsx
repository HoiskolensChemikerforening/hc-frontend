import React, { useEffect, useState, useContext, useRef } from "react";
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col, PageContainer } from "../../components/Layout";
import { H1, H2, H3, P, Title, TitleContainer} from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { fetchList, checkPermission } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
import { TextField, ImageUpload } from "../../components/Form";

export const CreateSocialEvent = () => {
  const [canAddSocial, setCanAddSocial] = useState(false);
  const history = useHistory();
  let {user} = useContext(AuthContext);

  useEffect(() => {
    
    checkPermission("events.add_social", user, setCanAddSocial);
      }, [user]);

      const [formData, setFormData] = useState({ title: '', date: '', description: '' });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('arrangement/opprettarrangement/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // Handle successful event creation (e.g., show a success message).
          } else {
            // Handle error (e.g., show an error message).
          }
        } catch (error) {
          // Handle network or other errors.
        }
      };

      const [isChecked, setIsChecked] = useState(false);

      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

      const [selectedOption, setSelectedOption] = useState(''); 

      const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };

  return (
    <>
    <OuterWrapper>
      <TitleContainer>
        <Title>Opprett sosialt arrangement</Title>
      </TitleContainer>
      <P style={{paddingLeft:'80px'}}>Her lager du de beste arrangementene på Gløs!</P>


      <ContentBox>
        <form onSubmit={handleSubmit}>

        <H3>Tittel</H3>
        <TextField
              label="Tittel"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

          <div>
            <P>Komité</P>
            <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="invalid">Velg din komité</option>
              <option value="pHaestkomiteen">pHaestkomiteen</option>
              <option value="Webkomiteen">Webkomiteen</option>
              <option value="Kjellerstyret">Kjellerstyret</option>
            </select>
            <P>Du valgte: {selectedOption}</P>
          </div>

          <P>Legg inn følgende datoer og klokkeslett:</P>
          <TimeContainer>
            <div>
              <P>Tidspunkt for arrangementet</P>
              <TimeBox>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              <input type="time" id="time1" name="time1" value={formData.time1} onChange={handleChange} required />
            </TimeBox>
            </div>
            <div>
              <P>Påmeldingen åpner</P>
              <TimeBox>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              <input type="time" id="time1" name="time1" value={formData.time1} onChange={handleChange} required />
            </TimeBox>
            </div>
            <div>
              <P>Påmeldingen stenger</P>
              <TimeBox>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              <input type="time" id="time1" name="time1" value={formData.time1} onChange={handleChange} required />
            </TimeBox>
            </div>
            <div>
              <P>Avmeldingen stenger</P>
              <TimeBox>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              <input type="time" id="time1" name="time1" value={formData.time1} onChange={handleChange} required />
            </TimeBox>
            </div>
          </TimeContainer>

          <br/>
          <br/>
          <br/>

          <div>
            <P>Sted</P>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div>
            <P>Beskrivelse av arrangementet</P>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          </div>

          <div>
            <P>Betalingsinformasjon</P>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <br/>
          <br/>
          <br/>
          <div>
            <H3>Last opp et bilde</H3>
            <ImageUpload/>
          </div>
          <br/>
          <br/>
          <br/>

          <div>
            <P>Antall plasser, sett til 0 hvis åpent arrangement</P>
          </div>

          <PriceContainer>
            <div>
              <P>Pris for medlemmer</P>
              <PriceBox>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </PriceBox>
            </div>
            <div>
              <P>Pris for ikke-medlemmer</P>
              <PriceBox>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </PriceBox>
            </div>
            <div>
              <P>Pris for følge</P>
              <PriceBox>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </PriceBox>
            </div>
          </PriceContainer>

          <div>
            <P>Inkluderer arrangementet noen av alternativene nedenfor?</P>
          </div>
          <ExtraContainer>
            <ExtraBox>
              <P>Følge</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Overnatting</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Nattmat</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Innsjekking</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
          </ExtraContainer>

          <div>
          <P>Hvilke klassetrinn er dette arrangementet for?</P>
          </div>
          <ExtraContainer>
            <ExtraBox>
              <P>Førsteklasse</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Andreklasse</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Tredjeklasse</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Fjerdeklasse</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
            <ExtraBox>
              <P>Femteklasse</P>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            </ExtraBox>
          </ExtraContainer>

          <Button primary type="submit">Opprett arrangement!</Button>
        </form>
    </ContentBox>
    </OuterWrapper> 
    </>
  )
};

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20%;
margin-right: 20%;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: column;
`;

const ExtraContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20%;
margin-right: 20%;
`;

const ExtraBox = styled.div`
  display: flex;
  justify-content: row;
`;