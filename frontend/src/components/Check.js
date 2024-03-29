import { useState } from 'react';
import axios from 'axios';

function Check() {
  const [formData, setFormData] = useState({
    student_id: '',
    degree_program: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const { student_id, degree_program } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/check-status", { student_id });
      const message = response.data;
      setResponseMessage(message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>Check your degree status here:</h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="student_id"
              name="student_id"
              value={student_id}
              placeholder='Student ID (19X-1234):'
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="degree_program"
              name="degree_program"
              value={degree_program}
              placeholder='Degree Program:'
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>

      {responseMessage && (
        <section className='response'>
          <h2>{responseMessage}</h2>
        </section>
      )}
    </>
  );
}

export default Check;
