import {DragEvent} from 'react'

export default function FileDrop() {
  const onDragOver = (e: DragEvent) => e.preventDefault()

  const onDrop = (e: DragEvent) => {
    e.preventDefault()

    const files = e.dataTransfer.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i)
        console.log(`file[${i}]`, file)

        // Blob으로서의 파일 처리
        const reader = new FileReader()

        reader.onload = () => {
          const blob = new Blob([reader.result as ArrayBuffer], {type: file?.type})
          console.log(`Blob for file[${i}]`, blob)

          // Blob 데이터를 URL로 변환하여 이미지로 표시할 수 있습니다.
          const imageUrl = URL.createObjectURL(blob)
          console.log(`Image URL for file[${i}]`, imageUrl)

          // 예를 들어, 이미지를 페이지에 추가하는 경우:
          const img = document.createElement('img')
          img.src = imageUrl
          document.body.appendChild(img)
        }

        if (file !== null) {
          reader.readAsArrayBuffer(file)
        }
      }
    }
  }

  return (
    <div>
      <p>File Drop</p>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image files over Me</h1>
      </div>
    </div>
  )
}
