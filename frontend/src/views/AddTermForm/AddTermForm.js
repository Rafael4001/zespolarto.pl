import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


import Error from '../../components/Error'

// instructions
//https://www.youtube.com/watch?v=TxEVnaISj1w

const validationSchemaYup = Yup.object().shape({
  name: Yup.string()
    .min(2, "must have a character")
    .max(255, "Must be shorterr than 255")
    .required("Must enter a name"),
  email: Yup.string()
    .email("must be a valid email address")
    .max(255, "Must be shorterr than 255")
    .required("Must enter a name"),
})


const AddTermForm = ({classes}) => {
  const [data, setData] = useState([]);

  const getReservations = () => (
    axios.get(
      // 'https://cors-anywhere.herokuapp.com/http://zespolarto.pl/api/reservations',
      'http://zespolarto.pl/api/reservations',
      // 'https://cors-anywhere.herokuapp.com/http://localhost:5000/api/reservations',
      // 'http://localhost:5000/api/reservations',
    )
      .then(result => {
        setData(result.data)
      })
  )

  const createReservation = async (title, city,) => {
    await axios.post(
      'https://cors-anywhere.herokuapp.com/http://zespolarto.pl/api/reservations',
      // 'https://cors-anywhere.herokuapp.com/http://localhost:5000/api/reservations',
      // 'http://localhost:5000/api/reservations',
      {
        title,
        city,
      }
    );
    getReservations();
  }

  useEffect(() => {
    getReservations()
  }, []);

  console.log(data)

  const onSubmit = () => {
    createReservation('pierwszy tytul', 'Krasnobród')
  }

  return (
    <>
      {data.map(item => (
        <div key={item._id}>{item.title}</div>
      ))}
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={validationSchemaYup}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          console.log(values)
          // setSubmitting(true);
          // resetForm();
          onSubmit()

        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
          <form onSubmit={handleSubmit}>
            {/*{JSON.stringify(values)}*/}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="wpisz imie"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name && classes.errorText}
              />
              <Error touched={touched.name} message={errors.name}/>
            </div>

            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="wpisz email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email && classes.errorText}
              />
              <Error touched={touched.email} message={errors.email}/>
            </div>

            <div>
              <button
                type={"submit"}
                disabled={isSubmitting}
              >Wyslij
              </button>
            </div>
          </form>
        )}
      </Formik>
      <button
        onClick={getReservations}
      >pobierz
      </button>
    </>
  )
}

AddTermForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

AddTermForm.displayName = 'AddTermForm';

export default AddTermForm;
