// Import the express module
const express = require("express");
const cloudinary = require("cloudinary").v2;
// Create an instance of an Express application
const app = express();

// Define the port number
const port = 3000;

cloudinary.config({
  cloud_name: "dcp8b2xlq",
  api_key: "495695581568143",
  api_secret: "ooDABhfAF7Bz6eZAs0qUa4pJeGc",
  secure: true,
});

// Define a route for the root URL
app.get("/", async (req, res) => {
  //   uploadVideo();
  try {
    const results = await cloudinary.uploader.upload("pspk.jpg", {
      detection: "coco",
      auto_tagging: 0.6,
    });
    console.log(results);
    res.status(200).json(results);
  } catch (e) {
    console.log(e);
  }
});

function uploadVideo() {
  //   cloudinary.uploader
  //     .upload("test.mp4", {
  //       resource_type: "video",
  //       categorization: "google_video_tagging",
  //     })
  //     .then((result) => console.log(result));

  cloudinary.uploader
    .upload("pspk.jpg", {
      categorization: "google_tagging",
      auto_tagging: 0.6,
    })
    .then((result) => console.log(result));
}

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
