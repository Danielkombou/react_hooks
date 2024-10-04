import React, { useState } from 'react';

const TypingIndicator = () => {
  const [isTyping, setIsTyping] = useState(false);

  // Function to simulate typing
  const startTyping = () => {
    setIsTyping(true);
    // Simulate typing duration
    setTimeout(() => {
      setIsTyping(false);
    }, 2000); // You can adjust the duration as per your requirement
  };

  return (
    <div>
      {isTyping ? (
        <label htmlFor="">typing...</label>
      ) : (
        <input type="text" onChange={startTyping} />
      )}
    </div>
  );
};

export default TypingIndicator;
