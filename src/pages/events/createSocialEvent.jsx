import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col, PageContainer } from "../../components/Layout";
import { H1, H2, H3, P, Title, TitleContainer} from "../../components/Text";
import { Link } from "react-router-dom";
import { fetchList, checkPermission, postRequest } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
import { TextField, ImageUpload, DropDown, TextArea } from "../../components/Form";
import Checkbox from '@material-ui/core/Checkbox';

export const CreateSocialEvent = () => {
  const [canAddSocial, setCanAddSocial] = useState(false); // brukere blir ikke sjekket dersom de kun skriver inn URL. Må fikses
  const [eventType, setEventType] = useState(""); // holds either "published" or "tentative"
  const [showModal, setShowModal] = useState(false);
  let {user} = useContext(AuthContext); // må passe på at bruker blir sjekket ordentlig slik at kun de med tilgang kan legge til events
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [committees, setCommittees] = useState([]);


// de under her er et forsøk på å legge in tidsdata riktig. Fungerer ikke enda :)
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [registerStartDate, setRegisterStartDate] = useState('');
  const [registerStartTime, setRegisterStartTime] = useState('');
  const [registerDeadlineDate, setRegisterDeadlineDate] = useState('');
  const [registerDeadlineTime, setRegisterDeadlineTime] = useState('');
  const [deregisterDeadlineDate, setDeregisterDeadlineDate] = useState('');
  const [deregisterDeadlineTime, setDeregisterDeadlineTime] = useState('');

  const Modal = ({ onClose, children, showCloseButton = true }) => ( // fungerer denne som den skal? 
    <StyledModal>
      {children}
      {showCloseButton && (
        <Button primary type="button" onClick={onClose} style={{ marginTop: '20px' }}>Lukk</Button>
      )}
    </StyledModal>
  );

  const handleResize = (e) => { // lets the description area expand when more text
    const textarea = e.target;
    textarea.style.height = 'inherit'; // resets height so scrollHeight can be re-calculated 
    textarea.style.height = `${textarea.scrollHeight}px`; // sets new height
  };  

  const handleImageChange = e => { // må få bilde til å legges ved på riktig måte ved innsending
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
        setFormData(prevFormData => ({
          ...prevFormData,
          image: reader.result 
        }));
    };

    if (file) {
        reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({ // her er det nå færre felter enn på original nettside. Det er fordi jeg
    // har fjernet noen felter som jeg tenker er unødvendige da de ikke brukes til arrangementer.
    author: user.user_id, 
    committee: '', 
    title: '',
    date: '', 
    register_startdate: '', 
    register_deadline: '',
    deregister_deadline: '',
    location: '',
    description: '',
    image: '',
    sluts: 0,
    allowed_grades: [],
    published: false,
    tentative: false,
    payment_information: '',
    price_member: 0,
    price_not_member: 0,
  });

  // const [timeData, setTimeData] = useState({ // også forsøk på å få tidsdata riktig
  //   eventDate: '',
  //   eventTime: '',
  //   registerStartDate: '', 
  //   registerStartTime: '',
  //   registerDeadlineDate: '',
  //   registerDeadlineTime: '',
  //   deregisterDeadlineDate: '',
  //   deregisterDeadlineTime: '',
  // });


  // Virker som den oppdaterer alle variabler et hakk for sent
  const handleChange = (e) => { // mangler logikk for hvilke klasser som skal med
    const { name, value } = e.target;

    // Dette under her er et forsøk på å oppdatere tidsdataen, funker ikke som de skal:(
    // Prøver å få til å oppdatere tidspunktene riktig. De må hentes fra feltene, settes til riktige variabler, kombineres riktig
    // deretter registrert til riktige variabler i formData
    const date = combineDateTime(eventDate, eventTime);
    const register_startdate = combineDateTime(registerStartDate, registerStartTime);
    const register_deadline = combineDateTime(registerDeadlineDate, registerDeadlineTime);
    const deregister_deadline = combineDateTime(deregisterDeadlineDate, deregisterDeadlineTime);
    setFormData({ ...formData, [date]: date });
    setFormData({ ...formData, [register_startdate]: register_startdate });
    setFormData({ ...formData, [register_deadline]: register_deadline });
    setFormData({ ...formData, [deregister_deadline]: deregister_deadline });

    // 
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const combineDateTime = (date, time) => { // funker denne som den skal?
    if (date && time) {
      return new Date(date + 'T' + time).toISOString();
    }
    return '';
  };
    
  const handleSubmit = async (e) => { // funker denne som den skal?
    e.preventDefault();
    if (!eventType || isSubmitting) {
      setShowModal(true);
      return;
    }
    setIsSubmitting(true);
    try {
      // const dataToSubmit = prepareTimeDataForSubmission();
      // await postRequest('arrangementer/api/sosial/', dataToSubmit);
      setIsSubmittedSuccessfully(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false); // Innsending ferdig, vellykket eller ei
    }
  };

  const [checkboxes, setCheckboxes] = useState({ // er denne nødvendig? De er definert som false lenger oppe
    published: false, // slette da definert lenger oppe?
    tentative: false, // slette da definert lenger oppe?
    first: false,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    finished: false
  }); // må få lagt allowed grades til riktig sted i formData

  const handleCheckboxChange = (e) => { // funker denne som den skal? Ganske sikke rpå at den aldri oppdaterer noe til true som den skal
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
    setEventType(e.target.name);
  };

  useEffect(() => {
    checkPermission("events.add_social", user, setCanAddSocial);
    fetchList("undergrupper/api/", setCommittees);
  }, [user]);

  return (
    <>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <p>Du må velge om arrangementet ditt skal være publisert eller tentativt!</p>
      </Modal>
    )}
    {isSubmittedSuccessfully && (
      <Modal onClose={() => setIsSubmittedSuccessfully(false)}>
        Arrangementet ditt er opprettet med suksess!
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
              <option value={null}>Velg din komité!</option>
              {committees.map((committee) => {
                return <option key={committee.id} value={committee.id}>{committee.title}</option>
              })}
            </StyledDropDown>
          </div>

          <P>Legg inn følgende datoer og klokkeslett:</P>
          <TimeContainer>
            <div>
              <P>Tidspunkt for arrangementet</P>
              <TimeBox>
                <input type="date" id="eventDate" name="eventDate" value={eventDate} onChange={setEventDate} required />
                <input type="time" id="eventTime" name="eventTime" value={eventTime} onChange={setEventTime} required />
              </TimeBox>
            </div>
            <div>
              <P>Påmeldingen åpner</P>
              <TimeBox>
                <input type="date" id="registerStartDate" name="registerStartDate" value={registerStartDate} onChange={setRegisterStartDate} required />
                <input type="time" id="registerStartTime" name="registerStartTime" value={registerStartTime} onChange={setRegisterStartTime} required />
              </TimeBox>
            </div>
            <div>
              <P>Påmeldingen stenger</P>
              <TimeBox>
                <input type="date" id="registerDeadlineDate" name="registerDeadlineDate" value={registerDeadlineDate} onChange={setRegisterDeadlineDate} required />
                <input type="time" id="registerDeadlineTime" name="registerDeadlineTime" value={registerDeadlineTime} onChange={setRegisterDeadlineTime} required />
              </TimeBox>
            </div>
            <div>
              <P>Avmeldingen stenger</P>
              <TimeBox>
                <input type="date" id="deregisterDeadlineDate" name="deregisterDeadlineDate" value={deregisterDeadlineDate} onChange={setDeregisterDeadlineDate} required />
                <input type="time" id="deregisterDeadlineTime" name="deregisterDeadlineTime" value={deregisterDeadlineTime} onChange={setDeregisterDeadlineTime} required />
              </TimeBox>
            </div>
          </TimeContainer>

          <br/>
          <br/>
          <br/>

          <FloatingLabelInputContainer>
            <StyledInput
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder=" " 
              required
            />
            <FloatingLabel htmlFor="location">Sted</FloatingLabel>
        </FloatingLabelInputContainer>

          <div>
            <FloatingLabelTextAreaContainer>
              <FloatingDynamicTextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) => {
                  handleChange(e); 
                  handleResize(e); 
                }}
                placeholder=" "
                required
              />
              <FloatingLabel htmlFor="description">Beskrivelse av arrangementet</FloatingLabel>
            </FloatingLabelTextAreaContainer>
          </div>

          <FloatingLabelInputContainer>
            <StyledInput
              type="text"
              id="payment_information"
              name="payment_information"
              value={formData.payment_information}
              onChange={handleChange}
              placeholder=" " 
              required
            />
            <FloatingLabel htmlFor="payment_information">Betalingsinformasjon</FloatingLabel>
          </FloatingLabelInputContainer>

          <br/>
          <br/>
          <br/>

          <ImgAndSlutsContainer>
            <ImgContainer>
            <H3>Last opp et bilde</H3>
            <div>
              <input 
                type="file" 
                id="image"
                name="image"
                onChange={handleImageChange} 
                required
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              {imagePreviewUrl && (
                  <img src={imagePreviewUrl} alt="Preview" style={{ width: '80%', height: 'auto' }} />
              )}
            </div>
            </ImgContainer>
            <SlutsContainer>
              <LabelNumber htmlFor="sluts">Antall plasser, sett til 0 hvis åpent arrangement</LabelNumber>
              <InputNumber
                type="number"
                id="sluts"
                name="sluts"
                value={formData.sluts}
                onChange={handleChange}
                placeholder="0" 
              />
            </SlutsContainer>
          </ImgAndSlutsContainer>

          <br/>
          <br/>
          <br/>
          
          <PriceContainer>
            <div>
              <LabelNumber htmlFor="price_member">Pris for medlemmer, sett til 0 hvis gratis</LabelNumber>
              <PriceBox>
              <InputNumber 
                type="number" 
                id="price_member" 
                name="price_member" 
                value={formData.price_member} 
                onChange={handleChange}  
                />
            </PriceBox>
            </div>
            <div>
              <LabelNumber htmlFor="price_not_member">Pris for ikke-medlemmer, sett til 0 hvis gratis</LabelNumber>
              <PriceBox>
              <InputNumber 
                type="number" 
                id="price_not_member" 
                name="price_not_member" 
                value={formData.price_not_member} 
                onChange={handleChange}  
                />
            </PriceBox>
            </div>
          </PriceContainer>
            

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
            <CheckBox>
              <ColoredCheckbox
                checked={checkboxes.finished}
                onChange={handleCheckboxChange}
                name="finished"
                color="primary"
              />
              <P>Ferdig</P>
            </CheckBox>
          </CheckboxContainer>

          <Button primary type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sender inn...' : 'Opprett arrangement!'}
          </Button>
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
  margin-bottom: 25px;
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

const FloatingLabelTextAreaContainer = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const FloatingDynamicTextArea = styled.textarea`
  width: 90%;
  height: 35px;
  padding: 7px 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  background: transparent;
  outline: none;
  resize: none;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: #000;
  }

  &:focus ~ label, &:not(:placeholder-shown) ~ label {
    top: -20px;
    font-size: 12px;
    color: #333;
  }
`;

const StyledInput = styled.input`
  width: 90%;
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

const ImgAndSlutsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: start; // Align items to the top of the container
  width: 100%; 
`;

const ImgContainer = styled.div`
  width: 50%; // Take up half of the parent container's width
  padding-right: 10px; // Optional: add padding for spacing between the two containers
  margin-top: -30px;
`;

const SlutsContainer = styled.div`
  width: 50%; // Take up half of the parent container's width
  padding-left: 10px; // Optional: add padding for spacing between the two containers
`;

const LabelNumber = styled.label`
  top: 0;
  bottom: 0; 
  left: 0;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  margin-bottom: 8px;
`;

const InputNumber = styled.input`
  width: 80%;
  border: 0;
  border-bottom: 1px solid #ccc;
  outline: 0;
  font-size: 16px;
  padding: 7px 0;
  background: transparent;
`;

const PriceContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-bottom: 40px;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
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