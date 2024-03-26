import React from "react"

interface StrongTextProps {
  value: string
}

export const StrongText = ({ value }: StrongTextProps) => {
  return <span className={`strong`}> {value} </span>
}

interface UlContentProps {
  details: Array<Array<string | { value: string }>>
}

export const UlContent = ({ details }: UlContentProps) => {
  return (
    <ul>
      {details.map((detail, outerIndex) => (
        <li key={outerIndex}>
          <p>
            {detail.map((item, innerIndex) =>
              typeof item === "string" ? (
                item
              ) : (
                <StrongText key={`${outerIndex}-${innerIndex}`} value={item.value} />
              )
            )}
          </p>
        </li>
      ))}
    </ul>
  );
};
