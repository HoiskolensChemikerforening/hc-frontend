import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col, PageContainer } from "../../components/Layout";
import { H1, H2, H3, P, Title, TitleContainer} from "../../components/Text";
import { Link } from "react-router-dom";
import { fetchList, checkPermission, postRequest } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
// import { TextField, ImageUpload, DropDown, TextArea } from "../../components/Form";
import { Checkbox, Dialog, DialogContent, DialogActions, Button as MuiButton } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import dayjs from "dayjs";
import "dayjs/locale/nb"; // Load Norwegian locale

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
  const [eventDate, setEventDate] = useState(dayjs());
  const [eventTime, setEventTime] = useState(dayjs());
  const [registerStartDate, setRegisterStartDate] = useState(dayjs());
  const [registerStartTime, setRegisterStartTime] = useState(dayjs());
  const [registerDeadlineDate, setRegisterDeadlineDate] = useState(dayjs());
  const [registerDeadlineTime, setRegisterDeadlineTime] = useState(dayjs());
  const [deregisterDeadlineDate, setDeregisterDeadlineDate] = useState(dayjs());
  const [deregisterDeadlineTime, setDeregisterDeadlineTime] = useState(dayjs());


const Modal = ({ onClose, children, showCloseButton = true }) => (
  <Dialog
    open
    onClose={onClose}
    aria-labelledby="modal-title"
    keepMounted
    disableEnforceFocus
    disableAutoFocus
    disableRestoreFocus
  >
    <DialogContent>{children}</DialogContent>
    {showCloseButton && (
      <DialogActions>
        <MuiButton onClick={onClose} autoFocus>
          Lukk
        </MuiButton>
      </DialogActions>
    )}
  </Dialog>
);

  const handleResize = (e) => { // lets the description area expand when more text
    const textarea = e.currentTarget;
    textarea.style.height = 'inherit'; // resets height so scrollHeight can be re-calculated 
    textarea.style.height = `${textarea.scrollHeight}px`; // sets new height
  };  

const handleImageChange = (e) => {
  const input = e.currentTarget;
  const file = input.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => setImagePreviewUrl(reader.result);
  reader.readAsDataURL(file);

  setFormData(prev => ({ ...prev, image: file }));
};

  const [formData, setFormData] = useState({ // her er det nå færre felter enn på original nettside. Det er fordi jeg
    // har fjernet noen felter som jeg tenker er unødvendige da de ikke brukes til arrangementer.
    author: user.user_id,
    committee: 0, 
    title: '',
    date: '2025-10-10T18:00:00+02:00', 
    register_startdate: '2025-10-09T19:40:00+02:00', 
    register_deadline: '2025-10-10T18:00:00+02:00',
    deregister_deadline: '2025-10-10T18:00:00+02:00',
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

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const combineDateTime = (date, time) => {
    return date
        .set("hour", time.hour()) // Set hours from time
        .set("minute", time.minute()) // Set minutes from time
        .set("second", 0) // Always reset seconds
        .toISOString(); // Convert to ISO format
};
    
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!eventType || isSubmitting) {
    setShowModal(true);
    return;
  }
  setIsSubmitting(true);
  try {
    const finalEventDate       = combineDateTime(eventDate, eventTime);
    const finalRegisterStart   = combineDateTime(registerStartDate, registerStartTime);
    const finalRegisterDl      = combineDateTime(registerDeadlineDate, registerDeadlineTime);
    const finalDeregisterDl    = combineDateTime(deregisterDeadlineDate, deregisterDeadlineTime);

    const fd = new FormData();
    fd.append("author",              String(formData.author));
    fd.append("committee",           String(formData.committee));
    fd.append("title",               formData.title);
    fd.append("date",                finalEventDate);
    fd.append("register_startdate",  finalRegisterStart);
    fd.append("register_deadline",   finalRegisterDl);
    fd.append("deregister_deadline", finalDeregisterDl);
    fd.append("location",            formData.location);
    fd.append("description",         formData.description);
    fd.append("published",           String(formData.published));
    fd.append("tentative",           String(formData.tentative));
    fd.append("payment_information", formData.payment_information);
    fd.append("price_member",        String(formData.price_member ?? 0));
    fd.append("price_not_member",    String(formData.price_not_member ?? 0));
    fd.append("sluts",               String(formData.sluts ?? 0)); // evt. endre "slots" til riktig backend-felt
    formData.allowed_grades.forEach((g) => {
      // Prøv uten [] først:
      fd.append("allowed_grades", String(g));

      // Hvis backend krever bracket-syntaks, bytt til:
      // fd.append("allowed_grades[]", String(g));
    });

    if (formData.image instanceof File) {
      fd.append("image", formData.image, formData.image.name);
    }

    await postRequest("arrangementer/api/sosial/opprett/", fd);
    setIsSubmittedSuccessfully(true);
  } catch (err) {
    // her kan du vise feilmelding i UI basert på err.response?.data
  } finally {
    setIsSubmitting(false);
  }
};

  // Publisert/Tentativ (utelukkende)
  const handleExclusiveCheckboxChange = (field, checked) => {
    setEventType(checked ? field : null);
    setFormData(prev => ({
      ...prev,
      published: field === "published" ? checked : false,
      tentative: field === "tentative" ? checked : false,
    }));
  };


  // Klassetrinn (flervalg)
  const handleAllowedGradeChange = (grade, checked) => {
    setFormData(prev => {
      const next = checked
        ? [...prev.allowed_grades, grade]
        : prev.allowed_grades.filter(g => g !== grade);
      return { ...prev, allowed_grades: next.sort((a,b) => a - b) };
    });
  };

