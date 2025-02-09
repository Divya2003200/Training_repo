function simulateMemoryLeak() {
    setInterval(() => {
      memoryLeakArray.push(new Array(1000000).fill(0)); 
      console.log("Memory growing:", memoryLeakArray.length);
    }, 1000);
  }
  
  function cleanupMemory() {
    memoryLeakArray = []; 
    console.log("Memory cleaned up!");
  }
  
  simulateMemoryLeak(); 
  setTimeout(cleanupMemory, 10000); 