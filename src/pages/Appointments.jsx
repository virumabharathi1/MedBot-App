import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const AppointmentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "John",
    middleName: "A.",
    lastName: "Doe",
    suffix: "Jr.",
    dob: "2010-06-15",
    gender: "Male",
    streetAddress: "123 Main St",
    zipCode: "75035",
    city: "Frisco",
    state: "TX",
    email: "johndoe@example.com",
    iDontHaveAnEmail: false,
    phoneNumber: "123-456-7890",
    phoneType: "Mobile",
    insuranceCompany: "Aetna",
    policyId: "A123456789",
    isInsuranceHolder: "Yes",
    howDidYouHear: "Internet Search",
    referringProvider: "Dr. Smith",
    reasonForAppointment: "Annual Check-up",
    preferredLocation: "Frisco Office",
    providerToSee: "",
    preferredDay: "Tuesday",
    preferredTime: "Morning",
  });

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const resp = await axios.get(`${apiUrl}api/providers`);
        setProviders(resp.data.providers);
        if (resp.data.providers.length > 0) {
          setFormData((prev) => ({
            ...prev,
            providerToSee: resp.data.providers[0].name,
          }));
        }
      } catch (err) {
        console.error("Failed to fetch providers:", err);
      }
    };

    fetchProviders();

    // Check URL for pre-filled data
    const params = new URLSearchParams(location.search);
    const firstName = params.get("name")?.split(" ")[0] || "";
    const lastName = params.get("name")?.split(" ")[1] || "";
    const email = params.get("email") || "";
    const phoneNumber = params.get("phoneNo") || "";

    setFormData((prev) => ({
      ...prev,
      firstName: firstName || prev.firstName,
      lastName: lastName || prev.lastName,
      email: email || prev.email,
      phoneNumber: phoneNumber || prev.phoneNumber,
    }));
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        `${apiUrl}api/appointments`,
        formData
      );
      console.log("Appointment stored:", resp.data);
      navigate("/thank-you", { state: { ...formData } });
    } catch (err) {
      console.error("Failed to store appointment:", err.response?.data || err.message);
      alert("Failed to submit appointment. Please try again.");
    }
  };

  const usStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  ];

  return (
    <div className="form-container">
      <div className="form-header">
        <p>
          Please fill out the details in the form below to submit a new appointment request for Pediatric Associates Of Frisco
        </p>
        <p className="disclaimer">
          DISCLAIMER: If you are experiencing a medical emergency, please call 9-1-1. This form is for appointment requests only.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Patient Contact Information */}
        <section className="form-section">
          <h3>Patient Contact Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>First name*</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Middle name</label>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last name*</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Suffix</label>
              <input type="text" name="suffix" value={formData.suffix} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date of birth*</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Gender*</label>
              <div className="radio-group">
                <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} required />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="form-group grid-full-width">
              <label>Street address*</label>
              <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Zip code*</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>City*</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>State*</label>
              <select name="state" value={formData.state} onChange={handleChange} required>
                {usStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="form-group grid-full-width">
              <label>Email*</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required={!formData.iDontHaveAnEmail} disabled={formData.iDontHaveAnEmail} />
              <div className="checkbox-group">
                <input type="checkbox" id="noEmail" name="iDontHaveAnEmail" checked={formData.iDontHaveAnEmail} onChange={handleChange} />
                <label htmlFor="noEmail">I don't have an email</label>
              </div>
            </div>
            <div className="form-group">
              <label>Phone number*</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone type*</label>
              <select name="phoneType" value={formData.phoneType} onChange={handleChange} required>
                <option value="">Select type</option>
                <option>Mobile</option>
                <option>Home</option>
                <option>Work</option>
              </select>
            </div>
          </div>
        </section>

        {/* Patient Insurance */}
        <section className="form-section">
          <h3>Patient Insurance</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Insurance company*</label>
              <select name="insuranceCompany" value={formData.insuranceCompany} onChange={handleChange} required>
                <option value="">Select insurance company</option>
                <option>Aetna</option>
                <option>Blue Cross Blue Shield</option>
                <option>Cigna</option>
                <option>UnitedHealthcare</option>
              </select>
            </div>
            <div className="form-group">
              <label>Policy ID number</label>
              <input type="text" name="policyId" value={formData.policyId} onChange={handleChange} />
            </div>
            <div className="form-group grid-full-width">
              <label>Is the patient the insurance holder?</label>
              <div className="radio-group">
                <input type="radio" id="isHolderYes" name="isInsuranceHolder" value="Yes" checked={formData.isInsuranceHolder === "Yes"} onChange={handleChange} />
                <label htmlFor="isHolderYes">Yes</label>
                <input type="radio" id="isHolderNo" name="isInsuranceHolder" value="No" checked={formData.isInsuranceHolder === "No"} onChange={handleChange} />
                <label htmlFor="isHolderNo">No</label>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Details */}
        <section className="form-section">
          <h3>Appointment Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>How did you hear about us?</label>
              <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
                <option value="">Select request source</option>
                <option>Internet Search</option>
                <option>Referral</option>
                <option>Social Media</option>
              </select>
            </div>
            <div className="form-group">
              <label>Referring provider name (if applicable)</label>
              <input type="text" name="referringProvider" value={formData.referringProvider} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Reason for appointment*</label>
              <select name="reasonForAppointment" value={formData.reasonForAppointment} onChange={handleChange} required>
                <option value="">Select reason for appointment</option>
                <option>Annual Check-up</option>
                <option>Sick Visit</option>
                <option>Consultation</option>
              </select>
            </div>
          </div>
        </section>

        {/* Appointment Preferences */}
        <section className="form-section">
          <h3>Appointment Preferences</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Preferred location*</label>
              <select name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} required>
                <option>Frisco Office</option>
              </select>
            </div>
            <div className="form-group">
              <label>Provider to see*</label>
              <select name="providerToSee" value={formData.providerToSee} onChange={handleChange} required>
                <option value="">Select a provider</option>
                {providers.map((provider) => (
                  <option key={provider.username} value={provider.name}>{provider.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Preferred day of week</label>
              <select name="preferredDay" value={formData.preferredDay} onChange={handleChange}>
                <option value="">Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
              </select>
            </div>
            <div className="form-group">
              <label>Preferred time of day</label>
              <select name="preferredTime" value={formData.preferredTime} onChange={handleChange}>
                <option value="">Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>
        </section>

        <button type="submit" className="submit-button">Submit request</button>
      </form>
    </div>
  );
};

export default AppointmentForm;