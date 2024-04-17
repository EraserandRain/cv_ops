interface StrongTextProps {
  mainStr: string
  subStrs?: string[]
}

export const StrongText = ({ mainStr, subStrs }: StrongTextProps) => {
  if (!subStrs || subStrs.length === 0) {
    return <p>{mainStr}</p>
  }

  subStrs.forEach(subStr => {
    const regex = new RegExp(subStr, 'g');
    mainStr = mainStr.replace(regex, `<span class='strong'>$&</span>`)
  })

  return (
    <span dangerouslySetInnerHTML={{ __html: mainStr }} />
  )
}

interface StrongTextListProps {
  texts: StrongTextProps[]
}

export const StrongTextList = ({ texts }: StrongTextListProps) => {
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>
          <StrongText mainStr={text.mainStr} subStrs={text.subStrs} />
        </li>
      ))}
    </ul>
  )
}
