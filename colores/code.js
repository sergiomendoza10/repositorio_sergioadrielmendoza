onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 225),randomNumber(0, 225),randomNumber(0, 225),0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("https://ummm.mnuu.nu/api/v1/download?sig=Oixc6VB0eaaJ4IvnBA3Q2%2F%2FoPudYgBO19Lbv6CjZN7W2cXfSA3rcVRISfeu7gCfccrVrJhCjPTz6TsEPkF%2FPiXy34QGA82csUQQkx%2BOw6qeSwFf2%2Fx%2BBlcVw6m8dL7GEMO6yQgpU7YTjw3ugoBWGvOFiWTk8FmLLCWZEVMhkRFK45cUglbgv0UnlIzJ9pCWaKrDMNqg%2Bz3qEN9CVP%2BjyrLZSfqLQKeCq26zdxV6F58EupCKZ6huLSqRaeaVdGm%2FpXQ9xqsnVa3X5y5CB7Il%2BVJ9oXFr9Ab%2FqEDZKlBmx8P3FjM9hCGT72vKIqKBLtv0DD5PR87gN9VKkkW4q%2Bovdnw%3D%3D&s=3&v=szjDBW9yUUM&f=mp3", false);
});
onEvent("text_imput1", "imput", function( ) {
  setProperty("screen1d", "image", "https://i.redd.it/crrocjllz7qf1.jpeg");
});
