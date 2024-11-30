async function handleCVDownload() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Validate form inputs
    if (!name || !email) {
      alert("Please fill out both fields.");
      return;
    }
  
    // Send data to the backend
    fetch("http://localhost:3000/api/save-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Details saved! Your download will start shortly.");
          // Trigger the file download
          window.open("http://localhost:3000/resume.pdf", "_blank");
        } else {
          return response.json().then((data) => {
            throw new Error(data.error || "Failed to process the request.");
          });
        }
      })
      .catch((error) => {
        alert("Something went wrong: " + error.message);
      });
  }
  