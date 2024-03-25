import React from "react"

export const StrongText: React.FC<{ value: string }> = ({ value }) => {
  return <span className={`strong`}> {value} </span>
}

interface UlContentProps {
  details: Array<Array<string | { value: string }>>
}

export const UlContent = ({ details }: UlContentProps) => {
  return (
    <ul>
      {details.map((detail, index) => (
        <li key={index}>
          <p>{detail.map(item => typeof item === 'string' ? item : <StrongText value={item.value} />)}</p>
        </li>
      ))}
    </ul>
  )
}

// export const UlContent = ({ details }: UlContentProps) => {
//   return (
//     <ul>
//       {details.map((detail, index) => (
//         <li key={index}>
//           <p>
//             {detail.map((item, subIndex) => (
//               typeof item === 'string' ? (
//                 <React.Fragment key={subIndex}>{item}</React.Fragment>
//               ) : (
//                 <StrongText key={subIndex} value={item.value} />
//               )
//             ))}
//           </p>
//         </li>
//       ))}
//     </ul>
//   );
// }