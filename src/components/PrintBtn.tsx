"use client"

const PrintBtn = ({ value }: { value: string }) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button className="absolute top-20 left-20" onClick={handlePrint}>
      {value}
    </button>
  )
}

export default PrintBtn
