function doStuff() {
  
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doStuff);
} else {  // `DOMContentLoaded` has already fired
  doStuff();
}
