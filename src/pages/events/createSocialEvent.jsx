import React, { useEffect, useState, useContext, useRef } from "react";
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col, PageContainer } from "../../components/Layout";
import { H1, H2, H3, P, Title, TitleContainer} from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { fetchList, checkPermission } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
import { TextField, ImageUpload, DropDown, TextArea } from "../../components/Form";
import Checkbox from '@material-ui/core/Checkbox';

export const CreateSocialEvent = () => {
  const [canAddSocial, setCanAddSocial] = useState(false);
  const history = useHistory();
  let {user} = useContext(AuthContext);

  useEffect(() => {
    
    checkPermission("events.add_social", user, setCanAddSocial);
      }, [user]);

      const [formData, setFormData] = useState({ title: '', komite: '', date: '', sted: '', beskrivelse: '', betalingsinfo: '' });

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

      const [checkboxes, setCheckboxes] = useState({
        published: false,
        tentative: false,
        plusOne: false,
        sleepover: false,
        nightSnack: false,
        checkIn: false,
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: false
      });

      const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
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
      
      <CheckboxContainer>
        <CheckBox>
          <ColoredCheckbox
            checked={checkboxes.published}
            onChange={handleCheckboxChange}
            name="published"
            
          />
          <P>Publisert</P>
        </CheckBox>
        <CheckBox>
          <ColoredCheckbox
            checked={checkboxes.tentative}
            onChange={handleCheckboxChange}
            name="tentative"
            color="primary"
          />
          <P>Tentativt</P>
        </CheckBox>
      </CheckboxContainer>

          <div>
            <P>Komité</P>
            <DropDown
            label="Komite"
            type="komite"
            id="komite"
            name="komite"
            value={formData.komite}
            onChange={handleChange}
            required>
              <option value="" disabled selected>Velg din komité</option> {/* Burde legge inn at kun komiteer man har permission til vises */}
              <option value="pHaestkomiteen">pHaestkomiteen</option>
              <option value="Webkomiteen">Webkomiteen</option>
              <option value="Kjellerstyret">Kjellerstyret</option> 
            </DropDown>
            <P>Du valgte: {formData.komite}</P>
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
            <TextField
              label="Sted"
              type="sted"
              id="sted"
              name="sted"
              value={formData.sted}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <P>Beskrivelse av arrangementet</P>
            <TextArea
              label="Beskrivelse"
              type="beskrivelse"
              id="beskrivelse"
              name="beskrivelse"
              value={formData.beskrivelse}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <P>Betalingsinformasjon</P>
            <TextArea
              label="Betalingsinfo"
              type="betalingsinfo"
              id="betalingsinfo"
              name="betalingsinfo"
              value={formData.betalingsinfo}
              onChange={handleChange}
              required
            />
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
          <CheckboxContainer>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.plusOne}
                onChange={handleCheckboxChange}
                name="plusOne"
                color="primary"
              />
              <P>Følge</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.sleepover}
                onChange={handleCheckboxChange}
                name="sleepover"
                color="primary"
              />
              <P>Overnatting</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.nightSnack}
                onChange={handleCheckboxChange}
                name="nightSnack"
                color="primary"
              />
              <P>Nattmat</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.checkIn}
                onChange={handleCheckboxChange}
                name="checkIn"
                color="primary"
              />
              <P>Innsjekking</P>
            </CheckBox>
          </CheckboxContainer>


          <div>
          <P>Hvilke klassetrinn er dette arrangementet for?</P>
          </div>
          <CheckboxContainer>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.first}
                onChange={handleCheckboxChange}
                name="first"
                color="primary"
              />
              <P>Førsteklasse</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.second}
                onChange={handleCheckboxChange}
                name="second"
                color="primary"
              />
              <P>Andreklasse</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.third}
                onChange={handleCheckboxChange}
                name="third"
                color="primary"
              />
              <P>Tredjeklasse</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.forth}
                onChange={handleCheckboxChange}
                name="forth"
                color="primary"
              />
              <P>Fjerdeklasse</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.fifth}
                onChange={handleCheckboxChange}
                name="fifth"
                color="primary"
              />
              <P>Femteklasse</P>
            </CheckBox>
          </CheckboxContainer>

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

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center; 
  margin-right: 15px; 

  P {
    margin: 0; 
    line-height: normal; 
  }

  .MuiCheckbox-root {
    padding: 9px; 
  }
`;

const ColoredCheckbox = styled(Checkbox)`
  &.Mui-checked {
    color: #FFcb26 !important; // Color when checked
  }

  &:hover {
    background-color: rgba(255, 203, 38, 0.1) !important;
  }
`;