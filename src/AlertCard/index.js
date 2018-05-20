import React from 'react'

export default function AlertCard({ children, className }) {
  return <div className={`card card--alert ${className}`}>{children}</div>
}
