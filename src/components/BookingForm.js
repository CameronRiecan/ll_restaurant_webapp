// BookingForm.js

import React, { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);

    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </div>

                    {/* time selection */}
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  );
}

export default BookingForm;