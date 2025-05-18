
import './App.css'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function App() {


  return (

    <div className='bg-slate-300 flex  gap-1 justify-center items-center  h-screen ' >
   <Button variant='destructive' className='hover:bg-red-300 '> click nee </Button>
    
    <Alert className='w-1/2'>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>This is an alert description.</AlertDescription>
      </Alert>
 <div>
   </div>
   </div>
  )
}

export default App
