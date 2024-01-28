import React, { useEffect, useState, useContext, useRef } from "react";
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col, PageContainer } from "../../components/Layout";
import { H1, H2, H3, P, Title, TitleContainer} from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { fetchList, checkPermission, postRequest } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
import { TextField, ImageUpload, DropDown, TextArea } from "../../components/Form";
import Checkbox from '@material-ui/core/Checkbox';

export const CreateSocialEvent = () => {
  const [canAddSocial, setCanAddSocial] = useState(false);
  const [eventType, setEventType] = useState(""); // holds either "published" or "tentative"
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  let {user} = useContext(AuthContext);

  const Modal = ({ onClose, children }) => (
    <StyledModal>
      {children}
      <Button primary type="button" onClick={onClose} style={{ marginTop: '20px' }}>Lukk</Button>
    </StyledModal>
  );

  useEffect(() => {
    
    checkPermission("events.add_social", user, setCanAddSocial);
      }, [user]);

      const [formData, setFormData] = useState({
        attendees: [], // skal jeg sende dette eller legges den til etterpå?
        title: '',
        created: '',
        edited: '',
        date: '',
        register_startdate: '',
        register_deadline: '',
        deregister_deadline: '',
        eventDate: '',
        eventTime: '',
        registerStartDate: '',
        registerStartTime: '',
        registerDeadlineDate: '',
        registerDeadlineTime: '',
        deregisterDeadlineDate: '',
        deregisterDeadlineTime: '',
        location: '',
        description: '',
        image: '',
        sluts: '',
        payment_information: '',
        price_member: 0,
        price_not_member: 0,
        price_companion: 0,
        published: false,
        tentative: false,
        companion: false,
        sleepover: false,
        night_snack: false,
        check_in: false,
        allowed_grades: [],
        committee: null, // kan dette hentes direkte fra en API? Skal egentlig være en { med info }
        author: { // hvordan hente dette fra brukeren som er logget inn?
          username: "ingridsutterud",
          email: "dsf@fd.com",
          first_name: "Ingrid",
          last_name: "Sutterud",
          full_name: "Ingrid Sutterud"
        }
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // For nested fields like committee, you'll need a separate handler or logic
        // For arrays like allowed_grades, you'll need logic to add/remove items
      };

      const combineDateTime = (date, time) => {
        if (date && time) {
          return new Date(date + 'T' + time).toISOString();
        }
        return '';
      };

      const prepareDataForSubmission = () => {
        const dataToSubmit = {
          ...formData,
          date: combineDateTime(formData.eventDate, formData.eventTime),
          register_startdate: combineDateTime(formData.registerStartDate, formData.registerStartTime),
          register_deadline: combineDateTime(formData.registerDeadlineDate, formData.registerDeadlineTime),
          deregister_deadline: combineDateTime(formData.deregisterDeadlineDate, formData.deregisterDeadlineTime),
          // Make sure nested objects and arrays are correctly formatted
        };
      
        return dataToSubmit;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!eventType) {
          setShowModal(true);
          return;
        }
        try {
          const dataToSubmit = prepareDataForSubmission();
          await postRequest('arrangementer/api/sosial/', dataToSubmit);
          // show a success message
        } catch (error) {
          // Handle network or other errors.
        }
      };

      const [checkboxes, setCheckboxes] = useState({
        published: false,
        tentative: false,
        companion: false,
        sleepover: false,
        night_snack: false,
        check_in: false,
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: false
      });

      const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
        setEventType(e.target.name);
      };

      const [selectedOption, setSelectedOption] = useState(''); 

      const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };

  return (
    <>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <p>Du må velge om arrangementet ditt skal være publisert eller tentativt!</p>
      </Modal>
    )}
    <OuterWrapper>
      <TitleContainer>
        <Title>Opprett sosialt arrangement</Title>
      </TitleContainer>
      <P style={{paddingLeft:'80px'}}>Her lager du de beste arrangementene på Gløs!</P>


      <ContentBox>
        <form onSubmit={handleSubmit}>

        <FloatingLabelInputContainer>
          <StyledInput
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder=" " 
            required
          />
          <FloatingLabel htmlFor="title">Tittel</FloatingLabel>
        </FloatingLabelInputContainer>

      <CheckboxContainer>
        <CheckBox>
          <ColoredCheckbox
            checked={eventType === "published"}
            onChange={handleCheckboxChange}
            name="published"
            
          />
          <P>Publisert</P>
        </CheckBox>
        <CheckBox>
          <ColoredCheckbox
            checked={eventType === "tentative"}
            onChange={handleCheckboxChange}
            name="tentative"
            color="primary"
          />
          <P>Tentativt</P>
        </CheckBox>
      </CheckboxContainer>

          <div>
            <P>Hvilken komité arrangerer?</P>
            <StyledDropDown
              id="committee"
              name="committee"
              value={formData.committee}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>Velg din komité</option> {/* Burde legge inn at kun komiteer man har permission til vises */}
              <option value="pHaestkomiteen">pHaestkomiteen</option>
              <option value="Webkomiteen">Webkomiteen</option>
              <option value="Kjellerstyret">Kjellerstyret</option> 
            </StyledDropDown>
            <P>Du valgte: {formData.committee}</P>
          </div>

          <P>Legg inn følgende datoer og klokkeslett:</P>
          <TimeContainer>
            <div>
              <P>Tidspunkt for arrangementet</P>
              <TimeBox>
                <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                <input type="time" id="eventTime" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
              </TimeBox>
            </div>
            <div>
              <P>Påmeldingen åpner</P>
              <TimeBox>
                <input type="date" id="registerStartDate" name="registerStartDate" value={formData.registerStartDate} onChange={handleChange} required />
                <input type="time" id="registerStartTime" name="registerStartTime" value={formData.registerStartTime} onChange={handleChange} required />
              </TimeBox>
            </div>
            <div>
              <P>Påmeldingen stenger</P>
              <TimeBox>
                <input type="date" id="registerDeadlineDate" name="registerDeadlineDate" value={formData.registerDeadlineDate} onChange={handleChange} required />
                <input type="time" id="registerDeadlineTime" name="registerDeadlineTime" value={formData.registerDeadlineTime} onChange={handleChange} required />
              </TimeBox>
            </div>
            <div>
              <P>Avmeldingen stenger</P>
              <TimeBox>
                <input type="date" id="deregisterDeadlineDate" name="deregisterDeadlineDate" value={formData.deregisterDeadlineDate} onChange={handleChange} required />
                <input type="time" id="deregisterDeadlineTime" name="deregisterDeadlineTime" value={formData.deregisterDeadlineTime} onChange={handleChange} required />
              </TimeBox>
            </div>
          </TimeContainer>

          <br/>
          <br/>
          <br/>

          <div>
            <P>Sted</P>
            <TextField
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <P>Beskrivelse av arrangementet</P>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <P>Betalingsinformasjon</P>
            <TextArea
              id="payment_information"
              name="payment_information"
              value={formData.payment_information}
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
              <input type="text" id="price_member" name="price_member" value={formData.price_member} onChange={handleChange} required />
            </PriceBox>
            </div>
            <div>
              <P>Pris for ikke-medlemmer</P>
              <PriceBox>
              <input type="text" id="price_not_member" name="price_not_member" value={formData.price_not_member} onChange={handleChange} required />
            </PriceBox>
            </div>
            <div>
              <P>Pris for følge</P>
              <PriceBox>
              <input type="text" id="price_companion" name="price_companion" value={formData.price_companion} onChange={handleChange} required />
            </PriceBox>
            </div>
          </PriceContainer>

          <div>
            <P>Inkluderer arrangementet noen av alternativene nedenfor?</P>
          </div>
          <CheckboxContainer>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.companion}
                onChange={handleCheckboxChange}
                name="companion"
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
                checked={checkboxes.night_snack}
                onChange={handleCheckboxChange}
                name="night_snack"
                color="primary"
              />
              <P>Nattmat</P>
            </CheckBox>
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.check_in}
                onChange={handleCheckboxChange}
                name="check_in"
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

const FloatingLabelInputContainer = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 0;
  bottom: 0; 
  left: 0;
  font-size: 16px;
  color: #999;
  transition: all 0.3s ease;
  pointer-events: none;
  transform-origin: left bottom;
`;

const StyledInput = styled.input`
  width: 40%;
  border: 0;
  border-bottom: 1px solid #ccc;
  outline: 0;
  font-size: 16px;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:focus {
    border-bottom-color: #000;
  }

  &:focus ~ ${FloatingLabel}, &:not(:placeholder-shown) ~ ${FloatingLabel} {
    top: -20px;
    font-size: 12px;
    color: #333;
  }
`;

const StyledDropDown = styled.select`
  width: 40%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  color: #333 !important;
  margin-bottom: 20px;

  option {
    color: #333;
    background-color: white !important;

    &:hover {
      background-color: #FFcb26 !important; 
    }
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly;
  align-items: center; 
  margin: 20px 0; 
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 10px; 

  & > input {
    margin-bottom: 5px; // Spacing between each input
  }
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

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffacd;
  padding: 20px;
  z-index: 1000;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-align: center;
`;