function chooseTopic() {
    const topics = ["JavaScript", "AI", "History", "Biology", "Philosophy"];
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
  }
  
  function gatherInformation(topic) {
    return `New information gathered about ${topic}`; 
  }
  
  function applyKnowledge(newKnowledge) {
    console.log("Applying knowledge:", newKnowledge);
  }
  
  for (let currentAge = 0; currentAge < 5; currentAge++) {  // For loop for aging
    const topic = chooseTopic();
    const newKnowledge = gatherInformation(topic);
    applyKnowledge(newKnowledge);
  }
  
  console.log("Till death."); 
  