profile_imgs = document.querySelectorAll(".profile");
random_img = profile_imgs[Math.floor(Math.random() * profile_imgs.length)];
random_img.style.display = "inline-block";
