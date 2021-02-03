function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const user = process.env.USER;
async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`#${user}TaOn`);
    await sleep(5000);
  }
}

main();
