'use client'

import React from 'react'

type CopyButtonProps = React.ComponentProps<'button'> & {
  copyText: string
}
const CopyButton = ({ copyText, ...props }: CopyButtonProps) => {
  const handleCopy = () => {
    copy(copyText)
  }
  return <button onClick={handleCopy} {...props} />
}

const copy = (text: string) => {
  return new Promise((resolve) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text).then(resolve)

      return
    }
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    textArea.setSelectionRange(0, 99999)
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('복사 실패', err)
    }
    textArea.setSelectionRange(0, 0)
    document.body.removeChild(textArea)

    resolve('')
  })
}

export default CopyButton
