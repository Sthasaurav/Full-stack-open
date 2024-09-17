import { useState } from 'react'


export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}











//   /* const [content, setContent] = useState('')
//   const [author, setAuthor] = useState('')
//   const [info, setInfo] = useState('') */

//   const allContent = useField('content')
//   const allAuthor = useField('author')
//   const information = useField('info')


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     props.addNew({
//       content: allContent.value,
//       author: allAuthor.value,  
//       info: information.value,
//       votes: 0
//     })
//     navigate('/')
// 	@@ -97,15 +102,15 @@ const CreateNew = (props) => {
//       <form onSubmit={handleSubmit}>
//         <div>
//           content
//           <input {...allContent} />
//         </div>
//         <div>
//           author
//           <input {...allAuthor} />
