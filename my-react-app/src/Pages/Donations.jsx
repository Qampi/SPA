import React, { useState } from 'react';
import './Donations.css'; // Import the CSS file

function Donation() {
  const [amount, setAmount] = useState(0);
  const [donorName, setDonorName] = useState('');
  const [donationMessage, setDonationMessage] = useState('');

  const handleDonation = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          donorName,
          donationMessage,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Donation">
      <h2>Support Our Cause</h2>
      <form onSubmit={handleDonation}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.valueAsNumber)}
          />
        </label>
        <br />
        <label>
          Donor Name:
          <input
            type="text"
            value={donorName}
            onChange={(event) => setDonorName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Donation Message:
          <textarea
            value={donationMessage}
            onChange={(event) => setDonationMessage(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}
export default Donation;
