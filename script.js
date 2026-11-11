const imageUpload = document.getElementById('image-upload');
const profilePic = document.getElementById('profile-pic');

imageUpload.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    // Creates a temporary local URL for the uploaded image
    profilePic.src = URL.createObjectURL(file);
  }
});
