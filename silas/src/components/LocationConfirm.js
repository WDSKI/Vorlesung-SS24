"use client";
import React from 'react';

export default function LocationConfirm({ label, onClick }) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}