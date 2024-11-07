import React, { useState } from 'react';
// drugId, drugName, drugBrand, drugIngredients, manufacturerName, manufacturingDate, expiryDate 
const CreateDrug = () => {
  // State to hold form inputs
  const [drugId, setDrugId] = useState('');
  const [drugName, setDrugName] = useState('');
  const [drugBrand, setDrugBrand] = useState('');
  const [drugIngredients,setDrugIngredients] = useState(''); // Stringified composition
  const [manufacturerName, setManufacturerName] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/createdrug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            drugId,
            drugName,
            drugBrand,
            drugIngredients,
            manufacturerName,
            manufacturingDate,
            expiryDate,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Drug created successfully!');
        console.log(data);
      } else {
        setMessage('Failed to create drug. Please check the details.');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setMessage('An error occurred while creating the drug.');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Create Drug</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Drug ID:</label>
          <input type="text" value={drugId} onChange={(e) => setDrugId(e.target.value)} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={drugName} onChange={(e) => setDrugName(e.target.value)} required />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" value={drugBrand} onChange={(e) => setDrugBrand(e.target.value)} required />
        </div>
        <div>
          <label>Manufacturer:</label>
          <input type="text" value={manufacturerName} onChange={(e) => setManufacturerName(e.target.value)} required />
        </div>
        <div>
          <label>Manufacturing Date:</label>
          <input type="date" value={manufacturingDate} onChange={(e) => setManufacturingDate(e.target.value)} required />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
        </div>
        
        <div>
          <label>Composition (as JSON string):</label>
          <input
            type="text"
            value={drugIngredients}
            onChange={(e) => setDrugIngredients(e.target.value)}
            placeholder='e.g., ["Acetylsalicylic Acid", "Starch", "Hypromellose"]'
            required
          />
        </div>
        
        <button type="submit">Create Drug</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateDrug;
