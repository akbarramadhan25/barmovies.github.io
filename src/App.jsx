/* eslint-disable react/prop-types */
import './App.css'

export default function App() {

 
}


    




// function Header() {
//   return(
//     <div className='w-full'>
//       <h1 className='text-5xl font-bold text-center mb-8'>Welcome to my Forms</h1>
//     </div>
//   )
// }

// function MyForm() {
//   const [input, setInput] = useState('')
//   const [email, setEmail] = useState('')
//   const [textArea, setTextArea] = useState('')
//   function HandleSubmit(e) {
//     e.preventDefault()
//     alert('Terima kasih sudah mengisi form,' + input)
//   }

//   function HandleChange(e) {
//    const {name, value} = e.target;
//    if( name === 'input' ) {
//     setInput(value)
//    }else if(name === 'email') {
//     setEmail(value)
//    }else if(name === 'textarea') {
//     setTextArea(value)
//    }
//   }

//   return(
//     <div className='w-[90%] text-start'>
//       <form action="" onSubmit={HandleSubmit} className='w-full p-5'>
//         <InputName input={input} HandleChange={HandleChange}/>
//         <InputEmail email={email} HandleChange={HandleChange}/>
//         <Textarea textArea={textArea} HandleChange={HandleChange}/>
//         <Button></Button>
//       </form>
//     </div>
//   )
// }

// function InputName({ input, HandleChange }) {
//   return(
//     <>
//       <label htmlFor="" className='w-full  text-xl font-semibold mb-2'>Masukkan Nama :</label>
//           <input 
//           type="text"
//           name='input'
//           value={input}
//           onChange={HandleChange}
//           placeholder='Masukkan nama'
//           className='p-2 w-full border border-yellow-500 mb-5'/>
//     </>
//   )
// }

// function InputEmail({email, HandleChange}) {
//   return (
//     <>
//     <label htmlFor="" className='w-full  text-xl font-semibold my-2'>Masukkan Email :</label>
//         <input 
//         type="email"
//         value={email}
//         name='email'
//         onChange={HandleChange}
//         placeholder='Masukkan email'
//         className='p-2 w-full border border-yellow-500 mb-5'/>
//     </>
//   )
// }

// function Textarea({textArea, HandleChange}) {
//   return(
//     <>
//       <label htmlFor="" className='w-full  text-xl font-semibold my-2'>Kirim Pesan :</label>
//         <textarea
//         type="text"
//         name='textarea'
//         value={textArea}
//         onChange={HandleChange}
//         placeholder='Kirimi Pesan'
//         className='p-2 w-full border border-yellow-500 '></textarea>
//     </>
//   )
// }

// function Button() {
//   return (
//     <button type="submit" className='py-3 px-4 bg-blue-600 rounded-sm hover:bg-blue-500 mt-2'>Kirim</button>
//   )
// }



