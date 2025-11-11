import { useState } from 'react';
import './App.css';

function App() 
{
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });
const [submittedData, setSubmittedData] = useState(null);

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmittedData({ ...formData });
};

return (
  <main className="app-shell">
    <header>
      <h1>Lab Week 10 &mdash; Data Entry Form</h1>
      <p className="subtitle">
        Enter your contact details below and submit to review the information.
      </p>
    </header>

    <section className="form-section">
       <form className="entry-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@example.com"
          required
        />
        <br />
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Scarlet Johansen"
          required
        />
        <br />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="123 Hollywood Blvd"
          required
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          placeholder="Los Angeles"
          required
        />
        <br />
        <label htmlFor="province">Province</label>
        <input
          id="province"
          name="province"
          type="text"
          value={formData.province}
          onChange={handleChange}
          placeholder="Ontario"
          required
        />
        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="M1E 4X9"
          required
        />
        <br />
        <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>

      {submittedData && (
        <section className="summary" aria-live="polite">
          <h2>Submitted Information</h2>
          <dl>
            <div>
              <dt>Email:</dt>
              <dd>{submittedData.email}</dd>
            </div>
            <div>

              <dt>Full Name:</dt>
              <dd>{submittedData.fullName}</dd>
            </div>
            <div>
              <dt>Address:</dt>
              <dd>{submittedData.address}</dd>
            </div>
            <div>
              <dt>City:</dt>
              <dd>{submittedData.city}</dd>
            </div>
            <div>
              <dt>Province:</dt>
              <dd>{submittedData.province}</dd>
            </div>
            <div>
              <dt>Postal Code:</dt>
              <dd>{submittedData.postalCode}</dd>
            </div>
          </dl>
        </section>
      )}
      </main>  
    );
  };

export default App;
