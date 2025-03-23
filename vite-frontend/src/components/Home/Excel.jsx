const Excel = () => {
    return (
      <main className="">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex lmd:flex-row flex-col justify-around items-center mt-20 gap-5 p-5">


            <div className="flex flex-col justify-between items-start gap-4">
                <h2 className="text-textcl text-44 font-bold">How We Excel</h2>
                <p className="text-18 max-w-[532px]">We are a student-run consulting organization delivering data-driven solutions and strategic insights. Using advanced analytics and innovative strategies, 
                    we help organizations achieve measurable results.</p>
            
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
                <p className="text-18 max-w-[532px]">We are a student-run consulting
                     organization delivering data-driven solutions and strategic insights. 
                     Using advanced analytics and innovative strategies, we help organizations achieve measurable results.</p>
                
                     
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