import React from "react"

const Home = () => {
  return(
    <>
        <header id='Header'>
     <nav  class="flex justify-between items-center">
      
      <div class="text-md text-white flex flex-row gap-4 items-center">
      <h3 class='text-3xl text-white'>Unscripted</h3>
       
      <div class='pl-2 flex flex-row gap-4'>
      <h3>Our Mission</h3>
      <h3>Contact Us</h3>
      </div>
    
     
      </div>
      
      <div class="text-md text-white flex flex-row gap-8 items-center">
      <h3>sign in</h3>
      <button class="text-bold rounded py-2 px-2 text-xl">Try Unscripted free</button>
      </div>
      
     </nav>
     
     
     
     <div class='grid grid-cols-2 pt-16 flex text-white'>
  
    <div>
    <h1 id='bigH1' class='text-5xl '>Changing Education, <span class='text-9xl'>Digitaly</span> </h1>
  <p id='heroP' class='flex justify-end pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique eros vel odio vulputate sagittis.Integer ornare erat vitae metus elementum, ac congue mauris blandit. Etiam vulputate mi ut maximus semper. Aenean sed tempus no nulla
  </p>
  <p class='pt-2'>featured in:</p>
  
  <div class='flex flex-row gap-4'>
  <img class='w-16' src='img/Forbes.png'></img>
  <img class='w-32' src='img/Quebec.png'></img>
  <img class='w-32' src='img/Canada.png'></img>
  </div>
  
    </div>
    
    <div>
       <img class='flex items-center justify-center w-full' src="img/headerIMG.jpeg">
            </img>
    
    </div>
     
      

     
     </div>
     
    </header>
    </>
    
  )
}

export default Home;