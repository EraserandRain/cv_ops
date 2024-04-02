"use client"

const PrintBtn = ({ value }: { value: string }) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button id="btn" onClick={handlePrint}>
      {value}
    </button>
  )
}

export default PrintBtn
