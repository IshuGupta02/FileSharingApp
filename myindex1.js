const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector("#browseBtn");
const sharingContainer = document.querySelector(".sharing-container");
const copyURLBtn = document.querySelector("#copyURLBtn");
const fileURL = document.querySelector("#fileURL");
const emailForm = document.querySelector("#emailForm");
const maxAllowedSize = 100 * 1024 * 1024; 

browseBtn.addEventListener("click", (e) => {
  // console.clear();
    fileInput.click();
   // console.log("uploaded, ", files[0].name);
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
 dropZone.classList.add("dragged");
});



dropZone.addEventListener("dragleave", (e) => {
  dropZone.classList.remove("dragged");

});


dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
   dropZone.classList.add("dragged");

  // console.clear();
   
    const files = e.dataTransfer.files;

    if (files.length === 1) {
        if (files[0].size < maxAllowedSize) {
        fileInput.files = files;
        
        uploadFile();
        }
        else{
          console.log("file size exceeds maximum limit of 100mb");

        }
    } 
    else{
      console.log("only one file can be uploaded");
    }
    dropZone.classList.remove("dragged");

    // console.log("uploaded, ", files[0].name);

  });



 


  fileInput.addEventListener("change", () => {
      if(fileInput.files.length==0){
        alert("To choose a file, either use drag or browse option");

      }
      else{
        if (fileInput.files[0].size > maxAllowedSize) {

          fileInput.value = ""; 
          return;
        }
        uploadFile();

      }

    
  });


  copyURLBtn.addEventListener("click", () => {
    fileURL.select();
    document.execCommand("copy");
  });

  fileURL.addEventListener("click", () => {
    fileURL.select();
  });




  const uploadFile = () => {
  
    files = fileInput.files;
    const formData = new FormData();
    formData.append("myfile", files[0]);

    console.log("uploaded succesfully, ", files[0].name);
    fileURL.value=files[0].name;

  };


emailForm.addEventListener("submit", (e) => {

  confirm("Do you want to send the mail?");
  e.preventDefault(); 



  const url = fileURL.value;

  const formData = {
   
    emailTo: emailForm.elements["to-email"].value,
    emailFrom: emailForm.elements["from-email"].value,
  };
  console.log(formData);
 
  
});








