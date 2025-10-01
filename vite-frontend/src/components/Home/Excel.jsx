const Excel = () => {
    return (
      <main className="">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex lmd:flex-row flex-col justify-around items-center mt-20 gap-5 p-5">


            <div className="flex flex-col justify-between items-start gap-4">
                <h2 className="text-textcl text-44 font-bold">How We Excel</h2>
                <p className="text-18 max-w-[532px]">Our teams excel at structuring ambiguous problems, building growth and transformation strategies, and creating technology solutions that make execution possible.</p>
            
                    <div className="relative h-8 w-48 bg-blue-600 my-4">
                    <div className="absolute h-full bg-blue-600 right-full w-screen"></div>
                    </div>
                
                <div className="2xl:max-w-[675px] max-w-[550px] w-full">
                  <img
                    src="/media/leadership.png"
                    className="object-cover h-full w-full"
                    alt="Group 1"
                  />
                </div>
            </div>

            <div className="flex flex-col justify-between items-start gap-4">
            <div className="2xl:max-w-[675px] max-w-[550px] w-full">
                  <img
                    src="/media/group1.png"
                    className="object-cover h-full w-full"
                    alt="Group 1"
                  />
                </div>
                <h2 className="text-textcl text-44 font-bold mt-10">What Makes Us Different</h2>
                <p className="text-18 max-w-[532px]">Other clubs teach cases. We give you clients. From day one, you'll be in front of real businesses, shaping strategies, and helping implement solutions. It's hands-on consulting experience: the kind that prepares you for boardrooms, not just interviews.</p>
                
                     
            </div>




        </div>
        
        </div>

        <div className="flex flex-row justify-end items-center w-full">
          <div className="h-8 w-[30%] bg-blue-600 my-4">
                      <div className="h-full bg-blue-600"></div>
            </div>
            </div>
      </main>
    );
}

export default Excel;