const handleCommitteeChange = ({ target: { value } }) => {
  setFormData((prev) => ({ ...prev, committee: parseInt(value, 10) }));
};

  // const updateAuthor = () => { må ikke sende all info? Fungerer ikke enda, men kan muligens slettes helt?
  //   if (user) {
  //     let userUrl = 'http://localhost:8000/api/profil/';
  //     userUrl += `${user.user_id}`;
  //     fetchList(userUrl, setUsertest);
  //     console.log("User id er ", user.user_id);
  //     try {
  //       // Update formData with the author information
  //       setFormData((prevFormData) => ({...prevFormData,
  //         author: {
  //           username: user.username,
  //           email: user.email,
  //           first_name: user.first_name,
  //           last_name: user.last_name,
  //           full_name: user.full_name
  //         }
  //       }));
  //     } catch (error) {
  //       console.error('Error with author information:', error);
  //     }
  //   }
  // };
  
  useEffect(() => {
    checkPermission("events.add_social", user, setCanAddSocial);
    fetchList("undergrupper/api/", setCommittees);
    //updateAuthor(); // må kun sende user_id? så denne koden kan muligens slettes
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
          <Checkbox
            checked={eventType === "published"}
            onChange={(_, checked) => handleExclusiveCheckboxChange("published", checked)}
            color="primary"
            disableRipple
            style={{ color: '#FFcb26' }}
          />
          <P>Publisert</P>
        </CheckBox>
        <CheckBox>
          <Checkbox
            checked={eventType === "tentative"}
            onChange={(_, checked) => handleExclusiveCheckboxChange("tentative", checked)}
            color="primary"
            disableRipple
            style={{ color: '#FFcb26' }}
          />
          <P>Tentativt</P>
        </CheckBox>
      </CheckboxContainer>

          <div>
            <P>Hvilken komité arrangerer?</P>
            <StyledDropDown
              id="committee"
              name="committee"
              onChange={handleCommitteeChange}
              required
            >
              <option value={null}>Velg din komité!</option>
              {committees.map((committee) => {
                return <option key={committee.id} value={committee.id}>{committee.title}</option>
              })}
            </StyledDropDown>
          </div>

          <P>Legg inn følgende datoer og klokkeslett:</P>
          <MuiPickersUtilsProvider utils={DayjsUtils} locale="nb">
          <TimeContainer>
            <div>
              <TimeBox>
              <KeyboardDatePicker
                label="Dato for arrangementet"
                format="DD.MM.YYYY"
                value={eventDate}
                onChange={(d) => setEventDate(d)}
                inputVariant="outlined"
              />
              <KeyboardTimePicker
                label="Tidspunkt for arrangementet"
                value={eventTime}
                onChange={(t) => setEventTime(t)}
                inputVariant="outlined"
              />
              </TimeBox>
            </div>
            <div>
              <TimeBox>
              <KeyboardDatePicker
                label="Påmelding åpner"
                format="DD.MM.YYYY"
                value={registerStartDate}
                onChange={(d) => setRegisterStartDate(d)}
                inputVariant="outlined"
              />
              <KeyboardTimePicker
                label="Påmelding åpner (tid)"
                value={registerStartTime}
                onChange={(t) => setRegisterStartTime(t)}
                inputVariant="outlined"
              />
              </TimeBox>
            </div>
            <div>
              <TimeBox>
              <KeyboardDatePicker
                label="Påmelding stenger"
                format="DD.MM.YYYY"
                value={registerDeadlineDate}
                onChange={(d) => setRegisterDeadlineDate(d)}
                inputVariant="outlined"
              />
              <KeyboardTimePicker
                label="Påmelding stenger (tid)"
                value={registerDeadlineTime}
                onChange={(t) => setRegisterDeadlineTime(t)}
                inputVariant="outlined"
              />
              </TimeBox>
            </div>
            <div>
              <TimeBox>
              <KeyboardDatePicker
                label="Avmelding stenger"
                format="DD.MM.YYYY"
                value={deregisterDeadlineDate}
                onChange={(d) => setDeregisterDeadlineDate(d)}
                inputVariant="outlined"
              />
              <KeyboardTimePicker
                label="Avmelding stenger (tid)"
                value={deregisterDeadlineTime}
                onChange={(t) => setDeregisterDeadlineTime(t)}
                inputVariant="outlined"
              />
              </TimeBox>
            </div>
          </TimeContainer>
          </MuiPickersUtilsProvider>

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
              <Checkbox
                checked={formData.allowed_grades.includes(1)}
                onChange={(_, checked) => handleAllowedGradeChange(1, checked)}
                color="primary"
                style={{ color: '#FFcb26' }}
              />
              <P>Førsteklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(2)}
                onChange={(_, checked) => handleAllowedGradeChange(2, checked)}
                color="primary"
                style={{ color: '#FFcb26' }}
              />
              <P>Andreklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(3)}
                onChange={(_, checked) => handleAllowedGradeChange(3, checked)}
                color="primary"
                style={{ color: '#FFcb26' }}
              />
              <P>Tredjeklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(4)}
                onChange={(_, checked) => handleAllowedGradeChange(4, checked)}
                color="primary"
                style={{ color: '#FFcb26' }}
              />
              <P>Fjerdeklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(5)}
                onChange={(_, checked) => handleAllowedGradeChange(5, checked)}
                color="primary"
                style={{ color: '#FFcb26' }}
              />
              <P>Femteklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(6)}
                onChange={(_, checked) => handleAllowedGradeChange(6, checked)}
                color="primary"
                style={{ color: '#FFcb26' }}
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center; 
  margin: 20px 0; 
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 10px; 
  gap: 12px;
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