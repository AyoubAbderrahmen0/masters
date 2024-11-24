import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { addSolutionq } from '../redux/Actions/Solutions';
import { useDispatch } from 'react-redux';

function FastCons() {
  // States for each individual field
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  
  const [depressionScore, setDepressionScore] = useState('');
  const [anxietyScore, setAnxietyScore] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [physicalActivity, setPhysicalActivity] = useState('');
  const [dietQuality, setDietQuality] = useState('');

  const [socialSupport, setSocialSupport] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [substanceUse, setSubstanceUse] = useState('');
  const [counselingServiceUse, setCounselingServiceUse] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');

  const [chronicIllness, setChronicIllness] = useState('');
  const [financialStress, setFinancialStress] = useState('');
  const [extracurricularInvolvement, setExtracurricularInvolvement] = useState('');
  const [semesterCreditLoad, setSemesterCreditLoad] = useState('');
  const [residenceType, setResidenceType] = useState('');

  const [currentStep, setCurrentStep] = useState(0); // Track which group of fields to show
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Collect form data
    const formData = {
      age,
      course,
      gender,
      cgpa,
      stressLevel,
      depressionScore,
      anxietyScore,
      sleepQuality,
      physicalActivity,
      dietQuality,
      socialSupport,
      relationshipStatus,
      substanceUse,
      counselingServiceUse,
      familyHistory,
      chronicIllness,
      financialStress,
      extracurricularInvolvement,
      semesterCreditLoad,
      residenceType,
    };
  
    // Dispatch the action to store data
    dispatch(addSolutionq(formData));
  
    // Optionally log the form data for debugging
    console.log(formData);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Card style={{ width: '100%', maxWidth: '36rem', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <Card.Title>Form Input</Card.Title>
          <Form onSubmit={handleSubmit}>
            {/* First group of 5 fields */}
            {currentStep === 0 && (
              <>
                <div>
                  <Form.Label htmlFor="age">Age</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-age">Age</InputGroup.Text>
                    <Form.Control
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="course">Course</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-course">Course</InputGroup.Text>
                    <Form.Control
                      id="course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="gender">Gender</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-gender">Gender</InputGroup.Text>
                    <Form.Control
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="cgpa">CGPA</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-cgpa">CGPA</InputGroup.Text>
                    <Form.Control
                      id="cgpa"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="stressLevel">Stress Level</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-stressLevel">Stress Level</InputGroup.Text>
                    <Form.Control
                      id="stressLevel"
                      value={stressLevel}
                      onChange={(e) => setStressLevel(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </>
            )}

            {/* Second group of 5 fields */}
            {currentStep === 1 && (
              <>
                <div>
                  <Form.Label htmlFor="depressionScore">Depression Score</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-depressionScore">Depression Score</InputGroup.Text>
                    <Form.Control
                      id="depressionScore"
                      value={depressionScore}
                      onChange={(e) => setDepressionScore(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="anxietyScore">Anxiety Score</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-anxietyScore">Anxiety Score</InputGroup.Text>
                    <Form.Control
                      id="anxietyScore"
                      value={anxietyScore}
                      onChange={(e) => setAnxietyScore(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="sleepQuality">Sleep Quality</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-sleepQuality">Sleep Quality</InputGroup.Text>
                    <Form.Control
                      id="sleepQuality"
                      value={sleepQuality}
                      onChange={(e) => setSleepQuality(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="physicalActivity">Physical Activity</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-physicalActivity">Physical Activity</InputGroup.Text>
                    <Form.Control
                      id="physicalActivity"
                      value={physicalActivity}
                      onChange={(e) => setPhysicalActivity(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="dietQuality">Diet Quality</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-dietQuality">Diet Quality</InputGroup.Text>
                    <Form.Control
                      id="dietQuality"
                      value={dietQuality}
                      onChange={(e) => setDietQuality(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </>
            )}

            {/* Third group of 5 fields */}
            {currentStep === 2 && (
              <>
                <div>
                  <Form.Label htmlFor="socialSupport">Social Support</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-socialSupport">Social Support</InputGroup.Text>
                    <Form.Control
                      id="socialSupport"
                      value={socialSupport}
                      onChange={(e) => setSocialSupport(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="relationshipStatus">Relationship Status</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-relationshipStatus">Relationship Status</InputGroup.Text>
                    <Form.Control
                      id="relationshipStatus"
                      value={relationshipStatus}
                      onChange={(e) => setRelationshipStatus(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="substanceUse">Substance Use</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-substanceUse">Substance Use</InputGroup.Text>
                    <Form.Control
                      id="substanceUse"
                      value={substanceUse}
                      onChange={(e) => setSubstanceUse(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="counselingServiceUse">Counseling Service Use</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-counselingServiceUse">Counseling Service Use</InputGroup.Text>
                    <Form.Control
                      id="counselingServiceUse"
                      value={counselingServiceUse}
                      onChange={(e) => setCounselingServiceUse(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="familyHistory">Family History</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-familyHistory">Family History</InputGroup.Text>
                    <Form.Control
                      id="familyHistory"
                      value={familyHistory}
                      onChange={(e) => setFamilyHistory(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </>
            )}

            {/* Fourth group of 5 fields */}
            {currentStep === 3 && (
              <>
                <div>
                  <Form.Label htmlFor="chronicIllness">Chronic Illness</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-chronicIllness">Chronic Illness</InputGroup.Text>
                    <Form.Control
                      id="chronicIllness"
                      value={chronicIllness}
                      onChange={(e) => setChronicIllness(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="financialStress">Financial Stress</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-financialStress">Financial Stress</InputGroup.Text>
                    <Form.Control
                      id="financialStress"
                      value={financialStress}
                      onChange={(e) => setFinancialStress(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="extracurricularInvolvement">Extracurricular Involvement</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-extracurricularInvolvement">Extracurricular Involvement</InputGroup.Text>
                    <Form.Control
                      id="extracurricularInvolvement"
                      value={extracurricularInvolvement}
                      onChange={(e) => setExtracurricularInvolvement(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="semesterCreditLoad">Semester Credit Load</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-semesterCreditLoad">Semester Credit Load</InputGroup.Text>
                    <Form.Control
                      id="semesterCreditLoad"
                      value={semesterCreditLoad}
                      onChange={(e) => setSemesterCreditLoad(e.target.value)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <Form.Label htmlFor="residenceType">Residence Type</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-residenceType">Residence Type</InputGroup.Text>
                    <Form.Control
                      id="residenceType"
                      value={residenceType}
                      onChange={(e) => setResidenceType(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </>
            )}

            {/* Step Navigation Buttons */}
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
              <Button variant="primary" onClick={handleNext} disabled={currentStep === 3}>Next</Button>
            </div>

            <Button variant="success" type="submit" className="mt-3" disabled={currentStep !== 3}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FastCons;
