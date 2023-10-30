import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { FirebaseError } from "firebase/app"
import GithubButton from "../components/github-button"

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(loading || email == "" || password == "") return;
        try{
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(e){
            if(e instanceof FirebaseError){
            setError(e.message)
            }

        }
        finally{
            setLoading(false)

        }
        
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.name === "email" && setEmail(e.target.value)
        e.target.name === "password" && setPassword(e.target.value)

        

    }
return (<>


    <div className="mt-10 space-y-10 divide-gray-900/10 md:w-[600px] mx-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-1">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Log Into</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Log into our Services!
          </p>
        </div>

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={handleSubmit}>
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 E-Mail
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 "
                      onChange={onChange}
                      placeholder="Type your email here"
                    />
                  </div>
                </div>
              </div>


              <div className="sm:col-span-4">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 PASSWORD
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 "
                      onChange={onChange}
                      placeholder="Type your password here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Loading..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
      {error == "" ? null : <div className="mt-10 text-center border-transparent text-red-950">{error}</div>}
    <div className="flex items-center justify-center">
        Do you have no account? <a href="/create" className="text-indigo-600 hover:text-indigo-500">　Create one! →</a>
  
    </div>
    <GithubButton />
    </div>
    
    </>)

}