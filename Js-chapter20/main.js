// Error and Exception Handling

const makeError = () =>{
    try {                           
        // Simulating an error
         throw new Error("This is a simulated error.");
    }
    catch (error) {
        console.error("An error occurred:", error.message);
        console.error("Stack trace:", error.stack);
    }
    finally {
        console.log("Execution completed, whether an error occurred or not.");
    }
};
makeError();
