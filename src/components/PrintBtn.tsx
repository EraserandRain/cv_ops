"use client"

const PrintBtn = ({ value }: { value: string }) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button onClick={handlePrint}>
      {value}
    </button>
  )
}

export default PrintBtn
