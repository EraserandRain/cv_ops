'use client'

import React from "react"
import Bio from "./Bio"
import Education from "./Education"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function page() {
  return (
    <article>
      <h1 id="person">姜盛乾个人简历</h1>
      <button id="btn">导出PDF</button>
      <hr />
      <Bio />
      <Education />
    </article>
  )
};
