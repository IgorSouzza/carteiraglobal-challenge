import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useAccumulatedvalue, useFinancialProjection } from '../../context'

import * as S from './styles'

import TextField from '../TextField'

export default function BasicDataForm ({
  getAccumulatedValue,
  getFinancialProjection
}) {
  const [initialInvestment, setInitialInvestment] = useState()
  const [installmentValue, setInstallmentValue] = useState()
  const [time, setTime] = useState()
  const [interestRate, setInterestRate] = useState()
  const { handleSetAccumulatedValue } = useAccumulatedvalue()
  const { handleSetFinancialProjection } = useFinancialProjection()

  async function handleSubmit () {
    if (
      typeof initialInvestment === 'undefined' ||
      typeof installmentValue === 'undefined' ||
      typeof time === 'undefined' ||
      typeof interestRate === 'undefined'
    ) {
      return
    }

    try {
      const accumulatedValueRes = await getAccumulatedValue.load({
        initialInvestment,
        installmentValue,
        time,
        interestRate
      })
      const financialProjectionRes = await getFinancialProjection.load({
        initialInvestment,
        installmentValue,
        time,
        interestRate
      })

      handleSetAccumulatedValue(accumulatedValueRes.getAccumulatedValue)
      handleSetFinancialProjection(financialProjectionRes.getFinancialProjection)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [initialInvestment, installmentValue, time, interestRate])

  return (
    <form className={S.wrapper}>
      <TextField
        label="Investimento Inicial:"
        labelFor="initialInvestment"
        placeholder="R$ 500,00"
        maskType="currency"
        message="Quanto você já economizou até hoje?"
        onInput={(e) => setInitialInvestment(e)}
        debounceDelay={600}
      />
      <TextField
        label="Valor da Parcela:"
        labelFor="installmentValue"
        placeholder="R$ 100,00"
        maskType="currency"
        message="Quanto você pretende poupar por mês?"
        onInput={(e) => setInstallmentValue(e)}
        debounceDelay={600}
      />
      <TextField
        label="Período (em meses):"
        labelFor="time"
        placeholder="12"
        maskType="number"
        message="Durante quantos meses você pretende poupar?"
        onInput={(e) => setTime(e)}
        debounceDelay={600}
      />
      <TextField
        label="Taxa de Juros (em % a.a.):"
        labelFor="interestRate"
        placeholder="8%"
        maskType="percentage"
        message="Qual a taxa de juros à qual o seu dinheiro vai render por ano?"
        onInput={(e) => setInterestRate(e)}
        debounceDelay={600}
      />
    </form>
  )
}

BasicDataForm.propTypes = {
  getAccumulatedValue: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  getFinancialProjection: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ])
}
