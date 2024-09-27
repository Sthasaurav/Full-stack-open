import React, { useState } from 'react'
import { EDIT_AUTHOR } from '../queries/queries'
import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
function Birthyear() {
    const [name,setName]=useState('')
    const [birthyear,setBirthyear]=useState('')
    const [ changeBirthyear,result ] = useMutation(EDIT_AUTHOR)

    const submit=(event)=>{
        event.preventDefault()
        changeBirthyear({variables:{name,birthyear}})

    console.log('add birthyear...')
    setName('')
    setBirthyear('')

    }
    useEffect(() => {
      if(result.data && result.data.editAuthor === null){
        console.log('person not found')
      }
    }, [result.data])
   
  return (
    <div>
        <form action="" onSubmit={submit}>
        <h1>Set birthyear</h1>
        <div>
        <label htmlFor="">name</label><input value={name} onChange={({target})=>setName(target.value)}type="text" />
        </div>
        <div>
        <label htmlFor="">born</label><input value={birthyear} onChange={({target})=>setBirthyear(target.value)} type="text" />
        </div>
        <button type="submit">update author</button>
        </form>
    </div>
  )
}

export default Birthyear
