const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ',];

const animation = function (spinner, delay) {
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < spinner.length; i++) {
      setTimeout(() => {
        process.stdout.write(spinner[i]);
      }, delay += 200);
    }
  }
  setTimeout(() => {
    process.stdout.write(spinner[0]);
  }, delay += 200);
}
 animation(spinner, 100);



