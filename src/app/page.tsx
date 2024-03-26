'use client'

import React from "react"
import Bio from "./components/Bio"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Jobs from "./components/Jobs"

export default function page() {
  return (
    <article>
      <h1 id="person">姜盛乾个人简历</h1>
      <button id="btn">导出PDF</button>
      <hr />
      <Bio />
      <Skills />
      <Projects />
      <Jobs />
      <hr />
    </article>
  )
}
