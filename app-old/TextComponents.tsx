import React from "react"

interface StrongTextProps {
  value: string
  link?: string
}

export const StrongText = ({ value, link }: StrongTextProps) => {
  return (
    <span className="strong">
      {link ? ( // Conditional rendering based on 'link' property
        <a href={link}>
          【{value}】
        </a>
      ) : (
        ` ${value} `
      )}
    </span>
  )
}

interface UlContentProps {
  details: Array<Array<string | { value: string, link?: string }>>
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
                <StrongText key={`${outerIndex}-${innerIndex}`} value={item.value} link={item.link} />
              )
            )}
          </p>
        </li>
      ))}
    </ul>
  )
}
