import { subscribeToNewsletter } from '@site/src/helpers/subscribe'
import clsx from 'clsx'
import { validate as validateEmail } from 'email-validator'
import React, { useState } from 'react'

import styles from './styles.module.css'

export default function Subscribe(): JSX.Element {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    if (!email) {
      setError('Email is required')
      return false
    }

    if (!validateEmail(email)) {
      setError('Email is invalid')
      return false
    }

    return true
  }

  const submitFormSubscription = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await subscribeToNewsletter(email)
      setIsSuccess(true)
    } catch (e) {
      setError(e.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={clsx('subscribe container', styles.subscribe)}>
      <div className={clsx('subscribe__head', styles.subscribeHead)}>
        <p
          className={clsx('subscribe__title', styles.subscribeTitle)}
          data-aos="fade-up"
        >
          Subscribe to our newsletter
        </p>
        <p
          className={clsx(
            'subscribe__description',
            styles.subscribeDescription
          )}
          data-aos="fade-up"
        >
          Stay up-to-date about new features and supported apps
        </p>
      </div>

      {isSuccess ? (
        <p className={clsx('subscribe__success', styles.subscribeSuccess)}>
          Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={(e) => submitFormSubscription(e)}
          className={clsx('subscribe__form', styles.subscribeForm)}
          data-aos="fade-up"
        >
          <input
            className={clsx('subscribe__input', styles.subscribeInput)}
            value={email}
            placeholder="Email"
            disabled={isSubmitting}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
          />
          <button
            type="submit"
            className={clsx(
              'subscribe__button heroButton',
              styles.subscribeButton
            )}
            disabled={isSubmitting || !!error}
          >
            Subscribe
          </button>
          {error && (
            <p className={clsx('subscribe__error', styles.subscribeError)}>
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  )
}
