import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Formik } from 'formik';
import axios from 'axios';

import { validationSchemaYup } from './AddTermValidation'

import Error from '../../components/Error'
import { API_URL } from "../../config";
import { STATUS_SELECT } from "../../constants";

// instructions
//https://www.youtube.com/watch?v=TxEVnaISj1w

const AddTermForm = ({classes}) => {
  const [data, setData] = useState([]);

  const getReservations = () => (
    axios.get(API_URL)
      .then(result => {
        setData(result.data)
      })
  )

  const createReservation = async (values) => {
    const {
      weddingDate,
      weddingAddress,
      weddingHotelName,
      weddingHotelAddress,
      weddingStatus,
      weddingAdditionalDetails,
    } = values

    await axios.post(API_URL,
      {
        weddingDate,
        weddingAddress,
        weddingHotelName,
        weddingHotelAddress,
        weddingStatus,
        weddingAdditionalDetails,
      }
    );
    getReservations();
  }

  useEffect(() => {
    getReservations()
  }, []);

  // console.log('data', data)

  const onSubmit = (values) => {
    createReservation(values)
  }

  const initialValues = {
    weddingDate: "",
    weddingAddress: "",
    weddingHotelName: "",
    weddingHotelAddress: "",
    weddingStatus: "",
    weddingAdditionalDetails: "",
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaYup}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          // setSubmitting(true);
          // resetForm();
          onSubmit(values)
          resetForm()

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
              <label htmlFor="name">Data wesela</label>
              <input
                type="date"
                name="weddingDate"
                id="weddingDate"
                placeholder="wpisz datę wesela"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weddingDate}
                className={touched.weddingDate && errors.weddingDate && classes.errorText}
              />
              <Error touched={touched.weddingDate} message={errors.weddingDate}/>
            </div>

            <div>
              <label htmlFor="name">Miejscowość</label>
              <input
                type="text"
                name="weddingAddress"
                id="weddingAddress"
                placeholder="miejscowość"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weddingAddress}
                className={touched.weddingAddress && errors.weddingAddress && classes.errorText}
              />
              <Error touched={touched.weddingAddress} message={errors.weddingAddress}/>
            </div>

            <div>
              <label htmlFor="name">Dom weselny</label>
              <input
                type="text"
                name="weddingHotelName"
                id="weddingHotelName"
                placeholder="Nazwa domu weselnego"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weddingHotelName}
                className={touched.weddingHotelName && errors.weddingHotelName && classes.errorText}
              />
              <Error touched={touched.weddingHotelName} message={errors.weddingHotelName}/>
            </div>

            <div>
              <label htmlFor="name">Adres domu weselnego</label>
              <input
                type="text"
                name="weddingHotelAddress"
                id="weddingHotelAddress"
                placeholder="adres domu weselnego"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weddingHotelAddress}
                className={touched.weddingHotelAddress && errors.weddingHotelAddress && classes.errorText}
              />
              <Error touched={touched.weddingHotelAddress} message={errors.weddingHotelAddress}/>
            </div>

            <div>
              <label htmlFor="name">Status terminu</label>
              <select
                id="weddingStatus"
                name="weddingStatus"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weddingStatus}
                className={touched.weddingStatus && errors.weddingStatus && classes.errorText}
              >
                {STATUS_SELECT.map(status => (
                  <option key={status.name} value={status.value}>{status.name}</option>
                ))}
              </select>
              <Error touched={touched.weddingStatus} message={errors.weddingStatus}/>
            </div>

            <div>
              <label htmlFor="name">Szczegóły dodatkowe</label>
              <input
                type="text"
                name="weddingAdditionalDetails"
                id="weddingAdditionalDetails"
                placeholder="adres domu weselnego"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weddingAdditionalDetails}
                className={touched.weddingAdditionalDetails && errors.weddingAdditionalDetails && classes.errorText}
              />
              <Error touched={touched.weddingAdditionalDetails} message={errors.weddingAdditionalDetails}/>
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


      -----------------------------------------
      {data.map(item => (
        <div key={item._id}>{item.title}</div>
      ))}


      {/*<button*/}
      {/*  onClick={getReservations}*/}
      {/*>pobierz*/}
      {/*</button>*/}

    </>
  )
}

AddTermForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

AddTermForm.displayName = 'AddTermForm';

export default AddTermForm;
