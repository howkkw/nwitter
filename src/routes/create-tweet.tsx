import React, { useState } from "react"
import { auth, db, storage } from "../firebase"
import { addDoc, collection, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

export default function CreateTweet(){
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState("")
const [comments, setComments] = useState("")
const [file, setFile] = useState<File | null>(null)
const User = auth.currentUser
const onChangeTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    setComments(e.target.value)

}
const onChangeFile = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target
    if(files && files.length ==1 && e.target.files[0].size<1000000){
        setFile(files[0])
        console.log(e.target.files[0].size)

    }
    

}
const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(isLoading ||  !User || comments == "" || comments.length > 180) return;
    
    try{
        setIsLoading(true)
        const tweets =  await addDoc(collection(db, "tweets"), {
            comments : comments,
            user_id : User.uid ,
            username : User.displayName || "Anonymous",
            createdAt : new Date(),

        })
        if(file){
            const locationRef = ref(storage,`tweets/${User.uid}-${User.displayName}/${tweets.id}`)
            const results = await uploadBytes(locationRef, file)
            const url = await getDownloadURL(results.ref)
            await updateDoc(tweets, {image:url})
            setComments("")
            setFile(null)
        }   
    }
    catch(e){
        //setError(e.message)
        console.log(e)
    }
    finally{
        setIsLoading(false)
    }


}


    return(
        <>
<div className="flex items-start space-x-4">
  <div className="flex-1 min-w-0">
    <form action="#" className="relative md:w-[600px] mx-auto" onSubmit={onSubmit}>
      <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        <label htmlFor="comment" className="sr-only">Add your comment</label>
        <textarea onChange={onChangeTextArea} value={comments} rows="3" name="comment" id="comment" className="p-4 block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="What's happening today?"></textarea>

        <div className="py-2" aria-hidden="true">
          <div className="py-px">
            <div className="h-9"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            {file ? <label htmlFor="file" className="-m-2.5 flex h-10 w-auto items-center justify-center rounded-full text-gray-400 hover:text-gray-500 whitespace-nowrap">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="gray" aria-hidden="true">
                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
              </svg>Added!
              <label  className="sr-only">Photo Added!</label>
            </label> : <label htmlFor="file" className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
              </svg>
              <label  className="sr-only">Attach a file</label>
            </label>}
            
            <input className="hidden" type="file" id="file" name="file" onChange={onChangeFile}  accept="image/*"/>
          </div>
          <div className="flex items-center">
          </div>
        </div>
        <div className="flex-shrink-0">
          <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading ? "Loading..." : "Create Tweets!"}</button>
        </div>
      </div>
    </form>
  </div>
</div>
</>
    )


}