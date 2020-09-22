const sentence = "hello there from lighthouse labs";

let delay = 0;
let interval = 50;
for (let char of sentence) {
  setTimeout(() => process.stdout.write(char), delay);
  delay += interval;
}
setTimeout(() => process.stdout.write('\n'), delay);