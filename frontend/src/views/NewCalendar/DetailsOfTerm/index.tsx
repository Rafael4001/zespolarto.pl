import styled from 'styled-components'
import React, { FC } from 'react'
import { SCREEN } from '../../../constants'
import moment from 'moment'
import { IDay } from '../../../types/types'

interface IDetailsOfTerm {
  className: string,
  currentDay: IDay
}

const DetailsOfTerm: FC<IDetailsOfTerm> = ({ className, currentDay }) => {
  const { place = 'brak', hotel = 'brak', blessingTime, weddingHour, day, information } = currentDay

  const tableDate = [
    {
      title: 'data',
      value: moment(day).format('DD-MM-YYYY')
    },
    {
      title: 'miejscowość',
      value: place
    },
    {
      title: 'hotel',
      value: hotel
    },
    {
      title: 'błogosławieństwo',
      value: blessingTime
    },
    {
      title: 'godzina ślubu',
      value: weddingHour
    },
    {
      title: 'informacje dodatkowe',
      value: information
    }
  ]

  return (
    <div className={className}>
      <table>
        <tbody>
        {
          tableDate.filter(item => item.value).map(item => (
            <tr key={item.title}>
              <th>{item.title}:</th>
              <td>{item.value || 'Brak informacji'}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}
const StyledDetailsOfTerm = styled(DetailsOfTerm)`
  padding: 1rem;
  @media (max-width: ${SCREEN.M}) {
    padding: 0.5rem;
    font-size: 0.8rem;
  }


  th {
    text-align: left;
    padding-right: 1rem;
  }

  td {
    text-align: left;
    padding-right: 1rem;
  }

`

export default StyledDetailsOfTerm
